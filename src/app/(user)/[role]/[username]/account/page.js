import { Box, Typography } from "@mui/material"

const UserAccountPage = ({ params }) => {
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
                {username} {role} Account Page. 
            </Typography>
        </Box>
    )
}

export default UserAccountPage;
