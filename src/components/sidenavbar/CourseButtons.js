import { Stack } from "@mui/material";
import CourseButton from "./CourseButton";

const CourseButtons = ({ username, role, courses }) => {
    return (
        <Stack
            direction="column"
            spacing = {0.25}
            alignItems='flex-start'
            sx={{
                width: '100%',
            }}
        >
            {courses.map(crs => {
                const { course, dept, num } = crs;

                return (
                    <CourseButton 
                        key={course}
                        username={username}
                        role={role}
                        course={course}
                        dept={dept}
                        num={num}
                    />
                )
            })}
        </Stack>
    )
}

export default CourseButtons;
