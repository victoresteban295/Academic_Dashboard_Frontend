"use client"
import * as React from 'react';
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { Controller } from 'react-hook-form';

const ProfessorForm = ({
    register,
    errors,
    control,
    handleAcademicRole,
    handleAppointedYear,
    handleDepartment,
    academicRoleField,
    appointedYearField,
    deptField,
    academicRole,
    apptYear,
    department,
    officeBuilding,
    officeRoom,
    depts
}) => {
    const academicRoles = ['Professor', 'Assistant Professor', 'Visiting Instructor', 'Visiting Assistant Instructor', 'Visiting Assistant Professor', 'Chair', 'Director', 'Other'];
    const defaultAcademicRole = (role) => {
        if(role != '') {
            handleAcademicRole('');
            academicRoleField.onChange(role);
        }
        return role;
    }
    const defaultDept = (dept) => {
        if(dept != '') {
            handleDepartment('');
            deptField.onChange(dept);
        }
        return dept;
    }

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
    const defaultAppointedYear = (year) => {
        if(year != '') {
            handleAppointedYear('');
            appointedYearField.onChange(year);
        }
        return year;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 2,
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
                        Professor Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    useFlexGap
                >
                    <Box sx={{ flexGrow: 2}}>
                        <FormControl fullWidth >
                            <Controller
                                name="academicRole"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.academicRole}
                                            value={value}
                                            onChange={onChange}
                                            defaultValue={defaultAcademicRole(academicRole)}
                                            label='Academic Year'
                                            helperText={errors.academicRole?.message}
                                        >
                                        {academicRoles.map((role) => {
                                            return(
                                                <MenuItem key={role} value={role}>{role}</MenuItem>
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
                                name="appointedYear"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.appointedYear}
                                            value={value}
                                            onChange={onChange}
                                            defaultValue={defaultAppointedYear(apptYear)}
                                            label='Appointed Year'
                                            helperText={errors.appointedYear?.message}
                                        >
                                        {years.map((year) => {
                                            return(
                                                <MenuItem key={year} value={year}>{year}</MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                </Stack>
                <Box sx={{ flexGrow: 1}}>
                    <FormControl fullWidth >
                        <Controller 
                            name="department"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.department}
                                        value={value}
                                        onChange={onChange}
                                        defaultValue={defaultDept(department)}
                                        label='Department'
                                        helperText={errors.department?.message}
                                    >
                                    {depts.map((dept) => {
                                        return(
                                            <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                                        );
                                    })}
                                    </TextField>
                                )
                            }}
                        />
                    </FormControl>
                </Box>
                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    useFlexGap
                >
                    <TextField 
                        sx={{flexGrow: 1}} 
                        id="officeBuilding"    
                        label="Office Building" 
                        variant="outlined" 
                        defaultValue={officeBuilding} 
                        error={!!errors.officeBuilding}
                        helperText={errors.officeBuilding?.message}
                        {...register('officeBuilding')}
                    />
                    <TextField 
                        sx={{flexGrow: 1}} 
                        id="room_number" 
                        label="Room #" 
                        variant="outlined" 
                        defaultValue={officeRoom} 
                        error={!!errors.officeRoom}
                        helperText={errors.officeRoom?.message}
                        {...register('officeRoom')}
                    />
                </Stack>
            </Stack>
        </Box>
    )
};

export default ProfessorForm;
