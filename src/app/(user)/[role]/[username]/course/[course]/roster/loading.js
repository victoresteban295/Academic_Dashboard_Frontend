import { ChatBubbleOutline, QueryStats, Search } from "@mui/icons-material";
import { Box, Button, Divider, FormControl, IconButton, InputBase, Skeleton, Stack, Typography } from "@mui/material";

const RosterLoading = () => {

    const lgth10 = [1,2,3,4,5,6,7,8,9,10];

    return (
        <Stack
            spacing={2}
        >
            {/* Course Stats Loading */}
            <Stack
                className="course-stats-widget"
                direction={{
                    fold: 'column',
                    mobile: 'row',
                    tablet: 'row',
                    desktop: 'row',
                }}
                spacing={1}
                justifyContent="space-evenly"
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                    display: 'flex',
                    width: '100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    py: 2,
                    px: {
                        fold: 0.5,
                        mobile: 0.5,
                        tablet: 0.5,
                        desktop: 4,
                    },
                }}
            >
                <Stack
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                            height: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                        }}
                    >
                        <Skeleton 
                            className="mobile-crs-students-skeleton"
                            variant="rounded"
                            width={55}
                            height={36}
                            sx={{
                                display: {
                                    fold: 'flex',
                                    mobile: 'flex',
                                    tablet: 'flex',
                                    desktop: 'none',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                        <Skeleton 
                            className="desktop-crs-students-skeleton"
                            variant="rounded"
                            width={79}
                            height={52}
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'none',
                                    tablet: 'none',
                                    desktop: 'flex',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Students"}
                    </Typography>
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                            height: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                        }}
                    >
                        <Skeleton 
                            className="mobile-crs-attendance-skeleton"
                            variant="rounded"
                            width={55}
                            height={36}
                            sx={{
                                display: {
                                    fold: 'flex',
                                    mobile: 'flex',
                                    tablet: 'flex',
                                    desktop: 'none',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                        <Skeleton 
                            className="desktop-crs-attendance-skeleton"
                            variant="rounded"
                            width={79}
                            height={52}
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'none',
                                    tablet: 'none',
                                    desktop: 'flex',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Attendance"}
                    </Typography>
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                            height: {
                                fold: '75px',
                                mobile: '75px',
                                tablet: '75px',
                                desktop: '100px',
                            },
                        }}
                    >
                        <Skeleton 
                            className="mobile-crs-grade-skeleton"
                            variant="rounded"
                            width={55}
                            height={36}
                            sx={{
                                display: {
                                    fold: 'flex',
                                    mobile: 'flex',
                                    tablet: 'flex',
                                    desktop: 'none',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                        <Skeleton 
                            className="desktop-crs-grade-skeleton"
                            variant="rounded"
                            width={79}
                            height={52}
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'none',
                                    tablet: 'none',
                                    desktop: 'flex',
                                },
                                bgcolor: 'primary.light',
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Grade"}
                    </Typography>
                </Stack>
            </Stack>

            {/* StudentRoster Loading */}
            <Stack
                spacing={1}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    className="roster-search-bar"
                    sx={{
                        width: '100%',
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                        px: 2,
                        py: 0.5,
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Search
                            color="primary"
                        />
                        <FormControl fullWidth disabled={true} >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Student..."
                            />
                        </FormControl>
                    </Stack>
                </Stack>
                <Stack
                    divider={<Divider flexItem />}
                    sx={{
                        px: 2,
                    }}
                >
                    {lgth10.map(key => {
                        return (
                            <Stack
                                key={key}
                                direction="row"
                                className="student-widget"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{
                                    px: 1,
                                    py: 1,
                                }}
                                spacing={1}
                            >
                                <Stack
                                    className="student-name"
                                    spacing={0.5}
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <Skeleton 
                                        sx={{
                                            bgcolor: 'grey',
                                            flexGrow: 1,
                                            width: '100%',
                                            maxWidth: '150px',
                                        }}
                                    />
                                    <Skeleton 
                                        sx={{
                                            flexGrow: 1,
                                            width: '100%',
                                            maxWidth: '100px',
                                        }}
                                    />
                                    <Stack
                                        className="mobile-student-options"
                                        direction="row"
                                        spacing={1}
                                        sx={{
                                            display: {
                                                fold: 'flex',
                                                mobile: 'flex',
                                                tablet: 'flex',
                                                desktop: 'none',
                                            }
                                        }}
                                    >
                                        <IconButton
                                            size="small" 
                                            sx={{
                                                color: 'primary.main',
                                                bgcolor: 'primary.light',
                                            }}
                                        >
                                            <ChatBubbleOutline fontSize="inherit" />
                                        </IconButton>     
                                        <IconButton 
                                            size="small" 
                                            sx={{
                                                color: 'primary.main',
                                                bgcolor: 'primary.light',
                                            }}
                                        >
                                            <QueryStats fontSize="inherit" />
                                        </IconButton>     
                                    </Stack>
                                    <Stack
                                        className="student-roster-options"
                                        direction="row"
                                        spacing={1}
                                        sx={{
                                            display: {
                                                fold: 'none',
                                                mobile: 'none',
                                                tablet: 'none',
                                                desktop: 'flex',
                                            }
                                        }}
                                    >
                                        <Button
                                            variant="text"
                                            size="small"
                                            startIcon={<ChatBubbleOutline fontSize="small" />}
                                            sx={{
                                                fontWeight: '700',
                                                bgcolor: 'primary.light',
                                            }} 
                                        >
                                            {"Message"}
                                        </Button>
                                        <Button
                                            variant="text"
                                            size="small"
                                            startIcon={<QueryStats fontSize="small" />}
                                            sx={{
                                                fontWeight: '700',
                                                bgcolor: 'primary.light',
                                            }} 
                                        >
                                            {"View Stats"}
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Stack
                                    direction="row"
                                >
                                    <Stack
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '75px',
                                                height: '75px',
                                            }}
                                        >
                                            <Skeleton 
                                                className="attendance-skeleton"
                                                variant="rounded"
                                                width={55}
                                                height={36}
                                                sx={{
                                                    bgcolor: 'primary.light',
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {"Attendance"}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '75px',
                                                height: '75px',
                                            }}
                                        >
                                            <Skeleton 
                                                className="grade-skeleton"
                                                variant="rounded"
                                                width={55}
                                                height={36}
                                                sx={{
                                                    bgcolor: 'primary.light',
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {"Grade"}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )
                    })}
                </Stack>

            </Stack> 
        </Stack>
    )
}

export default RosterLoading;
