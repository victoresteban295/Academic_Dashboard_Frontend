"use client"
import { Box, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import ChecklistOption from "./ChecklistOption";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";
import { useState } from "react";

const GrouplistOption = ({ username, activeList, handleActiveList, title, groupId, checklists }) => {
    /* ListIds of All Checklists Under This Group */
    const listIds = [];
    checklists.map(checklist => {
        listIds.push(checklist.listId);
    });
    
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
