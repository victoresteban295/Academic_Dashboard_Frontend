import ThemeRegistry from '@/theme/ThemeRegistry'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";
import { Box, Typography } from '@mui/material';
import SideNavbar from '@/components/SideNavbar';

const getData = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/profile/student/get/${username}`, {
        cache: 'no-store',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

const StudentLayout = async ({ children, params }) => {
    let { username } = params;
    const student = await getData(username);
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: 'mui'}}>
                    <Navbar 
                        username={student.username}
                        firstname={student.firstname}
                        lastname={student.lastname}
                        role="student"
                    />
                    <Box
                        id="page-container"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '500px'
                            
                        }}
                    >
                        <Box
                            id="sidenavbar-container"
                            sx={{
                                display: {xs: 'none', sm: 'flex'},
                                flexGrow: '1',
                                justifyContent: 'center',
                                maxWidth: '175px',
                                mt: 2,
                                mx: 1,
                            }}
                        >
                            <SideNavbar
                                username={student.username}
                                role="student"
                            />
                        </Box>
                        <Box
                            id="main-content-container"
                            sx={{
                                flexGrow: '10',
                                maxWidth: '1500px',
                                bgcolor: 'tan'
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    )
};

export default StudentLayout;
