import { Grow, Stack } from "@mui/material";
import CourseStats from "./CourseStats";
import StudentRoster from "./StudentRoster";

const Roster = ({
    tab
}) => {

    return (
        <>
            {tab === "roster" && (
                <Grow in={true}>
                    <Stack
                        spacing={2}
                    >
                        <CourseStats 
                        />
                        <StudentRoster 
                        />
                    </Stack>
                </Grow>
            )}
        </>
        
    )
}

export default Roster;
