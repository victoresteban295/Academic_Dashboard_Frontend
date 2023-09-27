"use client"
import * as React from 'react';
import { Box, Stack, Button, Divider, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText, Alert } from "@mui/material"
import { Teko } from "next/font/google"
import Image from "next/image";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const LoginWidget = () => {

    const [alert, setAlert] = React.useState(false);
    let displayAlert;
    if(alert) {
        displayAlert = {}
    } else {
        displayAlert = {
            display: 'none',
        }
    }

    const searchParams = useSearchParams();
    const [success, setSuccess] = React.useState(searchParams.get('success') === 'true');
    let displaySuccess;
    if(success) {
        displaySuccess = {}
    } else {
        displaySuccess = {
            display: 'none',
        }
    }

    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const router = useRouter();
    const handleLogin = async (data) => {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username, 
                password: data.password 
            })
        });

        if(res.ok) {
            const body = await res.json(); //Get User's role
            setAlert(false);
            router.push(`/${body.role}/${data.username}`);
        } else {
            setSuccess(false);
            setAlert(true);
        }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form noValidate onSubmit={handleSubmit(handleLogin)}>
            <Stack 
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
                <Alert
                    severity="success"
                    sx={{
                        width: '100%',
                        ...displaySuccess,
                    }} 
                > 
                    Account Successfully Created
                </Alert>
                <Alert
                    severity="error"
                    sx={{
                        width: '100%',
                        ...displayAlert,
                    }} 
                > 
                    Wrong Username/Password 
                </Alert>
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is Required"
                        }
                    })} 
                />
                <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.password} >
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: "Password is Required"
                            }
                        })}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button type='submit' variant="contained">
                        <Typography 
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                            variant="button">
                            Login
                        </Typography>
                    </Button>
                </Box>
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
        </form>
    )
};

export default LoginWidget;
