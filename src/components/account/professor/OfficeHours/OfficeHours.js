import { Add, EditOutlined } from "@mui/icons-material";
import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"

const OfficeHours = ({
    officeHrs,
    changeOfficeHrs
}) => {

    
    return (
        <Stack
            className="professors-office-hours"
            spacing={4}
            sx={{
                px: {
                    fold: 2,
                    mobile: 2,
                    tablet: 4,
                    desktop: 4,
                },
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
                        {"Office Hours"}
                    </Typography>
                    <Button
                        startIcon={<Add />}
                        variant="text"
                        size="small"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'flex',
                            },
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        Add
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Time frame in which students can visit your office for academic assistance"}
                </Typography>
            </Stack>
            <Stack
                spacing={5}
                direction="row"
                justifyContent="center"
                useFlexGap
                flexWrap="wrap"
            >
                {officeHrs.map(hrs => {
                    const { location, room, startTime, endTime, days } = hrs; 
                    return (
                        <Stack
                            key={startTime}
                            spacing={0}
                            sx={{
                                py: 1,
                                px: 3,
                                cursor: 'pointer',
                                boxShadow: '1px 1px 4px 2px #cecece',
                                borderRadius: '5px',
                                flexGrow: 1,
                                maxWidth: '300px',
                                "&:hover": {
                                    bgcolor: 'primary.light'
                                }
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                {`${location} ${room}`}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {`${startTime} - ${endTime}`}
                            </Typography>
                            <Stack
                                direction="row"
                                useFlexGap
                                flexWrap="wrap"
                                spacing={1}
                                divider={
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                    />
                                }
                            >
                                {days.map(day => {
                                    return (
                                        <Typography
                                            key={day}
                                            variant="body1"
                                        >
                                            {day}
                                        </Typography>
                                    )
                                })}
                            </Stack>
                        </Stack>
                    )
                })}

            </Stack>
            <Box
                sx={{
                    display: {
                        fold: 'flex',
                        mobile: 'flex',
                        tablet: 'flex',
                        desktop: 'none',
                    },
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    startIcon={<Add />}
                    variant="text"
                    size="small"
                    sx={{
                        fontWeight: '700',
                        bgcolor: 'primary.light',
                    }}
                >
                    Add
                </Button>
            </Box>
        </Stack>
    )
}

export default OfficeHours;
