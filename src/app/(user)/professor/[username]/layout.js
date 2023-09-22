import ThemeRegistry from '@/theme/ThemeRegistry'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";
import { Typography } from '@mui/material';

const getData = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/profile/professor/get/${username}`, {
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

const ProfessorLayout = async ({ children, params }) => {
    let { username } = params;
    const professor = await getData(username);
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: 'mui'}}>
                    <Navbar />
                    <Typography
                        variant='h6'
                    >
                        Welcome {professor.firstname} {professor.lastname}
                    </Typography>
                    {children}
                    <Footer />
                </ThemeRegistry>
            </body>
        </html>
    )
};

export default ProfessorLayout;
