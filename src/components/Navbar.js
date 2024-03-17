import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Teko } from "next/font/google"
import StudentAvatar from "./navbar/StudentAvatar";
import ProfessorAvatar from "./navbar/ProfessorAvatar";
import MobileMenu from "./navbar/MobileMenu";

const teko700 = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Navbar = ({username, firstname, lastname, role}) => {

    const userInitials = firstname.substring(0,1) + lastname.substring(0,1);
    let isStudent;
    let courses;
    if(role === "professor") {
        isStudent = false;
        courses = [
            {
                course: "Math 230",
                dept: "math",
                num: "230",
            }, 
            {
                course: "Math 245",
                dept: "math",
                num: "245",
            } 
        ]
    } else {
        isStudent = true;
        courses = [
            {
                course: "Math 230",
                dept: "math",
                num: "230",
            }, 
            {
                course: "Math 245",
                dept: "math",
                num: "245",
            },
            {
                course: "CS 215",
                dept: "cs",
                num: "215",
            }, 
            {
                course: "CS 310",
                dept: "cs",
                num: "310",
            }, 
        ]
    }

    return (
        <Box sx={{
                position:'fixed', 
                top:'0px', 
                zIndex:'999',
                py: 0,
            }}
        >
            <AppBar position='fixed'>
                <Toolbar disableGutters>
                        <Box
                            sx={{
                                display: {
                                    fold: 'flex',
                                    mobile: 'flex',
                                    tablet: 'none',
                                    desktop: 'none',
                                },
                                postion: 'static',
                                flexGrow: 1,
                            }}
                        >
                            <MobileMenu 
                                username={username}
                                role={role}
                                courses={courses}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                postion: 'static',
                                flexGrow: 1,
                                mx: {
                                    fold: 0,
                                    mobile: 0,
                                    tablet: 3,
                                    desktop: 3,
                                },
                            }}
                        >
                            <Typography 
                                variant='h5'
                                sx={{
                                    mx: {
                                        fold: 0,
                                        mobile: 0,
                                        tablet: 1,
                                        desktop: 1,
                                    },
                                    display: {
                                        fold: 'none',
                                        mobile: 'block',
                                        tablet: 'block',
                                        desktop: 'block',
                                    },
                                    fontFamily: teko700.style.fontFamily
                                }}
                            >
                                Academic Dashboard
                            </Typography> 
                        </Box>
                        {
                            isStudent ? (
                                <StudentAvatar 
                                    studentInitials={userInitials.toUpperCase()}
                                    username={username}
                                    role={role}
                                />
                            ) : (
                                <ProfessorAvatar 
                                    professorInitials={userInitials.toUpperCase()}
                                    username={username}
                                    role={role}
                                />)
                        }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
