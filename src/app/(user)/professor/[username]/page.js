import { Box, Typography } from "@mui/material"

const ProfDashboard = ({ params }) => {
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
                Welcome Professor {username}
            </Typography>
        </Box>
    )
}

export default ProfDashboard
