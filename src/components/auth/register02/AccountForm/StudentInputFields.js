import { Box, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const StudentInputFields = ({ register, errors, control, majors, minors }) => {
    const academicYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

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
                <Box sx={{ flexGrow: 1}}>
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
                <Box sx={{ flexGrow: 1}}>
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
                    id="concentration"
                    label="Concentration" 
                    variant="outlined" 
                    error={!!errors.concentration}
                    helperText={errors.concentration?.message}
                    {...register('concentration')}
                />
            </Stack>
        </Box>
    )
}

export default StudentInputFields;
