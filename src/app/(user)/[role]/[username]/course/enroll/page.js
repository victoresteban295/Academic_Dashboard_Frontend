import { Box, Typography } from "@mui/material"

const EnrollCoursePage = ({ params }) => {
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
                For Student Only
            </Typography>
            <Typography
                variant='h6'
            >
                Enroll to a New Course for {username} who is a {role}
            </Typography>
        </Box>
    )
}

export default EnrollCoursePage;
