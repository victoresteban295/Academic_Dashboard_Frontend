"use client"
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import Tasks from "@/components/course/professor/MainWidget/Tasks/Tasks";
import { getCourse } from "@/lib/data/course/professor";
import { seperateWeeklyTasks } from "@/lib/utils/courses/frontend/modifyTasks";
import dayjs from "dayjs";
import { useState } from "react";

const TasksPage = ({ params }) => {

    /* Course (Needed to Fetch Data) */
    const { course } = params; 
    const todayDateTime = dayjs();

    /* Mocked Fetch Data */
    const courseData = getCourse(course, todayDateTime);

    /* State Value: Tasks */
    const [weeklyTasks, setWeeklyTask] = useState(courseData.weeklyTasks);
    const changeWeeklyTasks = (updatedWeeklyTasks) => {
        setWeeklyTask(updatedWeeklyTasks);
    }
    const today = dayjs().format("MM/DD/YY"); //Today's Date
    const { upcoming, past } = seperateWeeklyTasks(today, weeklyTasks);


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
            <Tasks
                upcoming={upcoming}
                past={past}
                weeklyTasks={weeklyTasks}
                changeWeeklyTasks={changeWeeklyTasks}
                handleOpenAlert={handleOpenAlert}
            /> 
        </>
    )
}

export default TasksPage;
