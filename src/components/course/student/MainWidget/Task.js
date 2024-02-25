import { Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import TaskDetailsBackdrop from "./TaskDetailsBackdrop";
import { useState } from "react";

const Task = ({ task, title, date, note, due }) => {
    const dueDate = dayjs(date, "MM/DD/YY").format("MMM DD");

    /* Open Task */
    const [openTaskDetails, setOpenTaskDetails] = useState(false);
    const handleOpenTaskDetails = () => {
        setOpenTaskDetails(true);
    }
    const handleCloseTaskDetails = () => {
        setOpenTaskDetails(false);
    }

    return (
        <>

            <TaskDetailsBackdrop 
                task={task}
                title={title}
                date={date}
                note={note}
                due={due}
                open={openTaskDetails}
                handleClose={handleCloseTaskDetails}
            />
            <Grid 
                onClick={handleOpenTaskDetails}
                container 
                spacing={{
                    fold: 0.5,
                    mobile: 0,
                    tablet: 0,
                    desktop: 0,
                }}
                columns={{
                    fold: 6,
                    mobile: 12,
                }}
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Grid 
                    item 
                    fold={6}
                    mobile={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="task"
                        variant="body1"
                        sx={{
                            borderRadius: '5px',
                            px: 0.5,
                            fontWeight: '700',
                            bgcolor: '#c1c1c1',
                        }}
                    >
                        {task}
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    fold={6}
                    mobile={2}
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'block',
                            tablet: 'block',
                            desktop: 'block',
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="due-date"
                        variant="body1"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {dueDate}
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    fold={6}
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'block',
                            tablet: 'block',
                            desktop: 'block',
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="title"
                        variant="body1"
                        noWrap={true}
                        sx={{
                            display: {
                                fold: "none",
                                mobile: "block",
                                tablet: "block",
                                desktop: "block",
                            }
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        className="title"
                        variant="body1"
                        align="center"
                        sx={{
                            display: {
                                fold: "block",
                                mobile: "none",
                                tablet: "none",
                                desktop: "none",
                            }
                        }}
                    >
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Task;
