"use client"
import * as React from 'react';
import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const AcademicForm = (props) => {

    const { register, formState, getValues } = useForm();
    const { error } = formState;

    const handleNextForm = () => {
        props.handleAcademicFormData(
            getValues("schoolName"),
            getValues("schoolId")
        ); 
        props.handleNext();
    }

    const handleChange = (event) => {
        props.selectProfile(event.target.value);
    };


    return(
        <React.Fragment> 
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
                    {/*     <FormControl fullWidth> */}
                    {/*         <InputLabel id="select-profile">Profile Type</InputLabel> */}
                    {/*         <Select */}
                    {/*             labelId="select-profile" */}
                    {/*             id="select" */}
                    {/*             value={props.profileType} */}
                    {/*             label="Profile Type" */}
                    {/*             onChange={handleChange} */}
                    {/*         > */}
                    {/*             <MenuItem value={"STUDENT"}>Student</MenuItem> */}
                    {/*             <MenuItem value={"PROFESSOR"}>Professor</MenuItem> */}
                    {/*         </Select> */}
                    {/*     </FormControl> */}
                    {/* </Box> */}
                    <TextField
                        id="academic_institution" 
                        label="Academic Institution" 
                        variant="outlined" 
                        defaultValue={props.institution}
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
                <Button type="button" variant="contained" onClick={handleNextForm}> 
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
        </React.Fragment>
    )
}

export default AcademicForm;
