import { useState } from "react";
import { Box, Divider, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

const AccountInputFields = ({ 
    register, 
    errors, 
    control }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRePassword = () => setShowConfirmPassword((show) => !show);

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


    return (
        <>
            <Stack
                id='personal-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='personal-information-section-title'
                    className='form-section-title'
                    spacing={0}
                    sx={{
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
                    id='personal-information-input-fields'
                    className='form-section-input-fields'
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        id='fullname-input-field-group'
                        className='input-field-group'
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        useFlexGap
                    >
                        <TextField 
                            id="firstname-input-field" 
                            label="First Name" 
                            variant="outlined" 
                            error={!!errors.firstname}
                            helperText={errors.firstname?.message}
                            {...register('firstname')}
                        />
                        <TextField 
                            id="middlename-input-field" 
                            label="Middle Name" 
                            variant="outlined" 
                            error={!!errors.middlename}
                            helperText={errors.middlename?.message}
                            {...register('middlename')}
                        />
                        <TextField 
                            id="lastname-input-field" 
                            label="Last Name" 
                            variant="outlined" 
                            error={!!errors.lastname}
                            helperText={errors.lastname?.message}
                            {...register('lastname')}
                        />
                    </Stack>
                    <Stack
                        id='birthday-input-field-group-container'
                        spacing={2}
                    >
                        <Typography
                            variant="body2"
                        >
                            Birthday
                        </Typography>
                        <Stack
                            id='birthday-input-field-group'
                            className='input-field-group'
                            direction={{xs: "column", sm: "row"}}
                            spacing={2}
                            useFlexGap
                        >
                            <Box 
                                id='birth-month-input-field'
                                sx={{ flexGrow: 3 }}
                            >
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
                                                    label='Month'
                                                    helperText={errors.birthMonth?.message}
                                                >
                                                {months.map((month) => {
                                                    return(
                                                        <MenuItem 
                                                            key={month} 
                                                            value={month}
                                                        >
                                                            {month}
                                                        </MenuItem>
                                                    );
                                                })}
                                                </TextField>
                                            )
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box 
                                id='birth-day-input-field'
                                sx={{ flexGrow: 1}}
                            >
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
                                                    label='Day'
                                                    helperText={errors.birthDay?.message}
                                                >
                                                {days.map((day) => {
                                                    return(
                                                        <MenuItem 
                                                            key={day} 
                                                            value={day}
                                                        >
                                                            {day.toString()}
                                                        </MenuItem>
                                                    );
                                                })}
                                                </TextField>
                                            )
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box 
                                id='birth-year-input-field'
                                sx={{ flexGrow: 2}}
                            >
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
                                                    label='Year'
                                                    helperText={errors.birthYear?.message}
                                                >
                                                {years.map((year) => {
                                                    return(
                                                        <MenuItem 
                                                            key={year} 
                                                            value={year}
                                                        >
                                                            {year.toString()}
                                                        </MenuItem>
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
                </Stack>
            </Stack>
            <Stack
                id='account-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='account-information-section-title'
                    className='form-section-title'
                    spacing={0}
                    sx={{
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
                <Stack
                    id='account-information-input-fields'
                    className='form-section-input-fields'
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <TextField 
                        id="email-input-field" 
                        label="Email" 
                        variant="outlined" 
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...register('email')}
                    />
                    <TextField 
                        id="phone-input-field" 
                        label="Phone" 
                        variant="outlined" 
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        {...register('phone')}
                    />
                    <TextField 
                        id="username-input-field" 
                        label="Username" 
                        variant="outlined" 
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        {...register('username')}
                    />
                    <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.password} >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            id="password-input-field"
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
                            {...register('password')}
                        />
                        <FormHelperText>{errors.password?.message}</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.confirmPassword}>
                        <InputLabel>Re-enter Password</InputLabel>
                        <OutlinedInput
                            id="confirm-password-input-field"
                            type={showConfirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowRePassword}
                                        onMouseDown={handleMouseDownRePassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Re-enter Password"
                            {...register('confirmPassword')}
                        />
                        <FormHelperText>{errors.confirmPassword?.message}</FormHelperText>
                    </FormControl>
                </Stack>
            </Stack>
        </>
    ) 
}

export default AccountInputFields;
