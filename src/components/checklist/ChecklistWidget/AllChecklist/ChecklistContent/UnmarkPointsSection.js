import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Divider, Stack } from "@mui/material";
import CheckpointsSection from "./CheckpointsSection/CheckpointsSection";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { reorderCheckpoints } from "@/lib/utils/checklist/frontend/modifyCheckpoint";
import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { useState } from "react";
import NewCheckpointSection from "./NewCheckpointSection";

const UnmarkPointsSection = ({
    username, 
    checklists, 
    changeChecklists, 
    groups, 
    changeGroups,
    listId,
    groupId,
    checkpoints,
    completedPoints,
    showNewPoint,
    hideNewPoint,
    showAllEdit, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    /* Dnd-Kit: Draggable Functionality */
    const mouseSensor = useSensor(MouseSensor, {
        //Require the mouse to move 10px before activating drag
        activationConstraint: {
            distance: 10,
        }
    });
    const touchSensor = useSensor(TouchSensor, {
        //For Touch Screen: Require touch to move 10px before activating drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const sensors = useSensors(mouseSensor, touchSensor);
    //Checklist Getting Dragged
    const [activeCheckpoint, setActiveCheckpoint] = useState(''); 
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveCheckpoint(active.id);
    }
    const handleDragEnd = async (event) => {
        setActiveCheckpoint('');
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            try {
                //Re-order Checkpoints
                const { updatedLists, updatedGroups, updatedPoints } = reorderCheckpoints(
                    checklists, 
                    groups, 
                    listId, 
                    groupId, 
                    active.id, 
                    over.id);

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await modifyCheckpoints(username, listId, updatedPoints, completedPoints);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeChecklists(outdatedLists);
                changeGroups(outdatedGroups);
            }
        }
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
            style={{
                backgroundColor: 'red',
            }}
        >
            <SortableContext
                items={checkpoints.map(checkpoint => checkpoint.index)}
                strategy={verticalListSortingStrategy} 
            >
                <Stack
                    className='unmarked-points-section'
                    divider={
                        (activeCheckpoint === '') &&
                        <Divider 
                            variant='middle' 
                            flexItem 
                        />
                    }
                    spacing={0}
                    sx={{
                        width: '100%',
                    }}
                >
                    {checkpoints.map((checkpoint) => {
                        const { index, content, subpoints, completedSubpoints } = checkpoint;
                        return(
                            <CheckpointsSection
                                key={index}
                                activeCheckpoint={activeCheckpoint}
                                showAllEdit={showAllEdit}
                                username={username}
                                listId={listId}
                                groupId={groupId}
                                groups={groups}
                                changeGroups={changeGroups}
                                checklists={checklists}
                                changeChecklists={changeChecklists}
                                index={index}
                                content={content}
                                subpoints={subpoints}
                                completedSubpoints={completedSubpoints}
                                isCompleted={false}
                                handleOpenAlert={handleOpenAlert}
                            />
                        )
                    })}
                    {showNewPoint && (
                        <NewCheckpointSection
                            username={username}
                            listId={listId}
                            groupId={groupId}
                            groups={groups}
                            changeGroups={changeGroups}
                            checklists={checklists}
                            changeChecklists={changeChecklists}
                            hideNewPoint={hideNewPoint}
                            isSubpoint={false}
                            handleOpenAlert={handleOpenAlert}
                        />
                    )}
                </Stack>
            </SortableContext>
        </DndContext>
    )
}

export default UnmarkPointsSection;
