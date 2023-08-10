"use client"
import * as React from 'react';
import { Box, Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useController, useForm } from 'react-hook-form';

const AcademicForm = (props) => {

    const { register, formState, control, getValues, handleSubmit, setValue } = useForm();
    const { errors } = formState;
    const { field } = useController({ name: 'profileType', control })

    const handleNextForm = () => {
        props.handleAcademicFormData(
            getValues("profileType"),
            getValues("schoolName"),
            getValues("schoolId")
        ); 
        props.handleNext();
    }

    const handleSelectChange = (event) => {
        field.onChange(event.target.value);
        /* setValue("profileType", event.target.value); */
    };

    return(
        <form noValidate onSubmit={handleSubmit(handleNextForm)}> 
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 5,
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
                            Academic Institution
                        </Typography>
                        <Divider />
                    </Stack>
                    {/* <Box sx={{ minWidth: 120 }}> */}
                    {/*     <FormControl fullWidth error={!!errors.profileType}> */}
                    {/*         <InputLabel id="select-profile">Profile Type</InputLabel> */}
                    {/*         <Select */}
                    {/*             labelId="select-profile" */}
                    {/*             id="select" */}
                    {/*             value={field.value} */}
                    {/*             defaultValue={props.profileType} */}
                    {/*             label="Profile Type" */}
                    {/*             onChange={handleSelectChange} */}
                    {/*             {...register('profileType', { */}
                    {/*                 required: { */}
                    {/*                     value: true, */}
                    {/*                     message: "Profile Type is Required" */}
                    {/*                 } */}
                    {/*             })} */}
                    {/*         > */}
                    {/*             <MenuItem value={"STUDENT"}>Student</MenuItem> */}
                    {/*             <MenuItem value={"PROFESSOR"}>Professor</MenuItem> */}
                    {/*         </Select> */}
                    {/*         <FormHelperText>{errors.profileType?.message}</FormHelperText> */}
                    {/*     </FormControl> */}
                    {/* </Box> */}
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth error={!!errors.profileType}>
                            <TextField
                                select
                                label="Profile Type"
                                value={getValues("profileType")}
                                defaultValue={props.profileType}
                                error={!!errors.profileType}
                                helperText={errors.profileType?.message}
                                {...register('profileType', {
                                    required: {
                                        value: true,
                                        message: "Profile Type is Required"
                                    }
                        })}
                            >
                                <MenuItem value={"STUDENT"}>Student</MenuItem>
                                <MenuItem value={"PROFESSOR"}>Professor</MenuItem>
                            </TextField>
                        </FormControl>
                    </Box>
                    <TextField
                        id="academic_institution" 
                        label="Academic Institution" 
                        variant="outlined" 
                        defaultValue={props.institution}
                        error={!!errors.schoolName}
                        helperText={errors.schoolName?.message}
                        {...register('schoolName', {
                            required: {
                                value: true,
                                message: "Academic Institution is Required"
                            }
                        })}
                    />
                    <TextField 
                        id="identification_code" 
                        label="Identification Code" 
                        variant="outlined" 
                        defaultValue={props.idCode}
                        error={!!errors.schoolId}
                        helperText={errors.schoolId?.message}
                        {...register('schoolId', {
                            required: {
                                value: true,
                                message: "Identification Code is Required"
                            }
                        })}
                    />
                </Stack>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} /> 
                <Button 
                    type="submit" 
                    variant="contained" 
                    /* onClick={handleNextForm} */
                > 
                    <Typography
                        variant="button"
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Next
                    </Typography>
                </Button> 
            </Box> 
        </form>
    )
}

export default AcademicForm;
