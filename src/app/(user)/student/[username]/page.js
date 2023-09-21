import { Box, Typography } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

async function getData(username) {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:3000/api/user/profile?role=STUDENT&username=${username}`, {
        cache: 'no-cache',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
            'Cookie': cookieStore.toString() //For Token Validation in Middleware
        }
    });

    if(!res.ok) {
        notFound();
    }

    return res.json();
}


const StudDashboard = async ({ params }) => {
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
                Welcome {user.username}, you are a Student.
            </Typography>
        </Box>
    )
}

export default StudDashboard
