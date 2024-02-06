import { Add } from "@mui/icons-material";
import { Box, Divider, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import TodayUpcomingSection from "./RightWidget/TodayUpcomingSection/TodayUpcomingSection";
import GroupsSection from "./RightWidget/GroupsSection/GroupsSection";
import { useState } from "react";

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
    
    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
            }}
        >
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
                    >
                        Create New Reminder
                    </MenuItem>
                    <Divider />
                    <MenuItem
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
            />
        </Stack>
    )
}

export default RightWidget;
