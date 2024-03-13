"use client"
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MainWidget from "./MainWidget";
import RightWidget from "./RightWidget";
import { getCourse } from "@/lib/data/course/student";
import dayjs from "dayjs";
import { notFound } from "next/navigation";

const handleGetCourse = (crs, todayDateTime) => {
    try {
        return getCourse(crs, todayDateTime); 
    } catch(error) {
        notFound();
    }
}

const StudCoursePage = ({ crs }) => {

    const todayDateTime = dayjs();
    const course = handleGetCourse(crs, todayDateTime); 

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                className="course-page"
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Box
                    className='main-content-container'
                    sx={{
                        flexGrow: 1,
                        maxWidth: '750px',
                        p: 1,
                    }}
                >
                    <MainWidget
                        instructor={course.instructor} 
                        office={course.office}
                        phone={course.phone}
                        email={course.email}
                        schedules={course.schedules}
                        title={course.title}
                        school={course.school}
                        description={course.description}
                        infoSections={course.infoSections}
                        weeklyTasks={course.weeklyTasks}
                    />
                </Box>
                <Box
                    className='rightside-menu-container'
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'none',
                            tablet: 'none',
                            desktop: 'block',
                        },
                        maxWidth: '250px',
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            position: 'sticky',
                            top: '70px',
                        }}
                    >
                        <RightWidget
                            instructor={course.instructor} 
                            office={course.office}
                            phone={course.phone}
                            email={course.email}
                            schedules={course.schedules}
                        />
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    )

}

export default StudCoursePage;
