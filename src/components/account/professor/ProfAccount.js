"use client"
import { useState } from "react";
import OfficeHours from "./OfficeHours/OfficeHours";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import { Stack, Typography } from "@mui/material"

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

    return (
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
                <PersonalInformation
                    department={account.department} 
                    academicRole={account.academicRole}
                    apptYear={account.apptYear}
                    officeBuilding={account.officeBuilding}
                    officeRoom={account.officeRoom}
                    changeAccount={changeAccount}
                />
                <OfficeHours
                    officeHrs={officeHours}
                    changeOfficeHrs={changeOfficeHrs}
                />
            </Stack>
        </Stack>
    )
}

export default ProfAccount;
