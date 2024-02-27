import { Grow, Stack } from "@mui/material";
import WeeklySchedule from "../WeeklySchedule";

const Past = ({ tab, past }) => {
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
                        {past.map(weeklyTasks => {
                            const { strWeek, endWeek, tasks } = weeklyTasks;
                            return (
                                <WeeklySchedule
                                    key={strWeek}
                                    strDate={strWeek}
                                    endDate={endWeek}
                                    tasks={tasks}
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
