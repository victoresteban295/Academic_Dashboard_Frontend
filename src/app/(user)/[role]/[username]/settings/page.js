import { Box, Typography } from "@mui/material"

const SettingPage = ({ params }) => {
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
                {username} {role} Setting Page. 
            </Typography>
        </Box>
    )
}

export default SettingPage;
