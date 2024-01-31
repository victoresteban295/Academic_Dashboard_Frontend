import { reorderSubpoints } from "@/lib/utils/checklist/frontend/modifySubpoint";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import SubpointsSection from "../SubpointsSection/SubpointsSection";
import NewCheckpointSection from "../NewCheckpointSection";
import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";

const UnmarkSubpointsSection = ({
    username, 
    showAllEdit,
    isParentComplete,
    listId,
    groupId,
    pointIdx,
    subpoints,
    checklists, 
    changeChecklists, 
    groups, 
    changeGroups, 
    showNewPoint, 
    hideNewPoint, 
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
    
    /* Dnd-kit: Make Component Draggable */
    /* Converts Component into Dropable Container */
    const mouseSensor = useSensor(MouseSensor, {
        //Require the mouse to move 10px before activating drag
        //For Mouse: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const touchSensor = useSensor(TouchSensor, {
        //For Touch Screen: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const sensors = useSensors(mouseSensor, touchSensor);
    //Subpoint Getting Dragged
    const [activeSubpoint, setActiveSubpoint] = useState(''); 
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveSubpoint(active.id);
    }
    const handleDragEnd = async (event) => {
        setActiveSubpoint('');
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            try {
                //Re-order Checkpoints
                const { 
                    updatedLists, 
                    updatedGroups, 
                    updatedPoints, 
                    completedPoints
                } = reorderSubpoints(
                    checklists, 
                    groups,
                    listId,
                    groupId,
                    pointIdx,
                    active.id,
                    over.id);

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await modifyCheckpoints(listId, updatedPoints, completedPoints);
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
            modifiers={[restrictToParentElement]}
        >
            <SortableContext
                items={subpoints.map(subpoint => subpoint.index)}
                strategy={verticalListSortingStrategy} 
            >
                <Stack
                    className='supoints-section'
                    divider={
                        (activeSubpoint === '') && 
                        <Divider 
                            variant='middle'
                            flexItem
                        />
                    }
                    spacing={0}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {subpoints.map((subpoint) => {
                        const { index: subpointIdx, content } = subpoint;
                        return(
                            <SubpointsSection
                                key={subpointIdx}
                                activeSubpoint={activeSubpoint}
                                username={username}
                                isParentComplete={isParentComplete}
                                listId={listId}
                                groupId={groupId}
                                pointIdx={pointIdx}
                                groups={groups}
                                changeGroups={changeGroups}
                                checklists={checklists}
                                changeChecklists={changeChecklists}
                                showAllEdit={showAllEdit}
                                subpointIdx={subpointIdx}
                                content={content}
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
                            index={pointIdx}
                            groups={groups}
                            changeGroups={changeGroups}
                            checklists={checklists}
                            changeChecklists={changeChecklists}
                            hideNewPoint={hideNewPoint}
                            isSubpoint={true}
                            handleOpenAlert={handleOpenAlert}
                        />
                    )}
                </Stack>
            </SortableContext>
        </DndContext>
    )
}

export default UnmarkSubpointsSection;
