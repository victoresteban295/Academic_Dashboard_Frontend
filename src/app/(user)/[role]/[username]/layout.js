import ThemeRegistry from '@/theme/ThemeRegistry'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";
import { Box } from '@mui/material';
import SideNavbar from '@/components/SideNavbar';

const getData = async (role, username) => {

    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/profile/${role}/get/${username}`, {
        cache: 'force-cache',
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

const UserLayout = async ({ children, params }) => {
    let { role, username } = params;
    const user = await getData(role, username);
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: 'mui'}}>
                    <Navbar 
                        username={user.username}
                        firstname={user.firstname}
                        lastname={user.lastname}
                        role={role}
                    />
                    <Box
                        id="page-container"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
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
                                username={user.username}
                                role={role}
                            />
                        </Box>
                        <Box
                            id="main-content-container"
                            sx={{
                                flexGrow: '10',
                                maxWidth: '1000px',
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
}

export default UserLayout;
