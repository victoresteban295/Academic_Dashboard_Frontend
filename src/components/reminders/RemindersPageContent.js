"use client"
import { Alert, Box, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import MainWidget from "./MainWidget";
import RightWidget from "./RightWidget";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const RemindersPageContent = ({ today, upcoming, groupedReminders }) => {

    /* Reminder Group Being Viewed */
    const [currentReminders, setCurrentReminders] = useState('');
    const handleCurrentReminders = (groupId) => {
        //Set GroupId of Reminder Group Being Viewed
        setCurrentReminders(groupId);
        localStorage.setItem("currentReminders", groupId);
    }

    /* Determine User's Last Visited Reminder Group */
    useEffect(() => {
        //Has User Visited a Reminder Groups
        let hasVisitedReminders = localStorage.getItem("currentReminders") != null;
        let lastVisitedReminders; //GroupId of Last Visited Reminder Group

        //User Hasn't Visited any Reminder Group
        if(!hasVisitedReminders) {
            //Set Last Visited Reminder Group to Today's Reminders
            lastVisitedReminders = "today";
            localStorage.setItem("currentReminders", lastVisitedReminders);

        } else {
            //Set Current Reminder Group to Last Visited Reminder Group
            lastVisitedReminders = localStorage.getItem("currentReminders");
        }

        //Current Reminder Group that User is Viewing
        setCurrentReminders(lastVisitedReminders);
    }, [])

    /* Today's Reminders */
    const [todayReminders, setTodayReminders] = useState(today);
    const changeTodayReminders = (reminders) => {
        setTodayReminders(reminders);
    }

    /* Upcoming Reminders */
    const [upcomingReminders, setUpcomingReminders] = useState(upcoming)
    const changeUpcomingReminders = (reminders) => {
        setUpcomingReminders(reminders);
    }

    /* Grouped Reminders */
    const [groups, setGroups] = useState(groupedReminders);
    const changeGroups = (reminderGroups) => {
        setGroups(reminderGroups)
    }

    /* Error Message Displaying in Alert */
    const [errorMsg, setErrorMsg] = useState('');

    /* Display Alert with Error Message */
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = (msg) => {
        setErrorMsg(msg);
        setOpenAlert(true);
    }
    const handleCloseAlert = () => {
        setErrorMsg('');
        setOpenAlert(false);
    }

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box
                className="reminders-page"
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Snackbar
                    open={openAlert}
                    anchorOrigin={{
                        vertical: 'top', 
                        horizontal: 'right',
                    }}
                    autoHideDuration={15000}
                    onClose={handleCloseAlert}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        severity="error"
                        sx={{
                            width: '100%',
                            position: 'relative',
                            top: {xs: '0px', sm: '0px', md: '50px'},
                        }}
                    >
                        {errorMsg}
                    </Alert>
                </Snackbar> 
                <Box
                    className='main-content-container'
                    sx={{
                        flexGrow: 1,
                        maxWidth: '750px',
                        p: 1,
                    }}
                >
                    <MainWidget
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
                <Box
                    className='rightside-menu-container'
                    sx={{
                        display: {xs: 'none', sm: 'none', md: 'block'},
                        flexGrow: 1,
                        maxWidth: '250px',
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            position: 'sticky',
                            top: '70px',
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
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default RemindersPageContent;
