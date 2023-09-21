"use client"
import { Box, Button, Typography } from "@mui/material"

const ChecklistPage = () => {

    const newChecklist = async () => {
        const res = await fetch('http://localhost:3000/api/checklist/new', {
            method: "POST", 
            body: JSON.stringify({
               'title': 'Sept 20 | 9:43pm' 
            })
        });

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

export default ChecklistPage
