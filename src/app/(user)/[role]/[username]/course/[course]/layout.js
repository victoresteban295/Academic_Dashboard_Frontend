"use client"
import { Box, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CourseTitle from "@/components/course/professor/Layout/CourseTitle";
import CourseTabSelection from "@/components/course/professor/Layout/CourseTabSelection";
import { getLayoutData } from "@/lib/data/course/professor";
import RightWidget from "@/components/course/professor/RightWidget";
import { notFound } from "next/navigation";

const getData = (course) => {
    const data = getLayoutData(course);
    if(data.userFound) {
        return data;
    } else {
        notFound();
    }
}

const CourseLayout = ({ children, params }) => {

    /* Get Course Data */
    const { course } = params; 
    let crsData = getData(course);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                className="layout-page"
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* Main Content */}
                <Box
                    className="main-content-container"
                    sx={{
                        flexGrow: 1,
                        maxWidth: '750px',
                        p: 1,
                    }}
                >
                    <Stack
                        className="main-content"
                        spacing={2}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <CourseTitle
                            title={crsData.title}
                            description={crsData.description}
                            schedules={crsData.schedules}
                        />
                        <CourseTabSelection />
                        {children}
                    </Stack>
                </Box>

                {/* Right Content */}
                <Box
                    className="right-content-container"
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
                            width: '200px',
                            position: 'sticky',
                            top: '70px',
                        }}
                    >
                        <RightWidget
                            courseSchedules={crsData.schedules}
                        />
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    ) 
}

export default CourseLayout;
