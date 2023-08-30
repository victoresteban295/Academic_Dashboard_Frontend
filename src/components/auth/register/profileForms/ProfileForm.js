"use client"
import * as React from 'react';
import { Alert, Box, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

const ProfileForm = ({
    handleBirthMonth,
    handleBirthDay,
    handleBirthYear,
    register, 
    errors, 
    control, 
    birthMonthField, 
    birthDayField, 
    birthYearField, 
    firstname,
    middlename,
    lastname,
    birthMonth,
    birthDay,
    birthYear,
    email,
    phone,
    username,
    password,
    repassword,
}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRePassword, setShowRePassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRePassword = () => setShowRePassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownRePassword = (event) => {
        event.preventDefault();
    };

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const generateDays = () => {
        let days = [];
        for(let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    }
    const days = generateDays();
    const generateYears = () => {
        let currentYear = new Date().getFullYear();
        let years = [];
        for(let i = 0; i < 100; i++) {
            years.push(currentYear);
            currentYear--;
        }
        return years;
    }
    const years = generateYears();

    const defaultBirthMonth = (month) => {
        if(month != '') {
            handleBirthMonth('');
            birthMonthField.onChange(month);
        }
        return month;
    }
    const defaultBirthDay = (day) => {
        if(day != '') {
            handleBirthDay('');
            birthDayField.onChange(day);
        }
        return day;
    }
    const defaultBirthYear = (year) => {
        if(year != '') {
            handleBirthYear('');
            birthYearField.onChange(year);
        }
        return year;
    }


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
                    <TextField 
                        id="firstname" 
                        label="First Name" 
                        variant="outlined" 
                        defaultValue={firstname} 
                        error={!!errors.firstname}
                        helperText={errors.firstname?.message}
                        {...register('firstname')}
                    />
                    <TextField 
                        id="middle_name" 
                        label="Middle Name" 
                        variant="outlined" 
                        defaultValue={middlename} 
                        error={!!errors.middlename}
                        helperText={errors.middlename?.message}
                        {...register('middlename')}
                    />
                    <TextField 
                        id="last_name" 
                        label="Last Name" 
                        variant="outlined" 
                        defaultValue={lastname}
                        error={!!errors.lastname}
                        helperText={errors.lastname?.message}
                        {...register('lastname')}
                    />
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
                        <Box sx={{ flexGrow: 3 }}>
                            <FormControl fullWidth >
                                <Controller 
                                    name="birthMonth"
                                    control={control}
                                    render={({field: { onChange, value}}) => {
                                        return (
                                            <TextField
                                                select
                                                error={!!errors.birthMonth}
                                                value={value}
                                                onChange={onChange}
                                                defaultValue={defaultBirthMonth(birthMonth)}
                                                label='Month'
                                                helperText={errors.birthMonth?.message}
                                            >
                                            {months.map((month) => {
                                                return(
                                                    <MenuItem key={month} value={month}>{month}</MenuItem>
                                                );
                                            })}
                                            </TextField>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ flexGrow: 1}}>
                            <FormControl fullWidth >
                                <Controller 
                                    name="birthDay"
                                    control={control}
                                    render={({field: { onChange, value}}) => {
                                        return (
                                            <TextField
                                                select
                                                error={!!errors.birthDay}
                                                value={value}
                                                onChange={onChange}
                                                defaultValue={defaultBirthDay(birthDay)}
                                                label='Day'
                                                helperText={errors.birthDay?.message}
                                            >
                                            {days.map((day) => {
                                                return(
                                                    <MenuItem key={day} value={day}>{day.toString()}</MenuItem>
                                                );
                                            })}
                                            </TextField>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ flexGrow: 2}}>
                            <FormControl fullWidth >
                                <Controller 
                                    name="birthYear"
                                    control={control}
                                    render={({field: { onChange, value}}) => {
                                        return (
                                            <TextField
                                                select
                                                error={!!errors.birthYear}
                                                value={value}
                                                onChange={onChange}
                                                defaultValue={defaultBirthYear(birthYear)}
                                                label='Year'
                                                helperText={errors.birthYear?.message}
                                            >
                                            {years.map((year) => {
                                                return(
                                                    <MenuItem key={year} value={year}>{year.toString()}</MenuItem>
                                                );
                                            })}
                                            </TextField>
                                        )
                                    }}
                                />
                            </FormControl>
                        </Box>
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
                <TextField 
                    id="user_email" 
                    label="Email" 
                    variant="outlined" 
                    defaultValue={email}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register('email')}
                />
                <TextField 
                    id="user_phone" 
                    label="Phone" 
                    variant="outlined" 
                    defaultValue={phone}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    {...register('phone')}
                />
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    defaultValue={username}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    {...register('username')}
                />
                <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.password} >
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="user-password"
                        type={showPassword ? 'text' : 'password'}
                        defaultValue={password}
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
                        {...register('password')}
                    />
                    <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.repassword}>
                    <InputLabel>Re-enter Password</InputLabel>
                    <OutlinedInput
                        id="reenter-password"
                        type={showRePassword ? 'text' : 'password'}
                        defaultValue={repassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowRePassword}
                                    onMouseDown={handleMouseDownRePassword}
                                    edge="end"
                                >
                                    {showRePassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Re-enter Password"
                        {...register('repassword')}
                    />
                    <FormHelperText>{errors.repassword?.message}</FormHelperText>
                </FormControl>
            </Stack>
        </Box>

   ) 
}

export default ProfileForm;
