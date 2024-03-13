import { Divider, Stack } from "@mui/material";
import NavButtons from "./sidenavbar/NavButtons";
import CourseButtons from "./sidenavbar/CourseButtons";

const SideNavbar = ({ username, role, courses }) => {
    return (
        <Stack
            direction="column"
            divider={<Divider flexItem />}
            alignItems='center'
            spacing = {1}
            sx={{
                alignItems: 'flex-start',
                flexGrow: 1,
                width: '100%',
                position: 'sticky',
                top: '70px',
            }}
        >
            <NavButtons 
                username={username}
                role={role}
            />
            <CourseButtons 
                username={username}
                role={role}
                courses={courses}
            />

        </Stack>
    )
}

export default SideNavbar;
