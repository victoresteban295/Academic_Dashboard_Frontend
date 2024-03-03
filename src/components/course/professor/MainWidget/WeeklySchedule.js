import { Box, Divider, Stack, Typography } from "@mui/material";
import Task from "./Task";

const WeeklySchedule = ({ 
    strDate, 
    endDate, 
    tasks, 
    weeklyTasks,
    changeWeeklyTasks,
    handleOpenAlert
}) => {

    return (
        <Stack
        >
            <Stack
                alignItems={{
                    fold: "center",
                    mobile: "flex-start",
                    tablet: "flex-start",
                    desktop: "flex-start",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: '#000',
                        fontWeight: '700',
                        px: 2,
                    }}
                >
                    {`${strDate} - ${endDate}`}
                </Typography>
                <Divider flexItem variant="middle"  />
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 0,
                    m: 0,
                }}
            >
                <Stack
                    spacing={1}
                    justifyContent="center"
                    sx={{
                        p: 2,
                        flexGrow: 1,
                        maxWidth: '650px',
                    }}
                >
                    {tasks.map(tsk => {
                        const { taskId, task, title, date, note, due } = tsk;
                        return (
                            <Task
                                key={taskId}
                                taskId={taskId}
                                task={task}
                                title={title}
                                date={date}
                                note={note}
                                due={due}
                                weeklyTasks={weeklyTasks}
                                changeWeeklyTasks={changeWeeklyTasks}
                                handleOpenAlert={handleOpenAlert}
                            />
                        )
                    })}
                </Stack>
            </Box>
        </Stack>
    )
}

export default WeeklySchedule;
