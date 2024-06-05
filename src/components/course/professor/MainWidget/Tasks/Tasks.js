"use client"
import { Button, Grow, Stack, Typography } from "@mui/material";
import Past from "./Past";
import Upcoming from "./Upcoming";
import { useState } from "react";
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import { getCourse } from "@/lib/data/course/professor";
import { seperateWeeklyTasks } from "@/lib/utils/courses/frontend/modifyTasks";
import dayjs from "dayjs";

const Tasks = ({ course }) => {

    /* Tasks Tab: Upcoming & Past */
    const [taskTab, setTaskTab] = useState("upcoming");

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

    /* ******************************** */
    /* Fetch Dynamic Data: Coure Tasks  */
    /* ******************************** */
    const todayDateTime = dayjs();
    const courseData = getCourse(course, todayDateTime);

    /* Seperate Weekly Tasks into Upcoming & Past */
    const [weeklyTasks, setWeeklyTask] = useState(courseData.weeklyTasks);
    const changeWeeklyTasks = (updatedWeeklyTasks) => {
        setWeeklyTask(updatedWeeklyTasks);
    }
    const today = dayjs().format("MM/DD/YY"); //Today's Date
    const { upcoming, past } = seperateWeeklyTasks(today, weeklyTasks);

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
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Button
                        onClick={() => {
                            setTaskTab("upcoming");
                        }}
                        sx={{
                            width: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderStyle: 'solid',
                            borderRadius: '5px',
                            borderWidth: taskTab === "upcoming" ? '2px' : "0px",
                            borderColor: taskTab === "upcoming" ? 'primary.main' : "grey",
                            color: taskTab === "upcoming" ? 'primary.main' : "grey",
                            py: 0.25,
                        }}
                    >
                        <Typography
                            variant="button"
                            sx={{
                                fontWeight: '700',
                            }}
                        >
                            {"UPCOMING"}
                        </Typography>
                    </Button>
                    <Button
                        onClick={() => {
                            setTaskTab("past");
                        }}
                        sx={{
                            width: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderStyle: 'solid',
                            borderRadius: '5px',
                            borderWidth: taskTab === "past" ? '2px' : "0px",
                            borderColor: taskTab === "past" ? 'primary.main' : "grey",
                            color: taskTab === "past" ? 'primary.main' : "grey",
                            py: 0.25,
                        }}
                    >
                        <Typography
                            variant="button"
                            sx={{
                                fontWeight: '700',
                            }}
                        >
                            {"PAST"}
                        </Typography>
                    </Button>
                </Stack>
                <Upcoming
                    tab={taskTab}
                    upcoming={upcoming}
                    weeklyTasks={weeklyTasks}
                    changeWeeklyTasks={changeWeeklyTasks}
                    handleOpenAlert={handleOpenAlert}
                />
                <Past
                    tab={taskTab}
                    past={past}
                    weeklyTasks={weeklyTasks}
                    changeWeeklyTasks={changeWeeklyTasks}
                    handleOpenAlert={handleOpenAlert}
                />
            </Stack>
        </Grow>
    )
}

export default Tasks;
