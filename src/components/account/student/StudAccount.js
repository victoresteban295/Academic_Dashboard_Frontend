"use client"
import { Alert, Snackbar, Stack, Typography } from "@mui/material";
import { useState } from "react";
import StudentInformation from "./StudentInformation/StudentInformation";

const StudAccount = ({ accountInfo }) => {

    /* State Value */
    const [account, setAccount] = useState(accountInfo);
    const changeAccount = (updatedAccount) => {
        setAccount(updatedAccount);
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
        <>
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
            <Stack
                spacing={2}
                sx={{
                    width: '100%',
                    py: 1,
                    px: 2,
                }}
            >
                <Stack
                    spacing={0}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Student Account"}
                    </Typography>
                </Stack>
                <Stack
                    spacing={4}
                    sx={{
                        px: {
                            fold: 0,
                            mobile: 0,
                            tablet: 2,
                            desktop: 2,
                        },
                        width: '100%',
                    }}
                >
                    <StudentInformation
                        gradeLvl={account.gradeLvl} 
                        major={account.major}
                        minor={account.minor}
                        concentration={account.concentration}
                        changeAccount={changeAccount}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
            </Stack>

        </>
    )
}

export default StudAccount;
