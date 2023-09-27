import { Box, Typography } from "@mui/material"

const NewCoursePage = ({ params }) => {
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
                For Professors Only
            </Typography>
            <Typography
                variant='h6'
            >
                Create a New Course for {username} who is a {role}
            </Typography>
        </Box>
    )
}

export default NewCoursePage;
