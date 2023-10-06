import LoginForm from "./LoginForm";
import { Box, Stack, Button, Divider, Typography } from "@mui/material"
import { Teko } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const LoginWidget = () => {
    return (
        <Stack
            id='login-widget'
            spacing={1}
            sx ={{
                p: 4,
                bgcolor: 'widget.background',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                maxWidth: '100%',
                my: 8,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image 
                    src="/images/school.png"
                    height={100}
                    width={100}
                    alt="Picture of academic building"
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h4'
                    align='center'
                    sx={{
                        fontFamily: teko.style.fontFamily,
                    }}
                >
                    Academic Dashboard
                </Typography>
            </Box>
            <LoginForm />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button variant="text">
                    <Typography 
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                        variant="caption">
                        Forgot Password?
                    </Typography>
                </Button>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link href="/register" style={{textDecoration: 'none'}} >
                    <Button variant="contained">
                        <Typography 
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                            variant="button">
                            Create New Account
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Stack>
    )
}

export default LoginWidget;
