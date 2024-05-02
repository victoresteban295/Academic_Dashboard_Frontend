"use client"
import { useState } from "react";
import OfficeHours from "./OfficeHours/OfficeHours";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import { Alert, Divider, Snackbar, Stack, Typography } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ContactInformation from "./ContactInformation/ContactInformation";

const ProfAccount = ({
    accountInfo,
    officeHrs
}) => {

    /* State Value */
    const [account, setAccount] = useState(accountInfo);
    const changeAccount = (updatedAccount) => {
        setAccount(updatedAccount);
    }
    const [officeHours, setOfficeHrs] = useState(officeHrs);
    const changeOfficeHrs = (updatedOfficeHrs) => {
        setOfficeHrs(updatedOfficeHrs);
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
        <LocalizationProvider dateAdapter={AdapterDayjs} >
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
                        {"Professor Account"}
                    </Typography>
                </Stack>
                <Stack
                    spacing={2}
                    divider={<Divider flexItem />}
                    sx={{
                        px: {
                            fold: 2,
                            mobile: 2,
                            tablet: 4,
                            desktop: 4,
                        },
                        py: 2,
                        width: '100%',
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '10px',
                    }}
                >
                    <PersonalInformation
                        department={account.department} 
                        academicRole={account.academicRole}
                        apptYear={account.apptYear}
                        officeBuilding={account.officeBuilding}
                        officeRoom={account.officeRoom}
                        email={account.email}
                        phone={account.phone}
                        changeAccount={changeAccount}
                        handleOpenAlert={handleOpenAlert}
                    />
                    <ContactInformation 
                        department={account.department} 
                        academicRole={account.academicRole}
                        apptYear={account.apptYear}
                        officeBuilding={account.officeBuilding}
                        officeRoom={account.officeRoom}
                        email={account.email}
                        phone={account.phone}
                        changeAccount={changeAccount}
                        handleOpenAlert={handleOpenAlert}
                    />
                    <OfficeHours
                        officeHrs={officeHours}
                        changeOfficeHrs={changeOfficeHrs}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
            </Stack>
        </LocalizationProvider>
    )
}

export default ProfAccount;
