import { Box, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";
import { Add, Apartment, AssignmentInd, Close, Email, LocalPhone } from "@mui/icons-material";
import EditScheduleBackdrop from "./Backdrop/EditScheduleBackdrop";
import { useState } from "react";

const RightWidget = ({ 
    instructor, 
    office,
    phone,
    email,
    schedules,
    changeSchedules,
    handleClose, 
    handleOpenAlert }) => {

    /* Backdrop Menu State Value & Function */
    /* Create/Edit Course Schedule */
    const [openSchedule, setOpenSchedule] = useState(false);
    const handleOpenSchedule = () => {
        setOpenSchedule(true);
    }
    const handleCloseSchedule = () => {
        setOpenSchedule(false);
    }

    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
            }}
        >
            <EditScheduleBackdrop 
                open={openSchedule}
                handleClose={handleCloseSchedule}
                index=""
                location=""
                days={[]}
                strTime=""
                endTime=""
                schedules={schedules}
                changeSchedules={changeSchedules}
                handleOpenAlert={handleOpenAlert}
            />
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
                    {"Course Schedule"}
                </Typography>
                <Tooltip title="Add New Schedule">
                    <IconButton
                        onClick={handleOpenSchedule}
                        size='small'
                    >
                        <Add fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </Box>
            {schedules.map(schedule => {
                const { index, location, days, strTime, endTime } = schedule;
                return (
                    <Schedule 
                        key={index}
                        index={index}
                        location={location}
                        days={days}
                        startTime={strTime}
                        endTime={endTime}
                        schedules={schedules}
                        changeSchedules={changeSchedules}
                        size={schedules.length}
                        handleOpenAlert={handleOpenAlert}
                    />
                )
            })}
        </Stack>
    )
}

export default RightWidget;
