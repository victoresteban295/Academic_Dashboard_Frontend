import { Box, CircularProgress } from "@mui/material";

const LoginWidgetLoading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '750px',
                height: '450px', 
                flexGrow: 1,
                bgcolor: 'widget.background',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                my: {xs: 1, sm: 8},
                mx: 1,
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default LoginWidgetLoading;
