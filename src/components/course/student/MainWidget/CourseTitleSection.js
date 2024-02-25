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
    const [anchorEl, setAnchorEl] = useState(null);
    const openReminders = Boolean(anchorEl);
    const handleOpenReminders = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCloseReminders = () => {
        setAnchorEl(null);
    }

    return (
        <Grow in={true}>
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
                    noWrap={false}
                    align="center"
                    variant="h6"
                    sx={{
                        fontWeight: '700',
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
                        onClick={handleOpenReminders}
                        size='small'
                    >
                        <MenuOpen fontSize='inherit'/> 
                    </IconButton>
                </Tooltip>
                <Drawer
                    anchor='right'
                    open={openReminders}
                    onClose={handleCloseReminders}
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
                            handleClose={handleCloseReminders}
                        />
                    </Box>
                </Drawer>
            </Box> 
        </Grow>
    )
}

export default CourseTitleSection;
