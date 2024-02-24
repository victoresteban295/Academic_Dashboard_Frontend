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
                dept="cs"
                num="247"
            />
            <CourseButton 
                username={username}
                role={role}
                course={"Math 245"}
                dept="math"
                num="245"
            />
            <CourseButton 
                username={username}
                role={role}
                course={"Math 230"}
                dept="math"
                num="230"
            />
            <CourseButton 
                username={username}
                role={role}
                course={"CHEM 121"}
                dept="chem"
                num="121"
            />
        </Stack>
    )
}

export default CourseButtons;
