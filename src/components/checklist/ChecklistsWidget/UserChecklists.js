import { Box, Button, Stack } from "@mui/material";
import ChecklistOption from "./Options/ChecklistOption";
import { AddCircleOutline } from "@mui/icons-material";
import NewChecklistBackdrop from "./Backdrops/NewChecklistBackdrop";
import { useState } from "react";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { reorderChecklists } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { reloadChecklistpage, reorderUserChecklists } from "@/lib/utils/checklist/backend/backendChecklist";

const UserChecklists = ({ 
    username, 
    checklists,
    changeChecklists,
    activeList, 
    handleActiveList, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }

    //Determine If User has Checklist
    const hasChecklists = checklists.length > 0;

    /* Backdrop Menu State Value & Function */
    /* Create New Checklist */
    const [openNewList, setOpenNewList] = useState(false);
    const handleOpenNewList = () => {
        setOpenNewList(true);
    }
    const handleCloseNewList = () => {
        setOpenNewList(false);
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
    const [activeChecklist, setActiveChecklist] = useState(''); 
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveChecklist(active.id);
    }
    const handleDragEnd = async (event) => {
        setActiveChecklist('');
        const outdatedLists = [...userChecklists];
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            try {
                //Re-order Checklists
                const updatedLists = reorderChecklists(checklists, active.id, over.id);

                //Update State Value
                changeChecklists(updatedLists);

                //Backend API: Update Database
                await reorderUserChecklists(username, updatedLists);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeChecklists(outdatedLists);
            }
        }
    }

    return (
        <>
            {hasChecklists ? (
                <DndContext
                    collisionDetection={closestCenter} 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    sensors={sensors}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                >
                    <Stack
                        className='user-checklists-section'
                        spacing={0.5}
                    >
                        <SortableContext
                            items={checklists.map(list => list.listId)}
                            strategy={verticalListSortingStrategy} 
                        >
                            {checklists.map((checklist) => {
                                const { title, listId } = checklist;
                                return(
                                    <ChecklistOption 
                                        key={listId}
                                        activeChecklist={activeChecklist}
                                        username={username}
                                        activeList={activeList}
                                        handleActiveList={handleActiveList}
                                        title={title}
                                        listId={listId}
                                    />
                                )
                            })}
                        </SortableContext>
                    </Stack>
                </DndContext>
            ) : (
                <Box
                    className='checklist-option' 
                    sx={{
                        display: 'flex',
                        borderWidth: '2px',
                        borderStyle: 'dashed',
                        borderRadius: '10px',
                    }}
                >
                    <NewChecklistBackdrop 
                        username={username}
                        open={openNewList}
                        handleClose={handleCloseNewList}
                        checklists={checklists}
                        changeChecklists={changeChecklists}
                        handleActiveList={handleActiveList}
                        handleOpenAlert={handleOpenAlert}
                    />
                    <Button
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={handleOpenNewList}
                        sx={{
                            width: '100%',
                            color: '#000',
                        }}
                    >
                        Create New Checklist
                    </Button>
                </Box>
            )}
        </>
    )
}

export default UserChecklists;
