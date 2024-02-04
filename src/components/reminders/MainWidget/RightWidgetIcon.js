import { MenuOpen } from "@mui/icons-material";
import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import RightWidget from "../RightWidget";

const RightWidgetIcon = ({
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders,
    handleOpenAlert
}) => {

    /* Options Menu's State Value & Function */ 
    const [anchorEl, setAnchorEl] = useState(null);
    const openReminders = Boolean(anchorEl);
    const handleOpenReminders = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCloseReminders = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Tooltip
                title="My Reminders"
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
                        todayReminders={todayReminders} 
                        changeTodayReminders={changeTodayReminders}
                        upcomingReminders={upcomingReminders}
                        changeUpcomingReminders={changeUpcomingReminders}
                        groups={groups}
                        changeGroups={changeGroups}
                        currentReminders={currentReminders}
                        handleCurrentReminders={handleCurrentReminders}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Box>
            </Drawer>
        </>

    )
}

export default RightWidgetIcon;
