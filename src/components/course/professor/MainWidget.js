import { Button, Stack, Typography } from "@mui/material";
import CourseTitleSection from "./MainWidget/CourseTitleSection";
import { useState } from "react";
import Upcoming from "./MainWidget/Upcoming/Upcoming";
import Syllabus from "./MainWidget/Syllabus/Syllabus";
import Past from "./MainWidget/Past/Past";
import dayjs from "dayjs";
import { seperateWeeklyTasks } from "@/lib/utils/courses/frontend/modifyTasks";

const MainWidget = ({ 
    instructor, 
    office,
    phone,
    email,
    schedules,
    title,
    school,
    description,
    infoSections,
    weeklyTasks,
    changeSchedules,
    handleOpenAlert
}) => {

    /* Tab Being Viewed */
    const [tab, setTab] = useState("syllabus");
    const month = Number(dayjs().format('M'));
    let academicSemester = "";
    if(month <= 5) {
        academicSemester = "Spring ";
    } else if(month <= 7) {
        academicSemester = "Summer ";
    } else {
        academicSemester = "Fall ";
    }
    const semester = academicSemester + dayjs().year().toString();

    /* State Value */
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
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'block',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'none',
                            }
                        }}
                    >
                        Syllabus
                    </Typography>
                    <Typography
                        variant="button"
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
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("upcoming")
                    }} 
                    sx={{
                        color: tab === "upcoming" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "upcoming" ? '4px solid' : '0px solid',
                        borderColor: tab === "upcoming" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'block',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'none',
                            }
                        }}
                    >
                        Upcoming
                    </Typography>
                    <Typography
                        variant="button"
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
                        Upcoming
                    </Typography>
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("past")
                    }} 
                    sx={{
                        color: tab === "past" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "past" ? '4px solid' : '0px solid',
                        borderColor: tab === "past" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'block',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'none',
                            }
                        }}
                    >
                        Past
                    </Typography>
                    <Typography
                        variant="button"
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
                        Past
                    </Typography>
                </Button>
            </Stack>
            <Syllabus 
                tab={tab}
                title={stTitle}
                school={school}
                semester={semester}
                description={description}
                infos={infos}
                changeInfoSections={changeInfoSections}
                handleOpenAlert={handleOpenAlert}
            />
            <Upcoming
                tab={tab}
                upcoming={upcoming}
                weeklyTasks={stWeeklyTasks}
                changeWeeklyTasks={changeWeeklyTasks}
                handleOpenAlert={handleOpenAlert}
            />
            <Past
                tab={tab}
                past={past}
                weeklyTasks={stWeeklyTasks}
                changeWeeklyTasks={changeWeeklyTasks}
                handleOpenAlert={handleOpenAlert}
            />
        </Stack>
    )
}

export default MainWidget;
