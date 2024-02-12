import { Alert, Box, Button, Grow, IconButton, Stack, Typography } from "@mui/material";
import Reminder from "./Reminder";
import { Close } from "@mui/icons-material";
import { createReminder } from "@/lib/utils/reminders/frontend/modifyReminders";
import { useState } from "react";

const RemindersSection = ({ 
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    reminders,
    currentReminders,
    handleOpenAlert
}) => {

    let date;
    let grpDate = '';
    let days = [];
    for(const reminder of reminders) {
        if(date != reminder.startDate) {
            date = reminder.startDate;
            days.push(date);
        } 
    }

    /* Completed Reminder Alert */
    const [completeReminder, setCompleteReminder] = useState(null);
    const [displayUndoAlert, setDisplayUndoAlert] = useState(false);
    const markAsComplete = (reminder) => {
        setCompleteReminder(reminder);
        setDisplayUndoAlert(true);
    }

    /* Undo Reminder */
    const undoReminder = () => {
        try {
            //Frontend: Create a New Reminder
            const { updatedToday, updatedUpcoming, updatedGroups } = createReminder(
                completeReminder.groupId,
                completeReminder.title,
                completeReminder.description,
                completeReminder.date,
                completeReminder.time,
                groups,
                todayReminders,
                upcomingReminders);
            
            //Update State Value
            changeTodayReminders(updatedToday);
            changeUpcomingReminders(updatedUpcoming);
            changeGroups(updatedGroups);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);

        }
        setDisplayUndoAlert(false);
    }

    return (
        <>
            {displayUndoAlert && (
                <Alert
                    severity="success"
                    action={
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button 
                                onClick={undoReminder}
                                variant="outlined"
                                color="inherit" 
                                size="small"
                            >
                                UNDO
                            </Button>
                            <IconButton
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setDisplayUndoAlert(false);
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    }
                >
                    {`${completeReminder.title} Completed!`}
                </Alert>
            )}

            {(reminders.length != 0) ? (
                <Grow in={true}>
                    <Stack
                        className='reminders-section'
                        spacing={2}
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                            {reminders.map((reminder) => {
                                let displayDate = "";
                                let firstDateGrp = false;
                                const { group, groupId, remindId, title, 
                                    description, startDate, time } = reminder;
                                if(grpDate != startDate) {
                                    if(grpDate === '') {
                                        firstDateGrp = true;
                                    }
                                    grpDate = startDate;
                                    displayDate = startDate;
                                }
                                return (
                                    <Reminder 
                                        key={remindId}
                                        displayDate={displayDate}
                                        firstDateGrp={firstDateGrp}
                                        group={group}
                                        groupId={groupId}
                                        remindId={remindId}
                                        title={title}
                                        description={description}
                                        startDate={startDate}
                                        time={time}
                                        todayReminders={todayReminders}
                                        changeTodayReminders={changeTodayReminders}
                                        upcomingReminders={upcomingReminders}
                                        changeUpcomingReminders={changeUpcomingReminders}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        currentReminders={currentReminders}
                                        markAsComplete={markAsComplete}
                                        handleOpenAlert={handleOpenAlert}
                                    />
                                )
                            })}
                    </Stack>
                </Grow>
            ) : (
                <Box
                    className="No-Reminders-Section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        py: 4,
                    }}
                >
                    <Typography
                        variant='h6'
                        align="center"
                    >
                        No Reminders Left to Complete!
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default RemindersSection;
