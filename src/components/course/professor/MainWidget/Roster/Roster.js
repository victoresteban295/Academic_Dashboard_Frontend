"use client"
import { Grow, Stack } from "@mui/material";
import CourseStats from "./CourseStats";
import StudentRoster from "./StudentRoster";
import { useState } from "react";
import AlertPopUpMsg from "@/components/AlertPopUpMsg";

const Roster = ({ course }) => {

    /* ********************************* */
    /* State Value: Error Handling PopUp */
    /* ********************************* */
    const [errorMsg, setErrorMsg] = useState('');
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
        <Grow in={true}>
            <Stack
                spacing={2}
            >
                <AlertPopUpMsg
                    open={openAlert}
                    handleClose={handleCloseAlert}
                    errorMsg={errorMsg}
                />
                <CourseStats 
                    handleOpenAlert={handleOpenAlert}
                />
                <StudentRoster 
                    handleOpenAlert={handleOpenAlert}
                />
            </Stack>
        </Grow>
    )
}

export default Roster;
