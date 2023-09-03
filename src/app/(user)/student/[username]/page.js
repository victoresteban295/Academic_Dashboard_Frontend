import { Box, Typography } from "@mui/material"

const StudDashboard = ({ params }) => {
    let { username } = params;
    return (
        <Box
            sx={{
                mx:2
            }}
        >
            <Typography
                variant='h6'
            >
                Welcome Student {username}
            </Typography>
        </Box>
    )
}

export default StudDashboard
