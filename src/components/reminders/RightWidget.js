import { Add } from "@mui/icons-material";
import { Box, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import TodayUpcomingSection from "./RightWidget/TodayUpcomingSection/TodayUpcomingSection";
import GroupsSection from "./RightWidget/GroupsSection/GroupsSection";
import { useState } from "react";
import ReminderBackdrop from "./ReminderBackdrop";
import NewGroupBackdrop from "./RightWidget/Backdrops/NewGroupBackdrop";

const RightWidget = ({
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
    /* Create New Reminder */
    const [openNewReminder, setOpenNewReminder] = useState(false);
    const handleOpenNewReminder = () => {
        setOpenNewReminder(true);
    }
    const handleCloseNewReminder = () => {
        setOpenNewReminder(false);
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
        <Stack
            spacing={2}
            sx={{
                width: '100%',
            }}
        >
            {/* Backdrops */}
            <ReminderBackdrop
                group=""
                groupId=""
                remindId=""
                title=""
                description=""
                date=""
                time=""
                open={openNewReminder}
                handleClose={handleCloseNewReminder}
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
            <NewGroupBackdrop 
                open={openNewGroup}
                handleClose={handleCloseNewGroup}
                groups={groups}
                changeGroups={changeGroups}
                handleCurrentReminders={handleCurrentReminders}
                handleOpenAlert={handleOpenAlert}
            />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="body2"
                >
                    {"My Reminders"}
                </Typography>
                <IconButton
                    size='small'
                    onClick={openOptions}
                >
                    <Add fontSize='inherit'/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="myreminder-options-menu"
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
                        onClick={handleOpenNewReminder}
                    >
                        Create New Reminder
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        onClick={handleOpenNewGroup}
                    >
                        Create New Group
                    </MenuItem>
                </Menu>
            </Box>
            <TodayUpcomingSection 
                todaySize={todayReminders.length}
                upcomingSize={upcomingReminders.length}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
            />
            <Divider />  
            <GroupsSection 
                groups={groups}
                changeGroups={changeGroups}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
                handleOpenAlert={handleOpenAlert}
            />
        </Stack>
    )
}

export default RightWidget;
