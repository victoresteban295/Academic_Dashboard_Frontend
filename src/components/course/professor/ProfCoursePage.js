"use client"
import { Alert, Box, Snackbar } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import MainWidget from "./MainWidget";
import RightWidget from "./RightWidget";
import dayjs from "dayjs";
import { getCourse } from "@/lib/data/course/student";

const ProfCoursePage = ({ crs }) => {

    const todayDateTime = dayjs();
    const course = getCourse(crs, todayDateTime); 

    /* State Value */
    const [schedules, setSchedules] = useState(course.schedules);
    const changeSchedules = (updatedSchedules) => {
        setSchedules(updatedSchedules);
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

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                className="course-page"
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
                            position: 'relative',
                            color: 'text.primary',
                            bgcolor: 'error.light',
                            top: {
                                fold: '0px',
                                mobile: '0px',
                                tablet: '50px',
                                desktop: '50px',
                            },
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
                        instructor={course.instructor} 
                        office={course.office}
                        phone={course.phone}
                        email={course.email}
                        schedules={schedules}
                        title={course.title}
                        school={course.school}
                        description={course.description}
                        infoSections={course.infoSections}
                        weeklyTasks={course.weeklyTasks}
                        changeSchedules={changeSchedules}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Box>
                <Box
                    className='rightside-menu-container'
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'none',
                            tablet: 'none',
                            desktop: 'block',
                        },
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
                            instructor={course.instructor} 
                            office={course.office}
                            phone={course.phone}
                            email={course.email}
                            schedules={schedules}
                            changeSchedules={changeSchedules}
                            handleOpenAlert={handleOpenAlert}
                        />
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default ProfCoursePage;
