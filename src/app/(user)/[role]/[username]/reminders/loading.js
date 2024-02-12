import { Add } from "@mui/icons-material";
import { Box, Divider, IconButton, Skeleton, Stack, Typography } from "@mui/material";

const ReminderLoading = () => {
    const lgth5 = [1,2,3,4,5];
    const lgth4 = [1,2,3,4];
    return(
        <Box
            className="reminders-page"
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
            }}
        >
            <Box
                className='main-content-container'
                sx={{
                    flexGrow: 1,
                    maxWidth: '750px',
                    p: 1,
                }}
            >
                <Box
                    className="title-section"
                    sx={{
                        width: '100%',
                        p: 1,
                    }}
                >
                    <Typography
                        variant='h3'
                    >
                        <Skeleton />
                    </Typography>
                </Box>
                <Box
                    className="reminders-content-section"
                    sx={{
                        width: '100%',
                        px: 2,
                    }}
                >
                    <Stack
                        className="reminders-section" 
                        spacing={2}
                        sx={{
                            width: '100%'
                        }}
                    >
                        {lgth5.map(index => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        flexGrow: 1,
                                    }}
                                >
                                    <Skeleton 
                                        variant="rounded"
                                        height={115}
                                    />
                                </Box>
                            )
                        })}
                    </Stack>
                </Box>
            </Box>
            <Box
                className='right-widget-container'
                sx={{
                    display: {xs: 'none', sm: 'none', md: 'block'},
                    flexGrow: 1,
                    maxWidth: '250px',
                    p: 1,
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                        >
                            {"My Reminders"}
                        </Typography>
                        <IconButton
                            size='small'
                        >
                            <Add fontSize='inherit'/>
                        </IconButton>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={1}
                    >
                        <Box
                            className="today-widget"
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                p: 1,
                                width: '100px',
                                boxShadow: '1px 1px 4px 2px #cecece'
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    justifySelf: 'flex-start', 
                                    fontWeight: '700',
                                }}
                            >
                                {"Today"}
                            </Typography>
                            <Typography
                                variant="h6"
                                align='right'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end' 
                                }}
                            >
                                <Skeleton 
                                    width={15}
                                />
                            </Typography>
                        </Box>
                        <Box
                            className="upcoming-widget"
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                p: 1,
                                width: '100px',
                                boxShadow: '1px 1px 4px 2px #cecece'
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    justifySelf: 'flex-start', 
                                    fontWeight: '700',
                                }}
                            >
                                {"Upcoming"}
                            </Typography>
                            <Typography
                                variant="h6"
                                align='right'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end' 
                                }}
                            >
                                <Skeleton 
                                    width={15}
                                />
                            </Typography>
                        </Box>
                    </Stack>
                    <Divider />
                    <Stack
                        spacing={1}
                        sx={{
                            width: '100%',
                        }}
                    >
                        {lgth4.map(index => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        flexGrow: 1,
                                    }}
                                >
                                    <Skeleton 
                                        variant="rounded"
                                        height={40}
                                    />
                                </Box>
                            )
                        })}
                    </Stack>

                </Stack>
            </Box>
        </Box>
    )

}

export default ReminderLoading;
