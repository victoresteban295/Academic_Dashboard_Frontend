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
    if(role === "professor") {
        isStudent = false;
    } else {
        isStudent = true;
    }

    return (
        <Box sx={{position:'fixed', top:'0px', zIndex:'999',}}>
            <AppBar position='fixed'>
                <Toolbar disableGutters>
                        <Box
                            sx={{
                                display: {xs: 'flex', sm: 'none'},
                                postion: 'static',
                                flexGrow: 1,
                            }}
                        >
                            <MobileMenu 
                                username={username}
                                role={role}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                postion: 'static',
                                flexGrow: 1,
                                mx: {xs: 0, sm: 3},
                            }}
                        >
                            <Typography 
                                variant='h5'
                                sx={{
                                    mx: {xs: 0, sm: 1},
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
