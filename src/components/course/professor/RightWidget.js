import { Box, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";
import { Add, Close } from "@mui/icons-material";
import EditScheduleBackdrop from "./Backdrop/EditScheduleBackdrop";
import { useState } from "react";
import InstructorInfo from "./RightWidget/InstructorInfo";

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
            <InstructorInfo 
                instructor={instructor}
                office={office}
                phone={phone}
                email={email}
            />
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
