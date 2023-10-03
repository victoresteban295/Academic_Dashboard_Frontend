import { Box, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller } from 'react-hook-form';

const ProfessorInputFields = ({ register, errors, control, depts }) => {

    const academicRoles = ['Professor', 'Assistant Professor', 'Visiting Instructor', 'Visiting Assistant Instructor', 'Visiting Assistant Professor', 'Chair', 'Director', 'Other'];
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
                                            label='Academic Role'
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
                        error={!!errors.officeBuilding}
                        helperText={errors.officeBuilding?.message}
                        {...register('officeBuilding')}
                    />
                    <TextField 
                        sx={{flexGrow: 1}} 
                        id="room_number" 
                        label="Room #" 
                        variant="outlined" 
                        error={!!errors.officeRoom}
                        helperText={errors.officeRoom?.message}
                        {...register('officeRoom')}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProfessorInputFields;
