import { Box, Button, Divider, Skeleton, Stack, Typography } from "@mui/material";

const TasksLoading = () => {

    const lgth2 = [1,2];
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
                                            <Stack
                                                key={key}
                                                className="task-widget"
                                                direction="row"
                                                spacing={2}
                                                sx={{
                                                    boxShadow: '1px 1px 4px 2px #cecece',
                                                    borderRadius: '5px',
                                                    p: 1,
                                                }}
                                            >
                                                <Skeleton 
                                                    className="due-date-skeleton"
                                                    variant="rounded"
                                                    width={70}
                                                    height={112}
                                                    sx={{
                                                        bgcolor: 'primary.light',
                                                    }}
                                                />
                                                <Stack
                                                    className="task-details"
                                                    spacing={0.5}
                                                    sx={{
                                                        width: '100%',
                                                        p: 0,
                                                        m: 0,
                                                    }}
                                                >
                                                    <Skeleton 
                                                        className="title-skeleton"
                                                        sx={{
                                                            flexGrow: 1,
                                                            maxWidth: '250px',
                                                        }}
                                                    />
                                                    <Stack
                                                        className="type-and-due-date"
                                                        direction={{
                                                            fold: 'column',
                                                            mobile: 'row',
                                                            tablet: 'row',
                                                            desktop: 'row',
                                                        }}
                                                        spacing={1}
                                                        sx={{
                                                            p: 0,
                                                            m: 0,
                                                        }}
                                                    >
                                                        <Skeleton 
                                                            sx={{
                                                                bgcolor: 'grey',
                                                                flexGrow: 1,
                                                                width: '100%',
                                                                maxWidth: '100px',
                                                            }}
                                                        />
                                                        <Skeleton 
                                                            sx={{
                                                                flexGrow: 1,
                                                                width: '100%',
                                                                maxWidth: '70px',
                                                            }}
                                                        />
                                                    </Stack>
                                                    <Skeleton 
                                                        variant='rounded'
                                                        height={40}
                                                        sx={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Stack>
                                            </Stack>
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
