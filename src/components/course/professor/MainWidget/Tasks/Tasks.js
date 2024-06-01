import { Button, Grow, Stack, Typography } from "@mui/material";
import Past from "./Past";
import Upcoming from "./Upcoming";
import { useState } from "react";

const Tasks = ({
    upcoming,
    past,
    weeklyTasks,
    changeWeeklyTasks,
    handleOpenAlert
}) => {

    const [taskTab, setTaskTab] = useState("upcoming");

    return (
        <Grow in={true}>
            <Stack
                spacing={2}
            >
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
