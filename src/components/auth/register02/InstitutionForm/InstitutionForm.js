import { validateInstitution } from "@/lib/actions/auth-actions";
import { InstitutionFormSchema } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const InstitutionForm = ({ 
    profileType,
    schoolName,
    schoolId,
    setProfileType,
    setSchoolName,
    setSchoolId,
    setMajors, 
    setMinors, 
    setDepts, 
    handleNext }) => {

    /* React Hook Form */
    const { register, formState, control, handleSubmit } = useForm({
        mode: 'onBlur', //Validated Input Fields onBlur Event
        defaultValues: {
            profileType: profileType,
            schoolName: schoolName,
            schoolId: schoolId
        },
        resolver: zodResolver(InstitutionFormSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Sets Alert for Failed Validation */
    const [alert, setAlert] = useState(false);
    let displayAlert
    if(alert) {
        displayAlert = {}
    } else {
        displayAlert = {
            display: 'none',
        }
    }

    const handleNextForm = async (data) => {
        //Server Action
        const { success, majors, minors, depts } = await validateInstitution(data);
        if(success) {
            setAlert(false);

            //Options Passed to Next Form
            setMajors(majors); 
            setMinors(minors);
            setDepts(depts);

            //Set State Value
            setProfileType(data.profileType);
            setSchoolName(data.schoolName);
            setSchoolId(data.schoolId);

            //Next Step in Stepper
            handleNext(); 
        } else {
            //User Provided Wrong Information 
            setAlert(true);
        }
    }

    return (
        <Box
            id='academic-institution-form'
            className='form'
            sx={{
                flexGrow: 1,
                maxWidth: '500px',
            }}
        >
            <form noValidate action={handleSubmit(handleNextForm)} > 
                <Stack
                    id='academic-institution-section'
                    className='form-section'
                    spacing={2}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        id='academic-institution-section-title'
                        className='form-section-title'
                        spacing={0}
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Alert
                            severity='error'
                            sx={{
                                ...displayAlert,
                            }}
                        >
                            Invalid Identification Code - make sure to select the correct profile type
                        </Alert> 
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
                    <Stack
                        id='academic-institution-input-fields'
                        className='form-section-input-fields'
                        spacing={2}
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Box id='profile-type' sx={{ minWidth: 120 }}>
                            <FormControl fullWidth >
                                <Controller 
                                    name="profileType"
                                    control={control}
                                    render={({field: { onChange, value}}) => {
                                        return (
                                            <TextField
                                                select
                                                error={!!errors.profileType}
                                                value={value}
                                                onChange={onChange}
                                                defaultValue={profileType}
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
                            id="academic-institution" 
                            label="Academic Institution" 
                            variant="outlined" 
                            defaultValue={schoolName}
                            error={!!errors.schoolName}
                            helperText={errors.schoolName?.message}
                            {...register('schoolName')}
                        />
                        <TextField 
                            id="identification-code" 
                            label="Identification Code" 
                            variant="outlined" 
                            defaultValue={schoolId}
                            error={!!errors.schoolId}
                            helperText={errors.schoolId?.message}
                            {...register('schoolId')}
                        />
                    </Stack>
                </Stack>
                <Box 
                    id="academic-institution-form-navbar"
                    className='form-navbar'
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        pt: 2 
                    }}
                >
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
        </Box>
    )
}

export default InstitutionForm;
