import { AccessAlarm, AccessTime, Delete, Edit, FileDownloadDone, InsertInvitation, MoreVert, Today } from "@mui/icons-material";
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
        <Stack
            spacing={1}
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                py: 1,
                px: 2,
            }}
        >
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
            <Stack
                className="title-section"
            >
                <Box
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
                <Divider />
            </Stack>

            <Stack
                spacing={1}
            >
                {/* Reminder's Group, Date, & Time Section */}
                <Stack
                    className="group-date-time-section"
                    direction={{xs: 'column', sm: 'row'}}
                    alignItems={{xs: 'flex-start', sm: 'center'}}
                    spacing={1}
                >
                    {(currentReminders != groupId) && (
                        <Typography
                            variant='body1'
                            sx={{
                                bgcolor: '#c1c1c1',
                                borderRadius: '5px',
                                px: 0.5,
                                fontWeight: '700',
                            }}
                        >
                            {`${group}`}
                        </Typography>
                    )}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={0.5}
                        >
                            <InsertInvitation
                                fontSize="small"
                            />
                            <Typography
                                variant='subtitle1'
                                sx={{
                                }}
                            >
                                {startDate}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={0.5}
                        >
                            <AccessTime
                                fontSize="small"
                            />
                            <Typography
                                variant='subtitle1'
                                sx={{
                                }}
                            >
                                {time}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Reminder's Group, Date, & Time Section */}
                <Typography
                    variant="subtitle2"
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Reminder;
