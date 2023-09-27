import { Box, Typography } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

const getData = async (role, username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/profile/${role}/get/${username}`, {
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

const DashboardPage = async ({ params }) => {
    const { role, username } = params;
    const user = await getData(role, username);

    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                Welcome {user.username}, you are a {role} 
            </Typography>
        </Box>
    )
}

export default DashboardPage;
