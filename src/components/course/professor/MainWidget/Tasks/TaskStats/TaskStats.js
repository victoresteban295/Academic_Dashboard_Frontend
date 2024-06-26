"use client"
import { getTaskStats } from "@/lib/data/course/tasks/professor";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Button, Grow, Stack } from "@mui/material";
import dayjs from "dayjs";
import { notFound, useRouter } from "next/navigation";
import TaskDetails from "./TaskDetails";

const fetchTaskStats = (taskId) => {
    const todayDateTime = dayjs();
    const taskStats = getTaskStats(taskId, todayDateTime);
    if(taskStats.taskFound) {
        return taskStats;
    } else {
        notFound();
    }
}

const TaskStats = ({ course, taskId }) => {
    const router = useRouter();

    /* Fetch Task's Information */
    const taskStats = fetchTaskStats(taskId);

    return (
        <Grow in={true}>
            <Stack
                spacing={2}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Button
                        variant="text"
                        startIcon={<KeyboardArrowLeft />}
                        onClick={() => {
                            router.back();
                        }}
                        sx={{
                            fontWeight: 'bold',
                            "&:hover": {
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        {"Return to Tasks"}
                    </Button>
                </Box>
                <TaskDetails 
                    taskId={taskStats.taskId} 
                    task={taskStats.task}
                    title={taskStats.title}
                    date={taskStats.date}
                    note={taskStats.note}
                    due={taskStats.due}
                />
            </Stack> 
        </Grow>
    )
}

export default TaskStats;
