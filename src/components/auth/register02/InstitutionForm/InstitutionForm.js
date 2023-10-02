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
        const result = await validateInstitution(data);
        if(result.success) {
            setAlert(false);

            //Options Passed to Next Form
            setMajors(result.majors); 
            setMinors(result.minors);
            setDepts(result.depts);

            //Set State Value
            setProfileType(data.profileType);
            setSchoolName(data.schoolName);
            setSchoolId(data.schoolId);

            //Next Step in Stepper
            handleNext(); //Next Step in Stepper
        } else {
            //User Provided Wrong Information 
            setAlert(true);
        }
    }

    return (
        <form noValidate action={handleSubmit(handleNextForm)} > 
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
                    <Alert
                        severity='error'
                        sx={{
                            ...displayAlert,
                        }}
                    >
                        Invalid Identification Code - make sure to select the correct profile type
                    </Alert> 
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
                        id="academic_institution" 
                        label="Academic Institution" 
                        variant="outlined" 
                        defaultValue={schoolName}
                        error={!!errors.schoolName}
                        helperText={errors.schoolName?.message}
                        {...register('schoolName')}
                    />
                    <TextField 
                        id="identification_code" 
                        label="Identification Code" 
                        variant="outlined" 
                        defaultValue={schoolId}
                        error={!!errors.schoolId}
                        helperText={errors.schoolId?.message}
                        {...register('schoolId')}
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

export default InstitutionForm;
