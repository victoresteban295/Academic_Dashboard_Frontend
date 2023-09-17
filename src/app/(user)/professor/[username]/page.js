"use client"
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

const ProfDashboard = ({ params }) => {
    const [user, setUser] = useState([]);

    useEffect(async () => {
        let { username } = params;
        const res = await fetch(`http://localhost:3000/api/user/profile?role=PROFESSOR&username=${username}`, {
            cache: 'no-store',
            method: "GET",
        });

        if(!res.ok) {
            throw new Error("401 | Unauthorized Error")
        } else {
            const userInfo = await res.json();
            setUser(userInfo);
        } 
    }, []);

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
