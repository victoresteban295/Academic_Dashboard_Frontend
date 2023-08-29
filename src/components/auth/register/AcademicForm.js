"use client"
import * as React from 'react';
import { Box, Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Controller, useController, useForm } from 'react-hook-form';

const AcademicForm = (props) => {

    const { register, formState, control, getValues, handleSubmit } = useForm();
    const { errors } = formState;
    const { field } = useController({ name: 'profileType', control })

    const handleNextForm = async () => {
        const res = await fetch('http://localhost:3000/api/verify', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profile: getValues("profileType"), 
                codeId: getValues("schoolId")
            })
        });

        if(res.ok) {
            const data = await res.json();
            props.setStateMajors(data.majors);
            props.setStateMinors(data.minors);
            props.handleAcademicFormData(
                getValues("profileType"),
                getValues("schoolName"),
                getValues("schoolId")
            ); 
            props.handleNext();
        } else {
            alert("Invalid Identification Code");
        }

    }

    const defaultValue = (profileType) => {
        if(profileType != '') {
            /* If user decides to select a new value, setting profileType back to ''
             * prevent infinite re-render */
            props.handleProfileType('');
            field.onChange(profileType);
        }
        return profileType;
    }

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
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth >
                            <Controller 
                                name="profileType"
                                control={control}
                                rules={{required: 'Profile Type is Required'}}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.profileType}
                                            value={value}
                                            onChange={onChange}
                                            defaultValue={defaultValue(props.profileType)}
                                            label='Profile Type'
                                            helperText={errors.profileType?.message}
                                        >
                                            <MenuItem value={"STUDENT"}>Student</MenuItem>
                                            <MenuItem value={"PROFESSOR"}>Professor</MenuItem>
                                        </TextField>
                                    )
                                }}
                            />
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
