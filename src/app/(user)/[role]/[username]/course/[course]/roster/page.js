"use client"
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import Roster from "@/components/course/professor/MainWidget/Roster/Roster";
import { useState } from "react";

const RosterPage = () => {

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
        <>
            <AlertPopUpMsg
                open={openAlert}
                handleClose={handleCloseAlert}
                errorMsg={errorMsg}
            />
            <Roster
            /> 
        </>
    )
}

export default RosterPage;
