import { Box, Button, Stack, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import StudentInputFields from "./StudentInputFields";
import ProfessorInputFields from "./ProfessorInputFields";
import AccountInputFields from "./AccountInputFields";
import { ProfessorProfileSchema, StudentProfileSchema } from "@/lib/schemas/authSchema";

const AccountForm = ({ 
    firstname,
    middlename,
    lastname,
    birthMonth,
    birthDay,
    birthYear,
    email,
    phone,
    username,
    password,
    confirmPassword,
    academicYear,
    major,
    minor,
    concentration,
    academicRole,
    apptYear,
    department,
    officeBuilding,
    officeRoom,
    handleAccountInfoFormData,
    handleStudentFormData,
    handleProfessorFormData,
    profile, 
    majors, 
    minors, 
    depts, 
    handleBack, 
    handleNext }) => {

    /* React Hook Form */
    const { register, formState, control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            birthMonth: birthMonth,
            birthDay: birthDay,
            birthYear: birthYear,
            email: email,
            phone: phone,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            academicYear: academicYear,
            major: major,
            minor: minor,
            concentration: concentration,
            academicRole: academicRole,
            appointedYear: apptYear,
            department: department,
            officeBuilding: officeBuilding,
            officeRoom: officeRoom,
        },
        resolver: zodResolver((profile === "STUDENT") ? StudentProfileSchema : ProfessorProfileSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    const saveCurrentForm = (data) => {
        handleAccountInfoFormData(
            data.firstname, 
            data.middlename, 
            data.lastname,
            data.birthMonth,
            data.birthDay,
            data.birthYear,
            data.email,
            data.phone,
            data.username,
            data.password,
            data.confirmPassword
        );

        if(profile === "STUDENT") {
            handleStudentFormData(
                data.academicYear, 
                data.major, 
                data.minor, 
                data.concentration
            );
        } else {
            handleProfessorFormData(
                data.academicRole, 
                data.appointedYear, 
                data.department, 
                data.officeBuilding, 
                data.officeRoom
            );
        }
    }

    const handleNextForm = (data) => {
        saveCurrentForm(data);
        handleNext();
    }

    return (
        <Box
            id='profile-form'
            className='form'
            sx={{
                flexGrow: 1,
                maxWidth: '500px',
            }}
        >
            <form noValidate onSubmit={handleSubmit(handleNextForm)} >
                <Stack
                    id='profile-form-sections'
                    className='form-sections'
                    spacing={4}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <AccountInputFields 
                        register={register}
                        errors={errors}
                        control={control}
                    />
                    {(profile === "STUDENT") ? (
                        <StudentInputFields 
                            register={register}
                            errors={errors}
                            control={control}
                            majors={majors}
                            minors={minors}
                        />
                    ) : (
                        <ProfessorInputFields 
                            register={register}
                            errors={errors}
                            control={control}
                            depts={depts}
                        />
                    )} 
                </Stack>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button 
                        variant="contained"
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    > 
                        <Typography
                            variant="button"
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                        >
                            Back
                        </Typography>
                    </Button> 
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

export default AccountForm;
