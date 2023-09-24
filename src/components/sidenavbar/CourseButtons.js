import { Stack } from "@mui/material";
import CourseButton from "./CourseButton";

const CourseButtons = ({ username, role }) => {
    return (
        <Stack
            direction="column"
            spacing = {0.25}
            alignItems='flex-start'
        >
            <CourseButton 
                username={username}
                role={role}
                course={"CS 247"}
                active={false}
            />
            <CourseButton 
                username={username}
                role={role}
                course={"Math 345"}
                active={false}
            />
            <CourseButton 
                username={username}
                role={role}
                course={"Math 230"}
                active={false}
            />
            <CourseButton 
                username={username}
                role={role}
                course={"CHEM 121"}
                active={false}
            />
        </Stack>
    )
}

export default CourseButtons;
