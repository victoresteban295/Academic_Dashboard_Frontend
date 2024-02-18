import { Box, Divider, Drawer, Grow, IconButton, Tooltip, Typography } from "@mui/material";
import RightWidget from "../RightWidget";
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";

const CourseTitleSection = ({ title }) => {

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
                    variant="h6"
                    noWrap={true}
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    {title}
                </Typography> 

                {/* Course Schedule Menu Icon */}
                <Tooltip
                    title="Course Schedule"
                    sx={{
                        display: {sm: 'flex', md: 'none'}
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
                            width: '250px',
                            p: 1,
                        }}
                    >
                        <RightWidget
                        />
                    </Box>
                </Drawer>
            </Box> 
        </Grow>
    )
}

export default CourseTitleSection;
