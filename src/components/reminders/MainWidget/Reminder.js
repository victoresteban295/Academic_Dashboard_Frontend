import { Delete, Edit, FileDownloadDone, MoreVert } from "@mui/icons-material";
import { Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ReminderBackdrop from "../ReminderBackdrop";

const Reminder = ({
    group, 
    groupId, 
    remindId, 
    title, 
    description, 
    startDate, 
    time, 
    groups,
    changeReminders, 
    currentReminders,
    handleOpenAlert 
}) => {

    /* Options Menu's State Value & Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openOptions = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeOptions = () => {
        setAnchorEl(null);
    }

    /* Backdrop Menu State Value & Function */
    /* Edit Reminder */
    const [openNewReminder, setOpenNewReminder] = useState(false);
    const handleOpenNewReminder = () => {
        setOpenNewReminder(true);
    }
    const handleCloseNewReminder = () => {
        setOpenNewReminder(false);
    }

    return (
        <Stack>
            {/* Backdrops */}    
            <ReminderBackdrop
                group=""
                groupId={groupId}
                remindId=""
                title={title}
                description={description}
                startDate={startDate}
                time={time}
                open={openNewReminder}
                groups={groups}
                handleClose={handleCloseNewReminder}
            />

            {/* Reminder's Title & Options Section */}
            <Box
                className="title-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    {title}
                </Typography>
                <Box
                    className="reminder-options"
                    sx={{
                        display: 'flex',
                        ml: 2,
                    }}
                >
                    <Tooltip
                        title="Mark As Complete"
                    >
                        <IconButton
                            size='small'
                        >
                            <FileDownloadDone fontSize='inherit'/> 
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title="Options"
                    >
                        <IconButton
                            onClick={openOptions}
                            size='small'
                        >
                            <MoreVert fontSize='inherit'/> 
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="reminder-options-menu"
                        open={open}
                        onClose={openOptions}
                        onClick={closeOptions}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem
                            onClick={handleOpenNewReminder}
                        >
                            <ListItemIcon>
                                <Edit 
                                    fontSize="small" 
                                    sx={{
                                        color: '#000'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontWeight: '700'
                                }}
                            >
                                Edit
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            sx={{
                                color: '#ef476f'
                            }}
                        >
                            <ListItemIcon>
                                <Delete
                                    fontSize="small" 
                                    sx={{
                                        color: '#ef476f'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontWeight: '700'
                                }}
                            >
                                Delete
                            </ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>

            {/* Reminder's Group, Date, & Time Section */}
            <Stack
                className="group-date-time-section"
                direction={{xs: 'column', sm: 'row'}}
                alignItems={{xs: 'flex-start', sm: 'center'}}
                spacing={{xs: 0, sm: 1}}
            >
                {(currentReminders != groupId) && (
                    <Typography
                        variant='body1'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {`${group}:`}
                    </Typography>
                )}
                <Typography
                    variant='subtitle1'
                >
                    {`${startDate}, ${time}`}
                </Typography>
            </Stack>

            {/* Reminder's Group, Date, & Time Section */}
            <Typography
                variant="body1"
            >
                {description}
            </Typography>
        </Stack>
    )
}

export default Reminder;
