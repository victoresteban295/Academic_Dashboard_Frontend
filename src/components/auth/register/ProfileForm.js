"use client"

import * as React from 'react';
import { Box, Divider, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const ProfileForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [birthMonth, setBirthMonth] = React.useState('');
    const handleBirthMonth = (event) => {
        setBirthMonth(event.target.value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 5,
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    maxWidth: '500px',
                    flexGrow: 1,
                }}
            >
                <Stack
                    spacing={0}
                    sx={{
                        width: '100%',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: "700",
                        }}
                    >
                        Personal Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    useFlexGap
                >
                    <TextField id="first_name" label="First Name" variant="outlined" />
                    <TextField id="middle_name" label="Middle Name" variant="outlined" />
                    <TextField id="last_name" label="Last Name" variant="outlined" />
                </Stack>
                <Stack
                    spacing={2}
                >
                    <Typography
                        variant="body2"
                    >
                        Birthday
                    </Typography>
                    <Stack
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        useFlexGap
                    >
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="birth_month">Month</InputLabel>
                                <Select
                                    labelId="birth_month"
                                    id="select"
                                    value={birthMonth}
                                    label="Month"
                                    onChange={handleBirthMonth}
                                >
                                    {months.map((month) => {
                                        return(
                                            <MenuItem key={month} value={month}>{month}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField id="birth_day" label="Day (dd)" variant="outlined" />
                        <TextField id="birth_year" label="Year (yyyy)" variant="outlined" />
                    </Stack>
                </Stack>
                <Stack
                    spacing={0}
                    sx={{
                        width: '100%',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: "700",
                        }}
                    >
                        Account Information
                    </Typography>
                    <Divider />
                </Stack>
                <TextField id="user_email" label="Email" variant="outlined" />
                <TextField id="user_phone" label="Phone" variant="outlined" />
                <TextField id="username" label="Username" variant="outlined" />
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="user-password"
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
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel>Re-enter Password</InputLabel>
                    <OutlinedInput
                        id="reenter-password"
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
                        label="Re-enter Password"
                    />
                </FormControl>
            </Stack>
        </Box>

   ) 
}

export default ProfileForm;
