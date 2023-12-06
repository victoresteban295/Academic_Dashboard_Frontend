import Footer from "@/components/Footer";
import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
    return(
        <html>
            <body>
                <Box
                    id="page"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                    }}
                >
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
                                404
                            </Typography>
                            <Typography
                                variant='h5'
                                align='center'
                                sx={{
                                    fontWeight: '700'
                                }}
                            >
                                Not Found
                            </Typography>
                            <Typography
                                variant='body1'
                                align='center'
                            >
                                The page you requested could not be found.
                            </Typography>
                            <Link
                                href={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: '#000',
                                }}
                            >
                                <Button
                                    variant='contained'
                                    startIcon={<ArrowBack />}
                                >
                                    <Typography 
                                        sx={{
                                            color: '#000',
                                            fontWeight: '700',
                                        }}
                                        variant="button">
                                        Go Back
                                    </Typography>
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                    <Footer />
                </Box>
            </body>
        </html>
    )
}

export default NotFound;
