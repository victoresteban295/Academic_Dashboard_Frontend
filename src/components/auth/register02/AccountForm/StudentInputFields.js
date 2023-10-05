import { Box, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const StudentInputFields = ({ register, errors, control, majors, minors }) => {
    const academicYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

    return (
        <>
            <Stack
                id='student-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='student-information-section-title'
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
                        Student Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    id='student-information-input-fields'
                    className='form-section-input-fields'
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Box 
                        id='academic-year-input-field'
                        sx={{ flexGrow: 1}}
                    >
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
                    <Box 
                        id='major-input-field'
                        sx={{ flexGrow: 1}}
                    >
                        <FormControl fullWidth >
                            <Controller 
                                name="major"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.major}
                                            value={value}
                                            onChange={onChange}
                                            label='Major'
                                            helperText={errors.major?.message}
                                        >
                                        {majors.map((major) => {
                                            return(
                                                <MenuItem key={major} value={major}>{major}</MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box 
                        id='minor-input-field'
                        sx={{ flexGrow: 1}}
                    >
                        <FormControl fullWidth >
                            <Controller 
                                name="minor"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.minor}
                                            value={value}
                                            onChange={onChange}
                                            label='Minor'
                                            helperText={errors.minor?.message}
                                        >
                                        {minors.map((minor) => {
                                            return(
                                                <MenuItem key={minor} value={minor}>{minor}</MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                    <TextField 
                        id="concentration-input-field"
                        label="Concentration" 
                        variant="outlined" 
                        error={!!errors.concentration}
                        helperText={errors.concentration?.message}
                        {...register('concentration')}
                    />
                </Stack>
            </Stack>
        </>
    )
}

export default StudentInputFields;
