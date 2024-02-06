import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Add, MoreVert } from "@mui/icons-material";
import RightWidgetIcon from "../RightWidgetIcon";
import { useState } from "react";
import DeleteGroupBackdrop from "./Backdrops/DeleteGroupBackdrop";
import WarnDeleteBackdrop from "./Backdrops/WarnDeleteBackdrop";

const GroupedOptions = ({
    title,
    reminders,
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders,
    handleOpenAlert
}) => {

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
    /* Delete Group */
    const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
    const handleOpenDeleteGroup = () => {
        setOpenDeleteGroup(true);
    }
    const handleCloseDeleteGroup = () => {
        setOpenDeleteGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Warn Not All Reminders in Group are Completed */
    const [openWarnDelete, setOpenWarnDelete] = useState(false);
    const handleOpenWarnDelete = () => {
        setOpenWarnDelete(true);
    }
    const handleCloseWarnDelete = () => {
        setOpenWarnDelete(false);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}
        >
            {/* Backdrops */}    
            <DeleteGroupBackdrop 
                title={title}
                reminders={reminders}
                open={openDeleteGroup}
                handleClose={handleCloseDeleteGroup}
                handleOpenWarnDelete={handleOpenWarnDelete}
            />
            <WarnDeleteBackdrop 
                title={title}
                open={openWarnDelete}
                handleClose={handleCloseWarnDelete}
            />

            {/* Create New Reminder Icon */}
            <Tooltip
                title="Create New Reminder"
            >
                <IconButton
                    size='small'
                >
                    <Add fontSize='inherit'/> 
                </IconButton>
            </Tooltip>

            {/* Options Icon */}
            <Tooltip
                title="Options"
            >
                <IconButton
                    onClick={openOptions}
                    size='small'
                >
                    <MoreVert fontSize='inherit'/> 
                </IconButton>
            </Tooltip>
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
                    onClick={handleOpenDeleteGroup}
                    sx={{
                        color: '#ef476f'
                    }}
                >
                    Delete Group
                </MenuItem>
            </Menu>

            {/* My Reminders Menu Icon */}
            <RightWidgetIcon
                todayReminders={todayReminders} 
                changeTodayReminders={changeTodayReminders}
                upcomingReminders={upcomingReminders}
                changeUpcomingReminders={changeUpcomingReminders}
                groups={groups}
                changeGroups={changeGroups}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
                handleOpenAlert={handleOpenAlert}
            />
        </Box>
    )
}

export default GroupedOptions;
