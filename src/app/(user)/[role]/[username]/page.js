import { Box, Typography } from "@mui/material"

const DashboardPage = ({ params }) => {
    let { role, username } = params;
    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                Welcome {username}, you are a {role} 
            </Typography>
        </Box>
    )
}

export default DashboardPage;
