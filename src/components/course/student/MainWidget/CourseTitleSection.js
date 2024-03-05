import { Box, Drawer, Grow, IconButton, Tooltip, Typography } from "@mui/material";
import RightWidget from "../RightWidget";
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";

const CourseTitleSection = ({ 
    title,
    instructor, 
    office,
    phone,
    email,
    schedules
}) => {

    /* Course Schedule Menu's State Value & Function */ 
    const [scheduleAnchor, setScheduleAnchorEl] = useState(null);
    const openSchedule = Boolean(scheduleAnchor);
    const handleOpenSchedule = (event) => {
        setScheduleAnchorEl(event.currentTarget);
    }
    const handleCloseSchedule = () => {
        setScheduleAnchorEl(null);
    }

    return (
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
            <Typography
                align="center"
                variant="h6"
                sx={{
                    fontWeight: '700',
                    overflowX: 'hidden',
                }}
            >
                {title}
            </Typography> 

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
                    onClick={handleOpenSchedule}
                    size='small'
                >
                    <MenuOpen fontSize='inherit'/> 
                </IconButton>
            </Tooltip>
            <Drawer
                anchor='right'
                open={openSchedule}
                onClose={handleCloseSchedule}
            >
                <Box
                    className='reminders-menu-container'
                    sx={{
                        p: 1,
                    }}
                >
                    <RightWidget
                        instructor={instructor} 
                        office={office}
                        phone={phone}
                        email={email}
                        schedules={schedules}
                        handleClose={handleCloseSchedule}
                    />
                </Box>
            </Drawer>
        </Box> 
    )
}

export default CourseTitleSection;
