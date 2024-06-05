import { Apartment, Email, LocalPhone } from "@mui/icons-material";
import { Avatar, Box, Grid, Skeleton, Stack, Typography } from "@mui/material";

const RosterLoading = () => {

    const lgth2 = [1,2];
    const lgth3 = [1,2, 3];
    const lgth4 = [1,2,3,4];

    return (
        <Stack
            spacing={2}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={0}
                sx={{
                    width: '100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    py: 2,
                    px: 4,
                }}
            >
                <Stack
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={1}
                    sx={{
                        flexGrow: 1,
                        width: '100%',
                    }}
                >
                    <Stack
                        spacing={0}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Box
                            className="course-title-skeleton"
                            sx={{
                                display: 'flex',
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
                            className="course-instructor-skeleton"
                            sx={{
                                display: 'flex',
                                flexGrow: 1,
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant='body1'
                                sx={{
                                    flexGrow: 1,
                                    maxWidth: '150px',
                                }}
                            >
                                <Skeleton 
                                    sx={{
                                        bgcolor: 'primary.main',
                                        width: '100%',
                                    }}
                                />
                            </Typography>
                        </Box>
                    </Stack>
                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Skeleton 
                            variant="rounded"
                            height={150}
                        />
                    </Box>
                </Stack>
            </Stack>
            <Grid
                container
                gap={2}
                sx={{
                    display: {
                        fold: '',
                        mobile: 'flex',
                        tablet: 'flex',
                        desktop: 'flex'
                    }
                }}
            >
                {/* ProfessorInformation Compoenent */} 
                <Grid
                    item
                    fold='auto'
                    mobile
                    tablet
                    desktop
                    sx={{
                        width: '100%',
                    }}
                >
                    <Stack
                        justifyContent="space-between"
                        spacing={2}
                        sx={{
                            width: "100%",
                            height: '100%',
                            minHeight: '250px',
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '5px',
                            py: 2,
                            px: 4,
                        }}
                    >
                        <Typography
                            variant="body1"
                            align="left"
                            sx={{
                                fontWeight: '700',
                                color: 'primary.main',
                            }}
                        >
                            {"Instructor Information"} 
                        </Typography>
                        <Stack
                            direction={{
                                fold: 'column',
                                mobile: 'row',
                                tablet: 'row',
                                desktop: 'row',
                            }}
                            alignItems="center"
                            spacing={1}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: 'primary.light',
                                    color: 'primary.main',
                                }}
                            >
                                <Apartment /> 
                            </Avatar>
                            <Stack
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: {
                                            fold: 'center',
                                            mobile: 'left',
                                            tablet: 'left',
                                            desktop: 'left'
                                        }
                                    }}
                                >
                                    {"Office"}
                                </Typography>
                                <Box
                                    className="office-skeleton"
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        width: '100%',
                                        justifyContent: {
                                                fold: 'center',
                                                mobile: 'left',
                                                tablet: 'left',
                                                desktop: 'left'
                                        },
                                    }}
                                >
                                    <Typography
                                        variant='body2'
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
                            </Stack>
                        </Stack>
                        <Stack
                            direction={{
                                fold: 'column',
                                mobile: 'row',
                                tablet: 'row',
                                desktop: 'row',
                            }}
                            alignItems="center"
                            spacing={1}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: 'primary.light',
                                    color: 'primary.main',
                                }}
                            >
                                <Email /> 
                            </Avatar>
                            <Stack
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: {
                                            fold: 'center',
                                            mobile: 'left',
                                            tablet: 'left',
                                            desktop: 'left'
                                        }
                                    }}
                                >
                                    {"Email"}
                                </Typography>
                                <Box
                                    className="email-skeleton"
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        width: '100%',
                                        justifyContent: {
                                                fold: 'center',
                                                mobile: 'left',
                                                tablet: 'left',
                                                desktop: 'left'
                                        },
                                    }}
                                >
                                    <Typography
                                        variant='body2'
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
                            </Stack>
                        </Stack>
                        <Stack
                            direction={{
                                fold: 'column',
                                mobile: 'row',
                                tablet: 'row',
                                desktop: 'row',
                            }}
                            alignItems="center"
                            spacing={1}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: 'primary.light',
                                    color: 'primary.main',
                                }}
                            >
                                <LocalPhone /> 
                            </Avatar>
                            <Stack
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: {
                                            fold: 'center',
                                            mobile: 'left',
                                            tablet: 'left',
                                            desktop: 'left'
                                        }
                                    }}
                                >
                                    {"Phone"}
                                </Typography>
                                <Box
                                    className="phone-skeleton"
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        width: '100%',
                                        justifyContent: {
                                            fold: 'center',
                                            mobile: 'left',
                                            tablet: 'left',
                                            desktop: 'left'
                                        },
                                    }}
                                >
                                    <Typography
                                        variant='body2'
                                        align="center"
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            justifyContent: {
                                                fold: 'center',
                                                mobile: 'left',
                                                tablet: 'left',
                                                desktop: 'left'
                                            },
                                        }}
                                    >
                                        <Skeleton 
                                            width={150}
                                        />
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                {/* Desktop, Tablet, Mobile: GradeComposition Compoenent */} 
                <Grid
                    item
                    mobile
                    tablet
                    desktop
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'flex',
                            tablet: 'flex',
                            desktop: 'flex',
                        },
                        minWidth: '400px',
                    }}
                >
                    <Stack
                        sx={{
                            width: '100%',
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '5px',
                            py: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                px: 4,
                            }}
                        >
                            <Typography
                                variant="body1"
                                align="left"
                                sx={{
                                    fontWeight: '700',
                                    color: 'primary.main',
                                }}
                            >
                                {"Grade Composition"} 
                            </Typography>
                        </Box>

                        {/* Desktop & Tablet Devices */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-evenly"
                            sx={{
                                px: 1,
                                display: {
                                    fold: 'none',
                                    mobile: 'none',
                                    tablet: 'flex',
                                    desktop: 'flex',
                                }
                            }}
                        >
                            <Skeleton 
                                variant="circular"
                                height={200}
                                width={200}
                                sx={{
                                    bgcolor: 'primary.light'
                                }}
                            />
                            <Stack
                                spacing={1}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {lgth4.map((key) => {
                                    return (
                                        <Stack
                                            key={key}
                                            direction="row"
                                            spacing={2}
                                        >
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={20}
                                                sx={{
                                                    bgcolor: 'primary.light'
                                                }}
                                            />
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={80}
                                            />
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>

                        {/* Mobile Devices */}
                        <Stack
                            alignItems="center"
                            justifyContent="space-evenly"
                            spacing={2}
                            sx={{
                                px: 1,
                                display: {
                                    fold: 'none',
                                    mobile: 'flex',
                                    tablet: 'none',
                                    desktop: 'none',
                                }
                            }}
                        >
                            <Skeleton 
                                variant="circular"
                                height={200}
                                width={200}
                                sx={{
                                    bgcolor: 'primary.light'
                                }}
                            />
                            <Stack
                                direction="row"
                                spacing={3}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {lgth2.map((key) => {
                                    return (
                                        <Stack
                                            key={key}
                                            direction="row"
                                            spacing={2}
                                        >
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={20}
                                                sx={{
                                                    bgcolor: 'primary.light'
                                                }}
                                            />
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={80}
                                            />
                                        </Stack>
                                    )
                                })}
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={3}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {lgth2.map((key) => {
                                    return (
                                        <Stack
                                            key={key}
                                            direction="row"
                                            spacing={2}
                                        >
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={20}
                                                sx={{
                                                    bgcolor: 'primary.light'
                                                }}
                                            />
                                            <Skeleton 
                                                variant="rounded"
                                                height={20}
                                                width={80}
                                            />
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                {/* Foldable Devices: GradeComposition Compoenent */} 
                <Grid
                    item
                    mobile
                    tablet
                    desktop
                    sx={{
                        display: {
                            flex: 'flex',
                            mobile: 'none',
                            tablet: 'none',
                            desktop: 'none',
                        },
                        width: '100%',
                    }}
                >
                    <Stack
                        spacing={1}
                        sx={{
                            width: '100%',
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '5px',
                            py: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                px: 4,
                            }}
                        >
                            <Typography
                                variant="body1"
                                align="left"
                                sx={{
                                    fontWeight: '700',
                                    color: 'primary.main',
                                }}
                            >
                                {"Grade Composition"} 
                            </Typography>
                        </Box>
                        <Stack
                            spacing={2}
                            sx={{
                                px: 1,
                                display: {
                                    fold: 'flex',
                                    mobile: 'none',
                                    tablet: 'none',
                                    desktop: 'none',
                                },
                            }}
                        >
                            {lgth4.map((key) => {
                                return (
                                    <Stack
                                        key={key}
                                        spacing={1}
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Skeleton 
                                            variant="rounded"
                                            height={50}
                                            width={60}
                                            sx={{
                                                bgcolor: 'primary.light',
                                            }}
                                        />
                                        <Skeleton 
                                            variant="rounded"
                                            height={20}
                                            width={100}
                                        />
                                    </Stack>
                                )
                            })}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            

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
                {lgth3.map((key) => {
                    return (
                        <Stack
                            key={key}
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
                    )
                })} 
            </Stack>
        </Stack>
    )
}

export default RosterLoading;
