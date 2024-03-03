import { Grow, Stack } from "@mui/material";
import WeeklySchedule from "../WeeklySchedule";

const Past = ({ 
    tab, 
    past,
    weeklyTasks,
    changeWeeklyTasks,
    handleOpenAlert
}) => {

    return (
        <>
            {tab === "past" && (
                <Grow in={true}>
                    <Stack
                        spacing={3} 
                        sx={{
                            width:'100%',
                        }}
                    >
                        {past.map(weeklyTsks => {
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

export default Past;
