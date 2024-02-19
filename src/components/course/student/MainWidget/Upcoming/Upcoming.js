import { Grow, Box, Divider, Typography, Stack, Grid } from "@mui/material"
import WeeklySchedule from "../WeeklySchedule";

const Upcoming = ({ tab }) => {
    return (
        <>
            {tab === "upcoming" && (
                <Grow in={true}>
                    <Stack
                        spacing={2} 
                        sx={{
                            width:'100%',
                        }}
                    >
                        <Stack 
                            sx={{
                                width:'100%',
                                boxShadow: '1px 1px 4px 2px #cecece',
                                borderRadius: '5px',
                            }}
                        >
                            <Box
                                id="week-title"
                                sx={{
                                    bgcolor: 'primary.main',
                                    borderRadius: '5px 5px 0 0',
                                    width: '100%',
                                    px: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography
                                    variant='h6'
                                    sx={{
                                        fontWeight: '700'
                                    }}
                                >   
                                    February 19 - February 25
                                </Typography>
                            </Box>
                            <Grid  
                                container 
                                direction='row'
                                alignItems='flex-start'     
                                justifyContent='space-around' 
                                sx={{
                                    py:1,
                                    px: 2,
                                }}
                            >
                                <Grid    
                                    item 
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            fontWeight: '700',
                                            alignSelf: 'center',
                                            borderRadius: '5px',
                                            bgcolor: '#b8b8b8',
                                            p: 0.25,
                                            mb: 1,
                                        }}
                                    >
                                        Assignments
                                    </Typography>
                                    <Stack
                                        spacing={0.25}
                                        divider={<Divider flexItem  />}
                                        sx={{
                                            alignSelf: 'center',
                                        }}
                                    >
                                        <Stack
                                            spacing={5}
                                            direction='row'
                                        >
                                            <Typography 
                                                variant='h6'
                                                sx={{
                                                    fontWeight: '700'
                                                }}
                                            >
                                                Feb 20 
                                            </Typography>
                                            <Typography 
                                                variant='h6'
                                            >
                                                Homework #15 - Chapter 34 to Chapter 35 
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            spacing={5}
                                            direction='row'
                                        >
                                            <Typography 
                                                variant='h6'
                                                sx={{
                                                    fontWeight: '700'
                                                }}
                                            >
                                                Feb 23 
                                            </Typography>
                                            <Typography 
                                                variant='h6'
                                            >
                                                Homework #16 - Chapter 36 to Chapter 38 
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid> 
                                <Grid    
                                    item 
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            fontWeight: '700',
                                            alignSelf: 'center',
                                            borderRadius: '5px',
                                            bgcolor: '#b8b8b8',
                                            p: 0.25,
                                            mb: 1,
                                        }}
                                    >
                                        Quizzes/Exams
                                    </Typography>
                                    <Stack
                                        spacing={0.25}
                                        divider={<Divider flexItem  />}
                                        sx={{
                                            alignSelf: 'center',
                                        }}
                                    >
                                        <Stack
                                            spacing={5}
                                            direction='row'
                                        >
                                            <Typography 
                                                variant='h6'
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Feb 24 
                                            </Typography>
                                            <Typography 
                                                variant='h6'
                                            >
                                                Midterm Exam: Chapters 1 - 33
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid> 
                            </Grid>
                        </Stack>
                        <WeeklySchedule 
                            strDate="February 19"
                            endDate="February 25"
                        />
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Upcoming;
