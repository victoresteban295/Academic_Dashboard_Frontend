import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

const WeeklySchedule = ({ strDate, endDate }) => {

    console.log("testing")

    return (
        <Stack
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Stack
                alignItems={{
                    fold: "center",
                    mobile: "center",
                    tablet: "flex-start",
                    desktop: "flex-start",
                }}
                sx={{
                    bgcolor: 'primary.main',
                    borderRadius: '5px 5px 0 0',
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
                    divider={<Divider />}
                    justifyContent="center"
                    sx={{
                        p: 2,
                        flexGrow: 1,
                        maxWidth: '650px',
                    }}
                >
                    <Grid 
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
                                {"Assignment"}
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
                                {"Feb 20"}
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
                            >
                                {"Homework 11: Ch. 27 - Ch. 28"}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid 
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
                                {"Exam"}
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
                                {"Feb 23"}
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
                            >
                                {"Midterm Exam"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Stack>
    )
}

export default WeeklySchedule;