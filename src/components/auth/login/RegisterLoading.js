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
                my: {
                    fold: 1,
                    mobile: 1,
                    tablet: 8,
                    desktop: 8,
                },
                mx: 1,
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default LoginWidgetLoading;
