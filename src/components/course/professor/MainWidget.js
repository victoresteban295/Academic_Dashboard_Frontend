import { Box, Button, Stack, Typography } from "@mui/material";
import CourseTitleSection from "./MainWidget/CourseTitleSection";
import { useState } from "react";
import Syllabus from "./MainWidget/Syllabus/Syllabus";
import dayjs from "dayjs";
import { seperateWeeklyTasks } from "@/lib/utils/courses/frontend/modifyTasks";
import { Assignment, AssignmentOutlined, RecentActors, RecentActorsOutlined, TextSnippet, TextSnippetOutlined } from "@mui/icons-material";
import Tasks from "./MainWidget/Tasks/Tasks";
import Roster from "./MainWidget/Roster/Roster";

const MainWidget = ({ 
    instructor, 
    office,
    phone,
    email,
    schedules,
    title,
    description,
    gradeComp,
    infoSections,
    weeklyTasks,
    changeSchedules,
    handleOpenAlert
}) => {

    /* Tab Being Viewed */
    const [tab, setTab] = useState("syllabus");

    /* State Value */
    const [descr, setDescr] = useState(description);
    const changeDescription = (newDescr) => {
        setDescr(newDescr);
    }
    const [stTitle, setTitle] = useState(title);
    const changeTitle = (newTitle) => {
        setTitle(newTitle);
    }
    const [infos, setInfos] = useState(infoSections);
    const changeInfoSections = (infoSection) => {
        setInfos(infoSection);
    }
    const [stWeeklyTasks, setWeeklyTask] = useState(weeklyTasks);
    const changeWeeklyTasks = (updatedWeeklyTasks) => {
        setWeeklyTask(updatedWeeklyTasks);
    }

    /* Today's Date */
    const today = dayjs().format("MM/DD/YY");
    const { upcoming, past } = seperateWeeklyTasks(today, stWeeklyTasks);

    return (
        <Stack
            className="student-course-main-content"
            spacing={2}
            sx={{
                width: '100%',
            }}
        >
            <CourseTitleSection
                title={stTitle}
                instructor={instructor} 
                office={office}
                phone={phone}
                email={email}
                schedules={schedules}
                infos={infos}
                weeklyTasks={stWeeklyTasks}
                description={descr}
                changeDescription={changeDescription}
                changeInfoSections={changeInfoSections}
                changeTitle={changeTitle}
                changeSchedules={changeSchedules}
                changeWeeklyTasks={changeWeeklyTasks}
                handleOpenAlert={handleOpenAlert}
            />

            {/* Tab Selection: Syllabus, Upcoming, Past */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
                spacing={{
                    fold: 0,
                    mobile: 2,
                    tablet: 4,
                    desktop: 4,
                }}
                sx={{
                    py: 0,
                    borderBottom: '1px solid',
                    borderColor: '#cecece',
                }}
            >
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("syllabus")
                    }} 
                    sx={{
                        color: tab === "syllabus" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "syllabus" ? '4px solid' : '0px solid',
                        borderColor: tab === "syllabus" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {tab === "syllabus" ? (
                            <TextSnippet 
                                
                            />
                        ) : (
                            <TextSnippetOutlined
                                
                            />
                        )}
                        <Typography
                            variant="caption"
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'block',
                                    tablet: 'block',
                                    desktop: 'block',
                                },
                                fontWeight: '700',
                            }}
                        >
                            Syllabus
                        </Typography>
                    </Box>
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("tasks")
                    }} 
                    sx={{
                        color: tab === "tasks" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "tasks" ? '4px solid' : '0px solid',
                        borderColor: tab === "tasks" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {tab === "tasks" ? (
                            <Assignment
                                
                            />
                        ) : (
                            <AssignmentOutlined
                                
                            />
                        )}
                        <Typography
                            variant="caption"
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'block',
                                    tablet: 'block',
                                    desktop: 'block',
                                },
                                fontWeight: '700',
                            }}
                        >
                            Tasks
                        </Typography>
                    </Box>
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("roster")
                    }} 
                    sx={{
                        color: tab === "roster" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "roster" ? '4px solid' : '0px solid',
                        borderColor: tab === "roster" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {tab === "roster" ? (
                            <RecentActors
                                
                            />
                        ) : (
                            <RecentActorsOutlined
                                
                            />
                        )}
                        <Typography
                            variant="caption"
                            sx={{
                                display: {
                                    fold: 'none',
                                    mobile: 'block',
                                    tablet: 'block',
                                    desktop: 'block',
                                },
                                fontWeight: '700',
                            }}
                        >
                            Roster
                        </Typography>
                    </Box>
                </Button>
            </Stack>
            <Syllabus 
                tab={tab}
                title={stTitle}
                description={descr}
                gradeComp={gradeComp}
                infos={infos}
                changeInfoSections={changeInfoSections}
                handleOpenAlert={handleOpenAlert}
            />
            <Tasks 
                tab={tab}
                upcoming={upcoming}
                past={past}
                weeklyTasks={stWeeklyTasks}
                changeWeeklyTasks={changeWeeklyTasks}
                handleOpenAlert={handleOpenAlert}
            />
            <Roster
                tab={tab}
            />
        </Stack>
    )
}

export default MainWidget;
