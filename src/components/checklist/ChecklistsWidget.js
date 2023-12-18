import { Box, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import UserChecklists from "./ChecklistsWidget/UserChecklists";
import UserGrouplists from "./ChecklistsWidget/UserGrouplists";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import NewChecklistBackdrop from "./ChecklistsWidget/Backdrops/NewChecklistBackdrop";
import NewGroupBackdrop from "./ChecklistsWidget/Backdrops/NewGroupBackdrop";

const ChecklistsWidget = ({ 
    username, 
    checklists,
    changeChecklists,
    groups,
    changeGroups,
    activeList, 
    handleActiveList, 
    handleOpenAlert }) => {

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
    const [openNewList, setOpenNewList] = useState(false);
    const handleOpenNewList = () => {
        setOpenNewList(true);
    }
    const handleCloseNewList = () => {
        setOpenNewList(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Create New Group */
    const [openNewGroup, setOpenNewGroup] = useState(false);
    const handleOpenNewGroup = () => {
        setOpenNewGroup(true);
    }
    const handleCloseNewGroup = () => {
        setOpenNewGroup(false);
    }

    return (
        <Box
            sx={{
                width: '100%',
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
            <NewGroupBackdrop 
                username={username}
                open={openNewGroup} 
                handleClose={handleCloseNewGroup}
                groups={groups}
                changeGroups={changeGroups}
                handleOpenAlert={handleOpenAlert}
            />
            <Box
                className="my-checklist-title"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant='body2'
                >
                    My Checklists
                </Typography>
                <IconButton 
                    onClick={openOptions}
                    size='small'
                >
                    <Add fontSize='inherit' />
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
                        onClick={handleOpenNewList}
                    >
                        Create New Checklist
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        onClick={handleOpenNewGroup}
                    >
                        Create New Group
                    </MenuItem>
                </Menu>
            </Box>
            <Stack
                spacing={1}
                divider={<Divider flexItem />}
            >
                <UserChecklists 
                    username={username}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                    handleOpenAlert={handleOpenAlert}
                />
                <UserGrouplists 
                    username={username}
                    allChecklists={checklists}
                    groups={groups}
                    changeGroups={changeGroups}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                    handleOpenAlert={handleOpenAlert}
                />
            </Stack>
        </Box>
    )
}

export default ChecklistsWidget;
