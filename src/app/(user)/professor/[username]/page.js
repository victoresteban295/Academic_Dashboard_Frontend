import { Box, Typography } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

async function getData(username) {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/user/profile/PROFESSOR/${username}`, {
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


const ProfDashboard = async ({ params }) => {
    let { username } = params;
    const user = await getData(username);

    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                Welcome {user.username}, you are a Professor.
            </Typography>
        </Box>
    )
}

export default ProfDashboard
