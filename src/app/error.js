'use client'
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";

const RootError = ({ error }) => {
    return (
        <html>
            <body>
                    <Box sx={{position:'sticky', top:'0px', zIndex:'999', height: '64px'}}>
                        <AppBar position='sticky'>
                            <Toolbar disableGutters>
                            </Toolbar>
                        </AppBar>
                    </Box>
                <Box
                    id="content-container"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        my: 8,
                    }}
                >
                    <Stack
                        spacing={1}
                        alignItems='center'
                        sx={{
                            bgcolor: 'widget.background',
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '10px',
                            p: 4,
                        }}
                    >
                        <Typography
                            variant='h1'
                            align='center'
                            sx={{
                                fontWeight: '700',
                            }}
                        >
                            500
                        </Typography>
                        <Typography
                            variant='h5'
                            align='center'
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            Internal Server Error
                        </Typography>
                        <Typography
                            variant='body1'
                            align='center'
                        >
                            {error.message}
                        </Typography>
                        <Typography
                            variant='body1'
                            align='center'
                        >
                            Something went wrong on our end - Please try again later.
                        </Typography>
                    </Stack>
                </Box>
            </body>
        </html>
    )
}

export default RootError;
