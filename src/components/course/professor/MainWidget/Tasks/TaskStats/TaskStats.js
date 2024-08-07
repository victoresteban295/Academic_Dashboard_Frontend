"use client"
import { getTaskStats } from "@/lib/data/course/tasks/professor";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Button, Grow, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { notFound, useRouter } from "next/navigation";
import TaskDetails from "./TaskDetails";
import StudentStats from "./StudentStats/StudentStats";
import CourseStats from "./CourseStats/CourseStats";
import { useState } from "react";

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

    /* State Value: Graded Students & NonGraded Students */
    const [totalScore, setTotalScore] = useState(taskStats.totalScore);
    const handleTotalScore = (updatedTotalScore) => {
        setTotalScore(updatedTotalScore);
    }
    const [gradedStudents, setGradedStudents] = useState([...taskStats.gradedStudents]);
    const handleGradedStudents = (updatedList) => {
        setGradedStudents([...updatedList]);
    }
    const [notGradedStudents, setNotGradedStudents] = useState([...taskStats.notGradedStudents]);
    const handleNotGradedStudents = (updatedList) => {
        setNotGradedStudents([...updatedList]);
    }

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
                <Stack
                    className="task-detail-page"
                    spacing={1}
                >
                    <TaskDetails 
                        taskId={taskStats.taskId} 
                        task={taskStats.task}
                        title={taskStats.title}
                        date={taskStats.date}
                        note={taskStats.note}
                        due={taskStats.due}
                        totalScore={totalScore}
                        handleTotalScore={handleTotalScore}
                    />
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            px: 2,
                            py: 1,
                            borderRadius: '5px',
                            boxShadow: '1px 1px 4px 2px #cecece',
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold',
                            }}  
                        >
                            {"Total Score"} 
                        </Typography>
                        <Typography
                            variant='h6'
                        >
                            {`${totalScore}pts`}
                        </Typography>
                         
                    </Stack>
                    <CourseStats 
                        totalScore={totalScore}
                        gradedStudents={gradedStudents}
                        notGradedStudents={notGradedStudents}
                    />
                    <StudentStats 
                        totalScore={totalScore}
                        gradedStudents={gradedStudents}
                        notGradedStudents={notGradedStudents}
                        handleGradedStudents={handleGradedStudents}
                        handleNotGradedStudents={handleNotGradedStudents}
                    /> 
                </Stack>
            </Stack> 
        </Grow>
    )
}

export default TaskStats;
