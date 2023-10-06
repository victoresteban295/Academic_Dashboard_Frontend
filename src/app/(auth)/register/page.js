import RegisterWidget from "@/components/auth/register/RegisterWidget";
import { Box } from "@mui/material";

const register = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
            }}
        >
            <Box
            sx={{
                maxWidth: '750px',
                px: 1,
                flexGrow: 1,
            }}
            >
                <RegisterWidget />
            </Box>
        </Box>
    )
}

export default register; 
