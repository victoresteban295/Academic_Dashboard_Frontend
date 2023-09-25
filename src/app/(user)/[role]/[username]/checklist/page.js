import { Box, Typography } from "@mui/material"

const ChecklistPage = ({ params }) => {
    const { role, username } = params;
    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                {username}`s Checklist Page. You are a {role}
            </Typography>
        </Box>
    )
}

export default ChecklistPage;
