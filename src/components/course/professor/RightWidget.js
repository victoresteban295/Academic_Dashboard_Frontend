import { Box, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";
import { Add } from "@mui/icons-material";
import EditScheduleBackdrop from "./Backdrop/EditScheduleBackdrop";
import { useState } from "react";
import OfficeHrs from "./RightWidget/OfficeHrs";

const RightWidget = ({ 
    instructor, 
    office,
    phone,
    email,
    schedules,
    changeSchedules,
    handleClose, 
    handleOpenAlert }) => {

    const officeHrs = [
        {
            index: "0",
            location: "Norris Center 223A",
            days: ["Mon", "Wed", "Fri"],
            strTime: "3:00 PM",
            endTime: "5:00 PM",
        },
        {
            index: "1",
            location: "Norris Center 223A",
            days: ["Tue", "Thu"],
            strTime: "11:00 AM",
            endTime: "12:00 PM",
        }
    ]

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
                    {"Office Hours"}
                </Typography>
            </Box>
            {officeHrs.map(officeHr => {
                const { index, location, days, strTime, endTime } = officeHr;
                return (
                    <OfficeHrs
                        key={index}
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
