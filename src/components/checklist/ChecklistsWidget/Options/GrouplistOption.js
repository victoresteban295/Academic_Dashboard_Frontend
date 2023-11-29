"use client"
import { Box, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import ChecklistOption from "./ChecklistOption";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import DeleteGroupBackdrop from "../Backdrops/DeleteGroupBackdrop";
import WarnDeleteBackdrop from "../Backdrops/WarnDeleteBackdrop";
import { deleteGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { deleteGrouplist } from "@/lib/utils/checklist/backend/backendGrouplist";
import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";

const GrouplistOption = ({ 
    username, 
    activeList, 
    handleActiveList, 
    allChecklists,
    groups,
    changeGroups,
    title, 
    groupId, 
    checklists }) => {

    /* ListIds of All Checklists Under This Group */
    const listIds = [];
    checklists.map(checklist => {
        listIds.push(checklist.listId);
    });

    /* All ListIds of All the User's Checklists (Grouped & Non-Grouped) */
    let allListIds = allChecklists.map(checklist => checklist.listId);
    groups.map(group => {
        group.checklists.map(checklist => {
            allListIds.push(checklist.listId);
        })
    })
    
    /* Expands Groups UI (Exposes Grouped Checklists)*/
    const [isExpanded, setExpanded] = useState(listIds.includes(activeList));
    const handleOpen = () => {
        setExpanded(true);
    }
    const handleClose = () => {
        setExpanded(false);
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
    /* Create New Checklist */
    const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
    const handleOpenDeleteGroup = () => {
        setOpenDeleteGroup(true);
    }
    const handleCloseDeleteGroup = () => {
        setOpenDeleteGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Create New Checklist */
    const [openWarnDelete, setOpenWarnDelete] = useState(false);
    const handleOpenWarnDelete = () => {
        setOpenWarnDelete(true);
    }
    const handleCloseWarnDelete = () => {
        setOpenWarnDelete(false);
    }

    /* Delete Group */
    const handleDeleteGroup = () => {
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
        deleteGrouplist(username, groupId);
        reloadChecklistpage();
    }

    return (
        <Stack
            id={groupId}
            className="grouplist-container"
            spacing={1}
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                my: isExpanded ? 1 : 0.5,
                py: isExpanded ? 1 : 0,
            }}
        >
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
                }}
            >
                <Box>
                    {isExpanded ? (
                        <IconButton size='small' onClick={handleClose}>
                            <ExpandLess fontSize='inherit' />
                        </IconButton>
                    ) : (
                        <IconButton size='small' onClick={handleOpen}>
                            <ExpandMore fontSize='inherit' />
                        </IconButton>
                    )}
                    <Typography
                        variant="button"
                    >
                        {title}
                    </Typography>
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
                    <MenuItem>
                        Rename Group
                    </MenuItem>
                    <MenuItem>
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
            <Stack
                className='grouplist-checklists-section'
                spacing={0.5}
                sx={{
                    display: isExpanded ? 'inline' : 'none',
                    px: 1,
                }}
            >
                {checklists.map((checklist) => {
                    const { title, listId } = checklist;
                    return(
                        <ChecklistOption
                            username={username}
                            activeList={activeList}
                            handleActiveList={handleActiveList}
                            title={title}
                            listId={listId}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default GrouplistOption;
