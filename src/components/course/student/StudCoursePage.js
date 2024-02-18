"use client"
import { Alert, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import MainWidget from "./MainWidget";
import RightWidget from "./RightWidget";

const StudCoursePage = () => {

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
                        handleOpenAlert={handleOpenAlert}
                    />
                </Box>
            </Box>
        </Box>
    )

}

export default StudCoursePage;
