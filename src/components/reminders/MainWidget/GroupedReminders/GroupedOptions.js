import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Add, MoreVert } from "@mui/icons-material";
import RightWidgetIcon from "../RightWidgetIcon";
import { useState } from "react";
import DeleteGroupBackdrop from "./Backdrops/DeleteGroupBackdrop";
import WarnDeleteBackdrop from "./Backdrops/WarnDeleteBackdrop";
import ReminderBackdrop from "../../ReminderBackdrop";
import { deleteGroup } from "@/lib/utils/reminders/frontend/modifyGroups";

const GroupedOptions = ({
    groupId,
    title,
    reminders,
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
    /* Delete Group */
    const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
    const handleOpenDeleteGroup = () => {
        setOpenDeleteGroup(true);
    }
    const handleCloseDeleteGroup = () => {
        setOpenDeleteGroup(false);
    }
    /* Warn Not All Reminders in Group are Completed */
    const [openWarnDelete, setOpenWarnDelete] = useState(false);
    const handleOpenWarnDelete = () => {
        setOpenWarnDelete(true);
    }
    const handleCloseWarnDelete = () => {
        setOpenWarnDelete(false);
    }
    /* Create New Reminder */
    const [openNewReminder, setOpenNewReminder] = useState(false);
    const handleOpenNewReminder = () => {
        setOpenNewReminder(true);
    }
    const handleCloseNewReminder = () => {
        setOpenNewReminder(false);
    }

    /* Delete Grouped Reminder */
    const handleDeleteGroup = () => {
        try {
            //Display Today's Reminders After Deletion
            handleCurrentReminders("today");

            //Frontend: Delete Group
            const { 
                updatedGroups, 
                updatedToday, 
                updatedUpcoming } = deleteGroup(groupId, groups, todayReminders, upcomingReminders);

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
        <Box
            sx={{
                display: 'flex',
                ml: 2,
            }}
        >
            {/* Backdrops */}    
            <DeleteGroupBackdrop 
                title={title}
                reminders={reminders}
                open={openDeleteGroup}
                handleClose={handleCloseDeleteGroup}
                handleOpenWarnDelete={handleOpenWarnDelete}
                handleDeleteGroup={handleDeleteGroup}
            />
            <WarnDeleteBackdrop 
                title={title}
                open={openWarnDelete}
                handleClose={handleCloseWarnDelete}
                handleDeleteGroup={handleDeleteGroup}
            />
            <ReminderBackdrop
                group=""
                groupId={groupId}
                remindId=""
                title=""
                description=""
                date=""
                time=""
                open={openNewReminder}
                handleClose={handleCloseNewReminder}
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

            {/* Create New Reminder Icon */}
            <Tooltip
                title="Create New Reminder"
            >
                <IconButton
                    size='small'
                    onClick={handleOpenNewReminder}
                >
                    <Add fontSize='inherit'/> 
                </IconButton>
            </Tooltip>

            {/* Options Icon */}
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
                id="groups-options-menu"
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
                    onClick={handleOpenDeleteGroup}
                    sx={{
                        color: '#ef476f'
                    }}
                >
                    Delete Group
                </MenuItem>
            </Menu>

            {/* My Reminders Menu Icon */}
            <RightWidgetIcon
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
    )
}

export default GroupedOptions;
