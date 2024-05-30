"use client"
import { Box, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import CourseTitle from "@/components/course/professor/Layout/CourseTitle";
import CourseTabSelection from "@/components/course/professor/Layout/CourseTabSelection";
import { getLayoutData } from "@/lib/data/course/professor";
import RightWidget from "@/components/course/professor/RightWidget";
import { useState } from "react";

const CourseLayout = ({ children, params }) => {

   const { role, username, course } = params; 

    /* Error Message Displaying in Alert */
    const [errorMsg, setErrorMsg] = useState('');

    /* Get Course Data */
    const crsData = getLayoutData(course);

    /* State Value: Schedule */
    const [schedules, setSchedules] = useState(crsData.schedules);
    const changeSchedules = (updatedSchedules) => {
        setSchedules(updatedSchedules);
    }

    /* Display Alert Popup Message */
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
                        className="layout-page"
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <AlertPopUpMsg 
                            open={openAlert}
                            handleClose={handleCloseAlert}
                            errorMsg={errorMsg}
                        />

                        {/* Main Content */}
                        <Box
                            className="main-content-container"
                            sx={{
                                flexGrow: 1,
                                maxWidth: '750px',
                                p: 1,
                            }}
                        >
                            <Stack
                                className="main-content"
                                spacing={2}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <CourseTitle
                                    title={crsData.title}
                                    schedules={schedules}
                                    changeSchedules={changeSchedules}
                                    handleOpenAlert={handleOpenAlert}
                                />
                                <CourseTabSelection />
                                {children}
                            </Stack>
                        </Box>

                        {/* Right Content */}
                        <Box
                            className="right-content-container"
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
                                    width: '200px',
                                    position: 'sticky',
                                    top: '70px',
                                }}
                            >
                                <RightWidget
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

export default CourseLayout;
