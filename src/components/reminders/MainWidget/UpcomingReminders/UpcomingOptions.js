import { Add } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import RightWidgetIcon from "../RightWidgetIcon";
import ReminderBackdrop from "../../ReminderBackdrop";
import { useState } from "react";

const UpcomingOptions = ({
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

    /* Backdrop Menu State Value & Function */
    /* Create New Reminder */
    const [openNewReminder, setOpenNewReminder] = useState(false);
    const handleOpenNewReminder = () => {
        setOpenNewReminder(true);
    }
    const handleCloseNewReminder = () => {
        setOpenNewReminder(false);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
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
                handleOpenAlert={handleOpenAlert}
            />

            {/* Create New Reminder Icon */}
            <Tooltip
                title="Create New Reminder"
            >
                <IconButton
                    onClick={handleOpenNewReminder}
                    size='small'
                >
                    <Add fontSize='inherit'/> 
                </IconButton>
            </Tooltip>

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

export default UpcomingOptions;
