import LoginWidget from "@/components/auth/login/LoginWidget"
import { Box } from "@mui/material"

export const metadata = {
    title: "Academic Dashboard: Login",
    themeColor: '#78a1bb'
}

const login = () => {
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
