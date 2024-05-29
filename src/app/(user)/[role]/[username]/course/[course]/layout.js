import { Alert, Box, Snackbar } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RightWidget from "./RightWidget";
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import CourseTitle from "@/components/course/professor/Layout/CourseTitle";
import CourseTabSelection from "@/components/course/professor/Layout/CourseTabSelection";

const CourseLayout = ({ children, params }) => {

   const { role, username, course } = params; 

    /* Error Message Displaying in Alert */
    const [errorMsg, setErrorMsg] = useState('');

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
        <html lang="en">
            <body>
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
                                    title={title}
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
            </body>
        </html>
    ) 
}

export default CourseLayout;
