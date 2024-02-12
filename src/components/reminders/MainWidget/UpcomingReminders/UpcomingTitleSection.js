import { Box, Grow, Typography } from "@mui/material";
import UpcomingOptions from "./UpcomingOptions";

const UpcomingTitleSection = ({
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
                    {"Upcoming"}
                </Typography> 
                <UpcomingOptions 
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

export default UpcomingTitleSection;
