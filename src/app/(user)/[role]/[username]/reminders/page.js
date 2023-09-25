import { Box, Typography } from "@mui/material"

const RemindersPage = ({ params }) => {
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
                {username}`s Reminders Page. You are a {role}
            </Typography>
        </Box>
    )
}

export default RemindersPage;
