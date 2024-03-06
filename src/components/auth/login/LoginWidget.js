"use client"
import LoadingBackDrop from "@/components/loading/LoadingBackDrop";
import LoginForm from "./LoginForm";
import { Box, Stack, Button, Divider, Typography, Tooltip } from "@mui/material"
import { Teko } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const LoginWidget = () => {

    const [loading, setLoading] = useState(false);
    const triggerLoading = () => {
        setLoading(true);
    }
    const closeLoading = () => {
        setLoading(false);
    }

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
                my: {
                    fold: 1,
                    mobile: 1,
                    tablet: 8,
                    desktop: 8,
                },
            }}
        >
            <LoadingBackDrop loading={loading} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Tooltip title="Icon By Icon8" arrow placement="right">
                    <Image 
                        src="/images/school.png"
                        height={100}
                        width={100}
                        alt="Picture of academic building"
                    />
                </Tooltip>
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
            <LoginForm
                triggerLoading={triggerLoading}
                closeLoading={closeLoading}
            />
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
                            "&:hover": {
                                textDecoration: 'underline',
                            }
                        }}
                        variant="caption"
                    >
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
                    <Button 
                        onClick={triggerLoading}
                        variant="text"
                        sx={{
                            bgcolor: 'primary.light',
                            px: 3,
                        }}
                    >
                        <Typography 
                            sx={{
                                color: 'primary.main',
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
