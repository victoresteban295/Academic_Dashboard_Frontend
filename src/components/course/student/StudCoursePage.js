"use client"
import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import MainWidget from "./MainWidget";
import RightWidget from "./RightWidget";
import { getCourse } from "@/lib/data/course/student";
import dayjs from "dayjs";

const StudCoursePage = ({ crs }) => {

    const todayDateTime = dayjs();
    const course = getCourse(crs, todayDateTime); 

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
        <Box
            className="course-page"
            sx={{
                display: 'flex',
                flexGrow: 1,
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
                    schedules={course.schedules}
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
                        instructor={course.instructor} 
                        office={course.office}
                        phone={course.phone}
                        email={course.email}
                        schedules={course.schedules}
                    />
                </Box>
            </Box>
        </Box>
    )

}

export default StudCoursePage;
