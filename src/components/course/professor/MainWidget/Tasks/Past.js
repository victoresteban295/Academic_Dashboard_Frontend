import { Grow, Stack, Typography } from "@mui/material";
import WeeklySchedule from "../WeeklySchedule";
import { AssignmentTurnedInTwoTone } from "@mui/icons-material";

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
                        {past.length === 0 && (
                            <Stack
                                alignItems="center"
                                spacing={1}
                                sx={{
                                    p: 2,
                                }}
                            >
                                <AssignmentTurnedInTwoTone
                                    fontSize="large"
                                />
                                <Typography
                                    align="center"
                                    variant="h5"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    No Past Tasks
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Past;
