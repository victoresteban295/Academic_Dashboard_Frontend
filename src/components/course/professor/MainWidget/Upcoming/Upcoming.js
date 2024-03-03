import { Grow, Stack } from "@mui/material"
import WeeklySchedule from "../WeeklySchedule";

const Upcoming = ({ 
    tab, 
    upcoming,
    weeklyTasks,
    changeWeeklyTasks,
    handleOpenAlert
}) => {
    return (
        <>
            {tab === "upcoming" && (
                <Grow in={true}>
                    <Stack
                        spacing={3} 
                        sx={{
                            width:'100%',
                        }}
                    >
                        {upcoming.map(weeklyTsks => {
                            const { strWeek, endWeek, tasks } = weeklyTsks;
                            return (
                                <WeeklySchedule 
                                    key={strWeek}
                                    strDate={strWeek}
                                    endDate={endWeek}
                                    tasks={tasks}
                                    weeklyTasks={weeklyTasks}
                                    changeWeeklyTasks={changeWeeklyTasks}
                                    handleOpenAlert={handleOpenAlert} 
                                />
                            )
                        })}
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Upcoming;
