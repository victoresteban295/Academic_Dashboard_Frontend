import { Apartment, AssignmentInd, Close, Email, LocalPhone, MenuOpen } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Skeleton, Stack, Tooltip, Typography } from "@mui/material";

const CourseLoading = () => {
    return (
        <Box
            className="course-page"
            sx={{
                display: 'flex',
                flexGrow: 1,
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
                {/* Main Widget */}
                <Stack
                    className="course-main-content"
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    {/* CourseTitleSection */}
                    <Box
                        className="todays-title-section"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            p: 1,
                        }}
                    >
                        <Box
                            className="title-section"
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant='h3'
                            >
                                <Skeleton />
                            </Typography>
                        </Box>

                        {/* Course Schedule Menu Icon */}
                        <Tooltip
                            title="Course Schedule"
                            sx={{
                                display: {
                                    fold: 'flex',
                                    mobile: 'flex',
                                    tablet: 'flex',
                                    desktop: 'none',
                                },
                            }}
                        >
                            <IconButton
                                size='small'
                            >
                                <MenuOpen fontSize='inherit'/> 
                            </IconButton>
                        </Tooltip>
                    </Box> 

                    {/* Tab Selection: Syllabus, Upcoming, Past */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-evenly"
                        spacing={{
                            fold: 0,
                            mobile: 2,
                            tablet: 4,
                            desktop: 4,
                        }}
                        sx={{
                            py: 0,
                            borderBottom: '1px solid',
                            borderColor: '#cecece',
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                color: 'primary.main',
                                borderBottom: '4px solid',
                                borderColor: 'primary.main',
                                borderRadius: '0px',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    display: {
                                        fold: 'block',
                                        mobile: 'none',
                                        tablet: 'none',
                                        desktop: 'none',
                                    }
                                }}
                            >
                                Syllabus
                            </Typography>
                            <Typography
                                variant="button"
                                sx={{
                                    display: {
                                        fold: 'none',
                                        mobile: 'block',
                                        tablet: 'block',
                                        desktop: 'block',
                                    },
                                    fontWeight: '700',
                                }}
                            >
                                Syllabus
                            </Typography>
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                color: 'text.primary',
                                borderBottom: '0px solid',
                                borderColor: '#cecece',
                                borderRadius: '0px',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    display: {
                                        fold: 'block',
                                        mobile: 'none',
                                        tablet: 'none',
                                        desktop: 'none',
                                    }
                                }}
                            >
                                Upcoming
                            </Typography>
                            <Typography
                                variant="button"
                                sx={{
                                    display: {
                                        fold: 'none',
                                        mobile: 'block',
                                        tablet: 'block',
                                        desktop: 'block',
                                    },
                                    fontWeight: '700',
                                }}
                            >
                                Upcoming
                            </Typography>
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                color: 'text.primary',
                                borderBottom: '0px solid',
                                borderColor: '#cecece',
                                borderRadius: '0px',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    display: {
                                        fold: 'block',
                                        mobile: 'none',
                                        tablet: 'none',
                                        desktop: 'none',
                                    }
                                }}
                            >
                                Past
                            </Typography>
                            <Typography
                                variant="button"
                                sx={{
                                    display: {
                                        fold: 'none',
                                        mobile: 'block',
                                        tablet: 'block',
                                        desktop: 'block',
                                    },
                                    fontWeight: '700',
                                }}
                            >
                                Past
                            </Typography>
                        </Button>
                    </Stack>
                    {/* Syllabus Section */}
                    <Stack
                        spacing={2}
                        sx={{
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '5px',
                            py: {
                                fold: 2,
                                mobile: 2,
                                tablet: 4,
                                desktop: 4,
                            },
                            px: {
                                fold: 2,
                                mobile: 2,
                                tablet: 2,
                                desktop: 4,
                            }
                        }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            spacing={0}
                        >
                            <Box
                                className="course-title-skeleton"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant='h3'
                                    sx={{
                                        flexGrow: 1,
                                        maxWidth: '250px',
                                    }}
                                >
                                    <Skeleton 
                                        sx={{
                                            width: '100%',
                                        }}
                                    />
                                </Typography>
                            </Box>
                            <Box
                                className="course-college-skeleton"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant='h3'
                                    sx={{
                                        flexGrow: 1,
                                        maxWidth: '150px',
                                    }}
                                >
                                    <Skeleton 
                                        sx={{
                                            width: '100%',
                                        }}
                                    />
                                </Typography>
                            </Box>
                            <Box
                                className="course-semester-skeleton"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant='h3'
                                    sx={{
                                        flexGrow: 1,
                                        maxWidth: '100px',
                                    }}
                                >
                                    <Skeleton 
                                        sx={{
                                            width: '100%',
                                        }}
                                    />
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    px: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: '#e3f3ff',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    {"Course Description"}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                    width: '100%',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    height={250}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: '#e3f3ff',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    width={150}
                                    height={20}
                                />
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                    width: '100%',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    height={250}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: '#e3f3ff',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    width={150}
                                    height={20}
                                />
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                    width: '100%',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    height={250}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: '#e3f3ff',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    width={150}
                                    height={20}
                                />
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                    width: '100%',
                                }}
                            >
                                <Skeleton 
                                    variant="rounded"
                                    height={250}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Box
                className='rightside-menu-container'
                sx={{
                    display: {
                        fold: 'none',
                        mobile: 'none',
                        tablet: 'none',
                        desktop: 'block',
                    },
                    maxWidth: '250px',
                    p: 1,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        position: 'sticky',
                        top: '70px',
                    }}
                >
                    {/* Right Widget */}
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
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {"Instructor Information"}
                            </Typography>
                            <IconButton
                                size="small"
                                sx={{
                                    display: {
                                        fold: 'block', 
                                        mobile: 'block',
                                        tablet: 'block',
                                        desktop: 'none',
                                    }
                                }}
                            >
                                <Close fontSize="inherit"/>
                            </IconButton> 
                        </Box>
                        <Stack
                            spacing={0.5}
                            sx={{
                                px: 2,
                                py: 1,
                                boxShadow: '1px 1px 4px 2px #cecece',
                                borderRadius: '5px',
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1} 
                            >
                                <AssignmentInd 
                                    fontSize="small"
                                />
                                <Skeleton 
                                    variant="rounded"
                                    width={120}
                                    height={24}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1} 
                            >
                                <Apartment
                                    fontSize="small"
                                />
                                <Skeleton 
                                    variant="rounded"
                                    width={120}
                                    height={24}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1} 
                            >
                                <LocalPhone
                                    fontSize="small"
                                />
                                <Skeleton 
                                    variant="rounded"
                                    width={120}
                                    height={24}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1} 
                            >
                                <Email
                                    fontSize="small"
                                />
                                <Skeleton 
                                    variant="rounded"
                                    width={120}
                                    height={24}
                                />
                            </Stack>
                        </Stack>
                        <Divider />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {"Course Schedule"}
                            </Typography>
                        </Box>
                        <Skeleton 
                            variant="rounded"
                            width={191}
                            height={88}
                        />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseLoading;
