"use client"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

const StudentChecklistPage = () => {
    const router = useRouter();

    const newChecklist = async () => {
        const res = await fetch('http://localhost:3000/api/checklist/new', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               'title': 'Sept 21 | 9:27pm' 
            })
        });

        if(!res.ok) {
            router.push('/login');
        }
        return res;

    }

    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                Checklist Page
            </Typography>
            <Button
                onClick={newChecklist}
            >
                <Typography
                    variant='button'
                >
                    Create Checklist
                </Typography>
            </Button>
        </Box>
    )
}

export default StudentChecklistPage
