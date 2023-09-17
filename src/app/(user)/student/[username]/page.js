"use client"
import { Box, Typography } from "@mui/material"
import { notFound } from "next/navigation";

const loadUser = async (username) => {
    const res = await fetch(`http://localhost:3000/api/user/profile?role=STUDENT&username=${username}`, {
        cache: 'no-store',
        method: "GET",
    });

    if(!res.ok) {
        notFound();
    } else {
        const userDetails = await res.json();
        return userDetails;
    } 

}

const StudDashboard = ({ params }) => {

    let { username } = params;
    const user = loadUser(username);

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
