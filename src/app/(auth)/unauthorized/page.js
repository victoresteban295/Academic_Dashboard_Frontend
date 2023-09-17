import { Warning } from "@mui/icons-material";

const { Box, Typography, Stack } = require("@mui/material")

const unauthorized = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 2,
                maxWidth: '100%',
            }}
        >
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2}}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'widget.background',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '10px',
                    p: 2,
                    m: 8,
                }}
            >
                <Warning 
                    fontSize="large"
                    sx={{
                        width: '75px',
                        height: '75px',
                    }}
                />
                <Stack
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    
                >
                    <Typography
                        variant='h3'
                    >
                        401 Unauthorized Error
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        You are not authorized to view this page
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default unauthorized;
