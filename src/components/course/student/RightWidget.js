import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";
import { Apartment, AssignmentInd, Close, Email, LocalPhone } from "@mui/icons-material";

const RightWidget = ({ 
    instructor, 
    office,
    phone,
    email,
    schedules,
    handleClose }) => {

    return (
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
                    onClick={handleClose}
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
                    <Typography
                        variant="body1"
                    >
                        {instructor}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <Apartment
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {office}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <LocalPhone
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {phone}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <Email
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {email}
                    </Typography>
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
            {schedules.map(schedule => {
                const { location, days, strTime, endTime } = schedule;
                return (
                    <Schedule 
                        key={location}
                        location={location}
                        days={days}
                        startTime={strTime}
                        endTime={endTime}
                    />
                )
            })}
        </Stack>
    )
}

export default RightWidget;
