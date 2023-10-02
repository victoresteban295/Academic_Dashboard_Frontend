import { Box, Button, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import StudentInputFields from "./StudentInputFields";
import ProfessorInputFields from "./ProfessorInputFields";
import AccountInputFields from "./AccountInputFields";
import { AccountFormSchema } from "@/lib/schemas/authSchema";

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
        mode: 'onBlur', //Validated Input Fields onBlur Event
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
            apptYear: apptYear,
            department: department,
            officeBuilding: officeBuilding,
            officeRoom: officeRoom,
            handleAccountInfoFormData: handleAccountInfoFormData,
            handleStudentFormData: handleStudentFormData,
            handleProfessorFormData: handleProfessorFormData,
            profileType: profileType,
            schoolName: schoolName,
            schoolId: schoolId
        },
        resolver: zodResolver(AccountFormSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    return (
        <form noValidate >
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
                />
            ) : (
                <ProfessorInputFields 
                    register={register}
                    errors={errors}
                    control={control}
                />
            )} 
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
    )
}

export default AccountForm;
