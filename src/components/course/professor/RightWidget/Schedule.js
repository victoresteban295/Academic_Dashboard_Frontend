import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditScheduleBackdrop from "../Backdrop/EditScheduleBackdrop";

const Schedule = ({ 
    index, 
    location, 
    days, 
    startTime, 
    endTime, 
    schedules, 
    changeSchedules,
    size,
    handleOpenAlert
}) => {

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
        <Box>
            <EditScheduleBackdrop 
                size={size}
                open={openSchedule}
                handleClose={handleCloseSchedule}
                index={index}
                location={location}
                days={days}
                strTime={startTime}
                endTime={endTime}
                schedules={schedules}
                changeSchedules={changeSchedules}
                handleOpenAlert={handleOpenAlert}
            />
            <Stack
                onClick={handleOpenSchedule}
                sx={{
                    px: 2,
                    py: 1,
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                <Typography
                    variant="body1"
                >
                    {location}
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
        </Box>
    )
}

export default Schedule;
