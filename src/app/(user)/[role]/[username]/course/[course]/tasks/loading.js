import { Box, Button, Divider, Skeleton, Stack, Typography } from "@mui/material";

const TasksLoading = () => {

    const lgth2 = [1,2];
    const lgth3 = [1,2, 3];
    const lgth6 = [1,2,3,4,5,6];

    return (
        <Stack
            spacing={2}
        >
            <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                alignItems='center'
            >
                <Button
                    sx={{
                        width: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderStyle: 'solid',
                        borderRadius: '5px',
                        borderWidth: '2px',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        py: 0.25,
                    }}
                >
                    <Typography
                        variant="button"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"UPCOMING"}
                    </Typography>
                </Button>
                <Button
                    sx={{
                        width: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderStyle: 'solid',
                        borderRadius: '5px',
                        borderWidth: "0px",
                        borderColor: "grey",
                        color: "grey",
                        py: 0.25,
                    }}
                >
                    <Typography
                        variant="button"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"PAST"}
                    </Typography>
                </Button>
            </Stack>
            <Stack
                spacing={3} 
                sx={{
                    width:'100%',
                }}
            >
                {lgth6.map((key) => {
                    return (
                        <Stack
                            key={key}
                        >
                            <Stack
                                alignItems={{
                                    fold: "center",
                                    mobile: "flex-start",
                                    tablet: "flex-start",
                                    desktop: "flex-start",
                                }}
                            >
                                <Box
                                    className="weeks-date-skeleton"
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            flexGrow: 1,
                                            maxWidth: '150px',
                                            px: 2,
                                        }}
                                    >
                                        <Skeleton
                                            sx={{
                                                width: '100%',
                                                bgcolor: '#858585',
                                            }}
                                        />
                                    </Typography>
                                </Box>
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
                                    {lgth2.map((key) => {
                                        return (
                                            <Box
                                                key={key}
                                            >
                                                <Stack
                                                    className="task-widget"
                                                    direction="row"
                                                    spacing={2}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        boxShadow: '1px 1px 4px 2px #cecece',
                                                        borderRadius: '5px',
                                                        p: 1,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            bgcolor: 'tan',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <Skeleton 
                                                            width={60}
                                                            sx={{
                                                                height: '100%',
                                                                bgcolor: 'primary.light',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Stack
                                                        className="task-details"
                                                        spacing={0.5}
                                                    >
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: '700',
                                                            }}
                                                        >
                                                            {"Homework #9"} 
                                                        </Typography>
                                                        <Stack
                                                            className="task-due-date"
                                                            direction={{
                                                                fold: 'column',
                                                                mobile: 'row',
                                                                tablet: 'row',
                                                                desktop: 'row',
                                                            }}
                                                            spacing={1}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                }}
                                                            >
                                                                <Typography
                                                                    className="task"
                                                                    variant="body2"
                                                                    sx={{
                                                                        borderRadius: '5px',
                                                                        px: 0.5,
                                                                        fontWeight: '700',
                                                                        bgcolor: '#c1c1c1',
                                                                    }}
                                                                >
                                                                    {"Assignment"}
                                                                </Typography>
                                                            </Box>
                                                            <Typography
                                                                className="due"
                                                                variant="body2"
                                                            >
                                                                {`Due: During Class`}
                                                            </Typography>
                                                        </Stack>
                                                        <Typography
                                                            className="note"
                                                            variant="body2"
                                                        >
                                                            {"Chapter 13: P.18, 19, and 22"}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                            </Box>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default TasksLoading;
