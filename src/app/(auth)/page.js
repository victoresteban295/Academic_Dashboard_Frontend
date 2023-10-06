import LoginWidgetLoading from "@/components/auth/LoginWidgetLoading"
import LoginWidget from "@/components/auth/login/LoginWidget"
import { Box } from "@mui/material"
import { Suspense } from "react"

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
            <Suspense fallback={<LoginWidgetLoading />}>
                <LoginWidget />
            </Suspense>
        </Box>
    )
}

export default login
