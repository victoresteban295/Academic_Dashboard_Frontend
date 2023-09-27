import LoginWidget from "@/components/auth/LoginWidget"
import { Box } from "@mui/material"

const login = () => {
    console.log("In the Login Page");
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 2,
                maxWidth: '100%',
            }}
        >
            <LoginWidget />
        </Box>
    )
}

export default login
