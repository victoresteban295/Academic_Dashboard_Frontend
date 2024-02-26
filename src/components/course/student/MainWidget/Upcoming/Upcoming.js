import { Grow, Stack } from "@mui/material"
import WeeklySchedule from "../WeeklySchedule";

const Upcoming = ({ tab, upcoming }) => {
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
                        {upcoming.map(weeklyTasks => {
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

export default Upcoming;
