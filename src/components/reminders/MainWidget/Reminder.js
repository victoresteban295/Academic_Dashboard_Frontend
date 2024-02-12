import { AccessTime, Delete, Edit, FileDownloadDone, InsertInvitation, MoreVert } from "@mui/icons-material";
import { Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ReminderBackdrop from "../ReminderBackdrop";
import { deleteReminder } from "@/lib/utils/reminders/frontend/modifyReminders";
import dayjs from "dayjs";

const Reminder = ({
    displayDate,
    firstDateGrp,
    group, 
    groupId, 
    remindId, 
    title, 
    description, 
    startDate, 
    time, 
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    currentReminders,
    markAsComplete,
    handleOpenAlert
}) => {

    const grpDay = dayjs(displayDate, "MM/DD/YY").format("dddd");
    const grpDate = dayjs(displayDate, "MM/DD/YY").format("MMMM D, YYYY");

    /* Today's Date */
    let dateTimeColor;
    let groupColor;
    const todayISO = dayjs().toISOString();
    const reminderISO = dayjs(`${startDate}-${time}`, "MM/DD/YY-h:mm A").toISOString();
    const isPastDue = (new Date(todayISO) - new Date(reminderISO))
    //Reminder is Past Due
    if(isPastDue >= 0) {
        groupColor = {
            bgcolor: '#f3a8ba',
            color: '#b6002b'
        }
        dateTimeColor = {
            color: 'error.main'
        }

    //Reminder is Not Past Due
    } else {
        groupColor = {
            bgcolor: '#c1c1c1',
        }
        dateTimeColor = {}
    }

    /* ************************************ */
    /* Backdrop Menu State Value & Function */
    /* ************************************ */
    /* Options Menu */
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openOptions = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeOptions = () => {
        setAnchorEl(null);
    }
    /* Edit Reminder */
    const [openNewReminder, setOpenNewReminder] = useState(false);
    const handleOpenNewReminder = () => {
        setOpenNewReminder(true);
    }
    const handleCloseNewReminder = () => {
        setOpenNewReminder(false);
    }

    /* Mark As Complete */
    const handleMarkAsComplete = () => {
        handleDeleteReminder();
        const undo = {
            groupId: groupId,
            title: title,
            description: description,
            date: startDate,
            time: time
        }
        markAsComplete(undo);
    }

    /* Delete Reminder */
    const handleDeleteReminder = () => {
        try {
            //Frontend: Delete Reminder
            const { 
                updatedGroups, 
                updatedToday, 
                updatedUpcoming } = deleteReminder(groupId, remindId, groups, todayReminders, upcomingReminders);

            //Update State Value
            changeTodayReminders(updatedToday);
            changeUpcomingReminders(updatedUpcoming);
            changeGroups(updatedGroups);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(); //Add parameter
            changeUpcomingReminders();
            changeGroups();
        }
    }

    return (
        <Stack
            spacing={2}
            sx={{
                pt: ((displayDate != '') && !firstDateGrp ? 5 : 0),
            }}
        >
            {displayDate != '' && (
                <Stack
                    spacing={0}
                >
                    <Stack
                        direction="row"
                        spacing={0.5}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {grpDay}
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            {grpDate}
                        </Typography>
                    </Stack>
                    <Divider flexItem />
                </Stack>
            )}

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
                    group={group}
                    groupId={groupId}
                    remindId={remindId}
                    title={title}
                    description={description}
                    date={startDate}
                    time={time}
                    open={openNewReminder}
                    handleClose={handleCloseNewReminder}
                    todayReminders={todayReminders}
                    changeTodayReminders={changeTodayReminders}
                    upcomingReminders={upcomingReminders}
                    changeUpcomingReminders={changeUpcomingReminders}
                    groups={groups}
                    changeGroups={changeGroups}
                    handleOpenAlert={handleOpenAlert}
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
                                onClick={handleMarkAsComplete}
                            >
                                <IconButton
                                    size='small'
                                    onClick={handleMarkAsComplete}
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
                                    onClick={handleDeleteReminder}
                                    sx={{
                                        color: 'error.main'
                                    }}
                                >
                                    <ListItemIcon>
                                        <Delete
                                            fontSize="small" 
                                            sx={{
                                                color: 'error.main'
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
                                    borderRadius: '5px',
                                    px: 0.5,
                                    fontWeight: '700',
                                    ...groupColor,
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
                                    sx={{
                                        ...dateTimeColor,
                                    }}
                                />
                                <Typography
                                    variant='subtitle1'
                                    sx={{
                                        ...dateTimeColor,
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
                                    sx={{
                                        ...dateTimeColor,
                                    }}
                                />
                                <Typography
                                    variant='subtitle1'
                                    sx={{
                                        ...dateTimeColor,
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
        </Stack>
    )
}

export default Reminder;
