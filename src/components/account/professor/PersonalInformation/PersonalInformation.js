import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material"

const PersonalInformation = () => {
    return (
        <Stack
            className="professors-information-widget"
            spacing={2}
            sx={{
                px: 4,
                py: 2,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                width: '100%',
            }}
        >
            <Stack
                className="title-section"
                spacing={0}
                sx={{
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                        }}
                    >
                        {"General Information"}
                    </Typography>
                    <Button
                        startIcon={<EditOutlined />}
                        variant="text"
                        size="small"
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        Edit
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Academic information about you as a professor"}
                </Typography>
            </Stack>

            <Stack
                direction={{
                    fold: 'column',
                    mobile: 'column',
                    tablet: 'row',
                    desktop: 'row',
                }}
                spacing={{
                    fold: 2,
                    mobile: 2,
                    tablet: 5,
                    desktop: 5,
                }}
            >
                <Stack
                    spacing={0} 
                >
                    <Typography
                        variant="body2"
                    >
                        {"Department"}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700'
                        }}
                    >
                        {"Mathematics"}
                    </Typography>
                </Stack>
                <Stack
                    className="role-year-section"
                    spacing={{
                        fold: 2,
                        mobile: 5,
                        tablet: 5,
                        desktop: 5,
                    }}
                    direction={{
                        fold: 'column',
                        mobile: 'row',
                        tablet: 'row',
                        desktop: 'row',
                    }}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Academic Role"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {"Professor"}
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Appointed Year"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {"2004"}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction={{
                    fold: 'column',
                    mobile: 'row',
                    tablet: 'row',
                    desktop: 'row',
                }}
                spacing={{
                    fold: 2,
                    mobile: 5,
                    tablet: 5,
                    desktop: 5,
                }}
            >
                <Stack
                    spacing={0} 
                >
                    <Typography
                        variant="body2"
                    >
                        {"Office Building"}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700'
                        }}
                    >
                        {"Norris Center"}
                    </Typography>
                </Stack>
                <Stack
                    spacing={0} 
                >
                    <Typography
                        variant="body2"
                    >
                        {"Room"}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700'
                        }}
                    >
                        {"223A"}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
} 

export default PersonalInformation;
