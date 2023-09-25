import { Box, Typography } from "@mui/material"

const CalendarPage = ({ params }) => {
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
                {username}`s Calendar Page. You are a {role}
            </Typography>
        </Box>
    )
}

export default CalendarPage;
