import { Stack, Box, Button } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import NewGroupBackdrop from "./Backdrops/NewGroupBackdrop";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { reorderGroups } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { reorderUserGroups } from "@/lib/utils/checklist/backend/backendGrouplist";
import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";

const UserGrouplists = ({ 
    username, 
    groups,
    allChecklists,
    changeGroups,
    activeList, 
    handleActiveList }) => {

    /* Backdrop Menu State Value & Function */
    /* Create New Group */
    const [openNewGroup, setOpenNewGroup] = useState(false);
    const handleOpenNewGroup = () => {
        setOpenNewGroup(true);
    }
    const handleCloseNewGroup = () => {
        setOpenNewGroup(false);
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
    const [activeGroup, setActiveGroup] = useState('');
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveGroup(active.id);
    }
    const handleDragEnd = (event) => {
        setActiveGroup('');
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            //Re-order Groups
            const updatedGroups = reorderGroups(groups, active.id, over.id);
            
            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            reorderUserGroups(username, updatedGroups);
            reloadChecklistpage();
        }
    }

    //Does User Have an Groups
    const hasGroups = groups.length > 0;

    return (
        <>
            {hasGroups ? (
                <DndContext
                    collisionDetection={closestCenter} 
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                    sensors={sensors}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                >
                    <Stack
                        className='user-grouplists-section'
                    >
                        <SortableContext
                            items={groups.map(group => group.groupId)}
                            strategy={verticalListSortingStrategy}
                        >
                            {groups.map((group) => {
                                const { title, groupId, checklists } = group;
                                return(
                                    <GrouplistOption 
                                        key={groupId}
                                        activeGroup={activeGroup}
                                        username={username}
                                        activeList={activeList}
                                        handleActiveList={handleActiveList}
                                        allChecklists={allChecklists}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        title={title}
                                        groupId={groupId}
                                        checklists={checklists}
                                    />
                                )
                            })}
                        </SortableContext>
                    </Stack>
                </DndContext>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        borderWidth: '2px',
                        borderStyle: 'dashed',
                    }}
                >
                    <NewGroupBackdrop
                        username={username}
                        open={openNewGroup} 
                        handleClose={handleCloseNewGroup}
                        groups={groups}
                        changeGroups={changeGroups}
                    />
                    <Button
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={handleOpenNewGroup}
                        sx={{
                            width: '100%',
                            color: '#000',
                        }}
                    >
                        Create New Group 
                    </Button>
                </Box>
            )}
        </>
    )
}

export default UserGrouplists;
