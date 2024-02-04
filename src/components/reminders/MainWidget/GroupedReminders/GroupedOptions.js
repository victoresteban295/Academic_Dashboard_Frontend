import { Box, IconButton, Tooltip } from "@mui/material";
import { Add, MoreVert } from "@mui/icons-material";
import RightWidgetIcon from "../RightWidgetIcon";

const GroupedOptions = ({
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

    return (
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}
        >
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
                    size='small'
                >
                    <MoreVert fontSize='inherit'/> 
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

export default GroupedOptions;
