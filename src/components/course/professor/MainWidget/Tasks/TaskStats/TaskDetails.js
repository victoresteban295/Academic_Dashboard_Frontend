import { Box, Divider, Stack, Typography } from "@mui/material";

const TaskDetails = ({ 
    taskId, 
    task, 
    title,
    date,
    note,
    due
}) => {
    return (
        <Stack
            direction="row"
            sx={{
                p: 0,
                borderRadius: '5px',
                boxShadow: '1px 1px 4px 2px #cecece',
            }}
        >
            <Stack
                className="task-date"
                alignItems="center"
                justifyContent="center"
                sx={{
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
                    {"FRI"}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {"24"}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {"June"}
                </Typography>
            </Stack>
            <Stack
                className="task-details"
                spacing={0.5}
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
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
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
                            {task}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {"-"}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {`Due: ${due}`}
                    </Typography>
                </Stack>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {note}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default TaskDetails;
