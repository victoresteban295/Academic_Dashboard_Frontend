import { EditOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import dayjs from "dayjs";
import TaskBackdrop from "../../../Backdrop/TaskBackdrop";
import { useState } from "react";

const TaskDetails = ({ 
    taskId, 
    task, 
    title,
    date,
    note,
    due
}) => {
    /* Task Details */
    const [taskTitle, setTitle] = useState(title);
    const [taskType, setTaskType] = useState(task);
    const [taskDate, setDate] = useState(date);
    const [taskNote, setNote] = useState(note);
    const [taskDue, setDue] = useState(due);

    /* Update Task */
    const editTask = (title, type, date, note, due) => {
        setTitle(title);
        setTaskType(type);
        setDate(date);
        setNote(note);
        setDue(due);
    }

    /* Task Due Date */
    const month = dayjs(taskDate, "MM/DD/YY").format("MMMM");
    const day = dayjs(taskDate, "MM/DD/YY").format("DD");
    const weekDay = dayjs(taskDate, "MM/DD/YY").format("ddd");

    const mobileDate = dayjs(taskDate, "MM/DD/YY").format("dddd, MMMM MM, YYYY");

    /* Edit Task Backdrop */
    const [openEditTask, setOpenEditTask] = useState(false);
    const handleOpenEditTask = () => {
        setOpenEditTask(true);
    }
    const handleCloseEditTask = () => {
        setOpenEditTask(false);
    }

    return (
        <Stack
            direction="row"
            sx={{
                p: 0,
                borderRadius: '5px',
                boxShadow: '1px 1px 4px 2px #cecece',
            }}
        >
            <TaskBackdrop 
                open={openEditTask}
                handleClose={handleCloseEditTask}
                editTask={editTask}
                taskId={taskId}
                title={taskTitle}
                task={taskType}
                due={taskDue}
                date={taskDate}
                note={taskNote}
            />
            <Stack
                className="task-date"
                alignItems="center"
                justifyContent="center"
                sx={{
                    display: {
                        fold: 'none',
                        mobile: 'none',
                        tablet: 'flex',
                        desktop: 'flex'
                    },
                    p: 2,
                    width: '150px',
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {weekDay}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {day}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {month}
                </Typography>
            </Stack>
            <Stack
                className="task-details"
                spacing={1}
                sx={{
                    flexGrow: 1,
                    py: 1,
                    px: 2,
                }}
            >
                <Stack
                    className="task-title-container"
                    spacing={0.5}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            p: 0,
                            m: 0,
                        }}
                    >
                        <Typography
                            variant="h5"
                            align="left"
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            {title}
                        </Typography>
                        <Tooltip title="Edit Task" arrow>
                            <IconButton 
                                size="small"
                                onClick={handleOpenEditTask}
                            >
                                <EditOutlined
                                    fontSize="inherit"
                                    color="primary"
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Typography
                        variant="body1"
                        color="primary"
                        sx={{
                            display: {
                                fold: 'block',
                                mobile: 'block',
                                tablet: 'none',
                                desktop: 'none'
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        {mobileDate}
                    </Typography>
                    <Divider flexItem />
                </Stack>
                <Stack
                    className="type-date-container"
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                borderRadius: '5px',
                                px: 0.5,
                                fontWeight: 'bold',
                                bgcolor: '#c1c1c1',
                            }}
                        >
                            {taskType}
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {`- ${taskDue}`}
                    </Typography>
                </Stack>
                <Typography
                    variant="body1"
                >
                    {taskNote}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default TaskDetails;
