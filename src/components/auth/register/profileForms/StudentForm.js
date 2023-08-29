import { Box, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const StudentForm = ({
    register, 
    errors,
    control,
    handleAcademicYear,
    academicYearField,
    academicYear,
    major,
    minor,
    concentration,
    majors,
    minors
}) => {
    const academicYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
    const defaultAcademicYear = (year) => {
        if(year != '') {
            handleAcademicYear('');
            academicYearField.onChange(year);
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
                        Student Information
                    </Typography>
                    <Divider />
                </Stack>
                <Box sx={{ flexGrow: 1}}>
                    <FormControl fullWidth >
                        <Controller 
                            name="academicYear"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.academicYear}
                                        value={value}
                                        onChange={onChange}
                                        defaultValue={defaultAcademicYear(academicYear)}
                                        label='Academic Year'
                                        helperText={errors.academicYear?.message}
                                    >
                                    {academicYears.map((year) => {
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
                <TextField 
                    id="major"
                    label="Major" 
                    variant="outlined" 
                    defaultValue={major} 
                    error={!!errors.major}
                    helperText={errors.major?.message}
                    {...register('major')}
                />
                <TextField  
                    id="minor"
                    label="Minor" 
                    variant="outlined" 
                    defaultValue={minor} 
                    error={!!errors.minor}
                    helperText={errors.minor?.message}
                    {...register('minor')}
                />
                <TextField 
                    id="concentration"
                    label="Concentration" 
                    variant="outlined" 
                    defaultValue={concentration} 
                    error={!!errors.concentration}
                    helperText={errors.concentration?.message}
                    {...register('concentration')}
                />
            </Stack>
        </Box>
    )
};

export default StudentForm;
