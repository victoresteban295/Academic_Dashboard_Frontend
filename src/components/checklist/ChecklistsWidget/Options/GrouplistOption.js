"use client"
import { Box, Button, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import ChecklistOption from "./ChecklistOption";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import DeleteGroupBackdrop from "../Backdrops/DeleteGroupBackdrop";
import WarnDeleteBackdrop from "../Backdrops/WarnDeleteBackdrop";
import { deleteGroup, reorderGroupChecklist } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { deleteGrouplist, reorderChecklists } from "@/lib/utils/checklist/backend/backendGrouplist";
import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import RenameGroupBackdrop from "../Backdrops/RenameGroupBackdrop";
import ListInGroupBackdrop from "../Backdrops/ListInGroupBackdrop";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";

const GrouplistOption = ({ 
    activeGroup,
    username, 
    activeList, 
    handleActiveList, 
    allChecklists,
    groups,
    changeGroups,
    title, 
    groupId, 
    checklists, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    /* Check if Group Contains the Current Checklist*/
    useEffect(() => {
        //Extract Current Checklist's listId
        const currentList = localStorage.getItem("currentList");
        setExpanded(listIds.includes(currentList));
    }, []);

    /* ListIds of All Checklists Under This Group */
    const listIds = [];
    checklists.map(checklist => {
        listIds.push(checklist.listId);
    });

    /* Expands Groups UI (Exposes Grouped Checklists)*/
    const [isExpanded, setExpanded] = useState(false);
    const handleOpen = () => {
        setExpanded(true);
    }
    const handleClose = () => {
        setExpanded(false);
    }

    /* All ListIds of All the User's Checklists (Grouped & Non-Grouped) */
    let allListIds = allChecklists.map(checklist => checklist.listId);
    groups.map(group => {
        group.checklists.map(checklist => {
            allListIds.push(checklist.listId);
        })
    })

    /* Dnd-kit: Make Component Draggable */
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({id: groupId});
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
        const outdatedGroups = [...userGroups];
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            try {
                //Re-order Groups
                const { 
                    updatedGroups, 
                    reorderChecklists
                } = reorderGroupChecklist(groups, groupId, active.id, over.id);
                
                //Update State Value
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await reorderChecklists(username, reorderChecklists);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeGroups(outdatedGroups);
            }
        }
    }
    /* Is Group Currently Being Dragged */
    const isActive = activeGroup === groupId;
    /* Allows us to pick up draggable componenet */
    const style = {
        transform: CSS.Transform.toString(transform && {...transform, scaleY: 1}),
        transition,
    }
    

    /* Options Menu's State Value & Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openOptions = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeOptions = () => {
        setAnchorEl(null);
    }

    /* Backdrop Menu State Value & Function */
    /* Rename Group */
    const [openRenameGroup, setOpenRenameGroup] = useState(false);
    const handleOpenRenameGroup = () => {
        setOpenRenameGroup(true);
    }
    const handleCloseRenameGroup = () => {
        setOpenRenameGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Create New Checklist Under Group */
    const [openListInGroup, setOpenListInGroup] = useState(false);
    const handleOpenListInGroup = () => {
        setOpenListInGroup(true);
    }
    const handleCloseListInGroup = () => {
        setOpenListInGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Delete Group */
    const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
    const handleOpenDeleteGroup = () => {
        setOpenDeleteGroup(true);
    }
    const handleCloseDeleteGroup = () => {
        setOpenDeleteGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Warn Current Checklist is Under Deleted Group */
    const [openWarnDelete, setOpenWarnDelete] = useState(false);
    const handleOpenWarnDelete = () => {
        setOpenWarnDelete(true);
    }
    const handleCloseWarnDelete = () => {
        setOpenWarnDelete(false);
    }

    /* Delete Group */
    const handleDeleteGroup = async () => {
        const outdatedGroups = [...userGroups];
        try {
            handleClose(); //Close Group Tab
            const updatedGroups = deleteGroup(groups, groupId);

            //Current Checklist is Under Deleted Group
            if(listIds.includes(activeList) && allListIds.length > 0) {
                //Set New Active List to User's 1st Checklist
                handleActiveList(allListIds[0]);
            } else if(listIds.includes(activeList) && allListIds.length === 0) {
                //User Has No More Checklist
                localStorage.removeItem("currentList");
            }

            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            await deleteGrouplist(groupId);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(outdatedGroups);
        }
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <Stack
                id={groupId}
                className="grouplist-container"
                spacing={1}
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    my: (isExpanded && !isActive) ? 1 : 0.5,
                    py: (isExpanded && !isActive) ? 1 : 0,
                    bgcolor: isActive ? '#cecece' : ''
                }}
            >
                <RenameGroupBackdrop 
                    username={username}
                    title={title}
                    groupId={groupId}
                    open={openRenameGroup}
                    handleClose={handleCloseRenameGroup}
                    groups={groups}
                    changeGroups={changeGroups}
                    handleOpenAlert={handleOpenAlert}
                />
                <ListInGroupBackdrop
                    username={username}
                    group={title}
                    groupId={groupId}
                    open={openListInGroup}
                    handleClose={handleCloseListInGroup}
                    groups={groups} 
                    changeGroups={changeGroups}
                    handleActiveList={handleActiveList}
                    handleOpenAlert={handleOpenAlert}
                />
                <DeleteGroupBackdrop 
                    title={title}
                    checklists={checklists}
                    open={openDeleteGroup}
                    handleClose={handleCloseDeleteGroup}
                    handleOpenWarnDelete={handleOpenWarnDelete}
                    handleDeleteGroup={handleDeleteGroup}
                    activeList={activeList}
                />
                <WarnDeleteBackdrop 
                    title={title}
                    open={openWarnDelete}
                    handleClose={handleCloseWarnDelete}
                    handleDeleteGroup={handleDeleteGroup}
                />
                <Box
                    className="grouplist-title-section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '90%',
                            color: 'text.primary'
                        }}
                    >
                        {(isExpanded && !isActive) ? (
                            <Button
                                variant="text"
                                onClick={handleClose}
                                startIcon={
                                    <ExpandLess 
                                        fontSize='small'
                                    />
                                }
                                sx={{
                                    flexGrow: 1,
                                    color: 'text.primary',
                                    display: 'flex',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Typography
                                        noWrap={true}
                                        variant="button"
                                    >
                                        {title}
                                    </Typography>
                                </Box>
                            </Button> 
                        ) : (
                            <Button
                                variant="text"
                                onClick={handleOpen}
                                startIcon={
                                    <ExpandMore 
                                        fontSize='small'
                                    />
                                }
                                sx={{
                                    flexGrow: 1,
                                    color: 'text.primary'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Typography
                                        noWrap={true}
                                        variant="button"
                                    >
                                        {title}
                                    </Typography>
                                </Box>
                            </Button> 
                        )}
                    </Box>
                    <IconButton 
                        onClick={openOptions}
                        size='small'
                    >
                        <MoreVert fontSize='inherit' />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="groups-options-menu"
                        open={open}
                        onClose={openOptions}
                        onClick={closeOptions}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem
                            onClick={handleOpenRenameGroup}
                        >
                            Rename Group
                        </MenuItem>
                        <MenuItem
                            onClick={handleOpenListInGroup}
                        >
                            Add New Checklist
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            onClick={handleOpenDeleteGroup}
                            sx={{
                                color: '#ef476f'
                            }}
                        >
                            Delete Group
                        </MenuItem>
                    </Menu>
                </Box>
                {checklists.length > 0 ? (
                    <DndContext
                        collisionDetection={closestCenter} 
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        sensors={sensors}
                        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                    >
                        <Stack
                            className='grouplist-checklists-section'
                            spacing={0.5}
                            sx={{
                                display: (isExpanded && !isActive) ? 'inline' : 'none',
                                px: 1,
                            }}
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
                    <Typography
                        variant='body2'
                        align='center'
                        sx={{
                            display: (isExpanded && !isActive) ? 'inline' : 'none',
                            fontWeight: '700',
                            px: 1,
                        }}
                    >
                        No checklist under this group
                    </Typography>
                )}
            </Stack>
        </div>
    )
}

export default GrouplistOption;
