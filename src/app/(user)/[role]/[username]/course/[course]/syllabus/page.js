"use client"
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import Syllabus from "@/components/course/professor/MainWidget/Syllabus/Syllabus";
import { getCourse } from "@/lib/data/course/professor";
import dayjs from "dayjs";
import { useState } from "react";

const SyllabusPage = ({ params }) => {

    /* Course (Needed to Fetch Data) */
    const { course } = params; 
    const todayDateTime = dayjs();

    /* Mocked Fetch Data */
    const courseData = getCourse(course, todayDateTime);

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
            <Syllabus 
                title={courseData.title}
                description={courseData.description}
                gradeComp={courseData.gradeComp}
                sections={courseData.sections} 
                handleOpenAlert={handleOpenAlert}
            />
        </>
    )
}

export default SyllabusPage;
