import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";
import { Box, Stack } from '@mui/material';
import SideNavbar from '@/components/SideNavbar';

//Fetch User's Profile Based on URL
const getData = async (role, username) => {
    //Extract JWT Access Token
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    //Backend Rest API: Fetch User's Profile 
    const res = await fetch(`http://localhost:8080/v1.0/profiles/${role}/${username}`, {
        cache: 'force-cache',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    //Wrong User Profile Information Provided
    if(res.status >= 400 && res.status <= 499) {
        notFound();
    //Backend Rest API Failed
    } else if(res.status >= 500 && res.status <= 599) {
        /* throw new Error("Failed To Load User Profile");  */
    //Successfully Loaded Profile
    } else {
        return res.json();
    }
}

const UserLayout = async ({ children, params }) => {
    let { role, username } = params;
    const user = await getData(role, username);
    let courses;
    if(role === 'student') {
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
    } else {
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
    }
    return (
        <html lang="en">
            <body>
                <Box
                    id="page"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                    }}
                >
                    <Navbar 
                        username={user.username}
                        firstname={user.firstname}
                        lastname={user.lastname}
                        role={role}
                    />
                    <Box
                        id="page-content-container"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            id="center-page-container"
                            sx={{
                                display: 'flex',
                                flexGrow: 1,
                                maxWidth: '1175px',
                                pt: '70px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Stack
                                id="maincontent-footer-container"
                                sx={{
                                    flexGrow: 1,
                                    width: '100%',
                                }} 
                            >
                                <Box
                                    id="main-content"
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <Box
                                        id="sidenavbar-container"
                                        sx={{
                                            display: {
                                                fold: 'none',
                                                mobile: 'none',
                                                tablet: 'flex',
                                                desktop: 'flex',
                                            },
                                            flexGrow: 1,
                                            justifyContent: 'center',
                                            maxWidth: '175px',
                                            mt: 2,
                                            mx: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '175px',
                                            }}
                                        >
                                            <SideNavbar
                                                username={user.username}
                                                role={role}
                                                courses={courses}
                                            />

                                        </Box>
                                    </Box>
                                    <Box
                                        id="main-content-container"
                                        sx={{
                                            maxWidth: '1000px',
                                            flexGrow: 1,
                                        }}
                                    >
                                        {children}
                                    </Box>
                                </Box>
                                <Footer />
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </body>
        </html>

    )
}

export default UserLayout;
