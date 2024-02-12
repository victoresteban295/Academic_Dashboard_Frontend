import { Box, Grow, Typography } from "@mui/material";
import RightWidgetIcon from "../RightWidgetIcon";

const TodaysTitleSection = ({
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
        <Grow in={true}>
            <Box
                className="todays-title-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    p: 1,
                }}
            >
                <Typography
                    variant="h6"
                    noWrap={true}
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    {"Today"}
                </Typography> 

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
        </Grow>
    )
}

export default TodaysTitleSection;
