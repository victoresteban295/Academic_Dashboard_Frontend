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
        <>
            <Stack
                id='professor-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='professor-information-section-title'
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
                        Professor Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    id='professor-information-input-fields'
                    className='form-section-input-fields'
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        id='academic-role-input-field-group'
                        className='input-field-group'
                        direction={{
                            fold: 'column',
                            mobile: 'column',
                            tablet: 'row',
                            desktop: 'row',
                        }}
                        spacing={2}
                        useFlexGap
                    >
                        <Box 
                            id='academic-role-input-field'
                            sx={{ flexGrow: 2}}
                        >
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
                                                    <MenuItem 
                                                        key={role} 
                                                        value={role}
                                                    >
                                                        {role}
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
                            id='appointed-year-input-field'
                            sx={{ flexGrow: 1}}
                        >
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
                                                    <MenuItem 
                                                        key={year} 
                                                        value={year}
                                                    >
                                                        {year}
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
                    <Box 
                        id='department-input-field'
                        sx={{ flexGrow: 1}}
                    >
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
                                                <MenuItem 
                                                    key={dept} 
                                                    value={dept}
                                                >
                                                    {dept}
                                                </MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Stack
                        id="office-input-field-group"
                        className="input-field-group"
                        direction={{
                            fold: 'column',
                            mobile: 'column',
                            tablet: 'row',
                            desktop: 'row',
                        }}
                        spacing={2}
                        useFlexGap
                    >
                        <TextField 
                            id="office-building-input-field"    
                            sx={{flexGrow: 1}} 
                            label="Office Building" 
                            variant="outlined" 
                            error={!!errors.officeBuilding}
                            helperText={errors.officeBuilding?.message}
                            {...register('officeBuilding')}
                        />
                        <TextField 
                            id="room-number-input-field" 
                            sx={{flexGrow: 1}} 
                            label="Room #" 
                            variant="outlined" 
                            error={!!errors.officeRoom}
                            helperText={errors.officeRoom?.message}
                            {...register('officeRoom')}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default ProfessorInputFields;
