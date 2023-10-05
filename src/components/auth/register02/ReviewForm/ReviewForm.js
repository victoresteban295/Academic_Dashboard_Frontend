import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import AccountReviewInput from "./AccountReviewInput";
import StudentReviewInput from "./StudentReviewInput";
import ProfessorReviewInput from "./ProfessorReviewInput";
import { useState } from "react";
import { registerUser } from "@/lib/actions/auth-actions";

const ReviewForm = ({ 
    profileType, 
    schoolName, 
    schoolId,
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
    academicYear,
    major,
    minor,
    concentration,
    academicRole,
    apptYear,
    department,
    officeBuilding,
    officeRoom,
    handleBack }) => {

    const router = useRouter();
    const [alert, setAlert] = useState(false);
    let displayAlert
    if(alert) {
        displayAlert = {}
    } else {
        displayAlert = {
            display: 'none',
        }
    }

    const handleSubmitForm = async () => {
        const { success } = await registerUser(
            profileType, 
            schoolName, 
            schoolId, 
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
            academicRole,
            apptYear,
            department,
            officeBuilding,
            officeRoom,
            academicYear,
            major,
            minor,
            concentration);

        if (success) {
            setAlert(false);
            router.push('/?success=true') 
        } else {
            setAlert(true); 
        }
    }
    
    //add action and server action
    return (
        <Box
            id='review-form'
            className='form'
            sx={{
                flexGrow: 1,
                maxWidth: '500px',
            }}
        >
            <form noValidate action={handleSubmitForm}>
                <Alert
                    severity='error'
                sx={{
                    m: 2,
                    ...displayAlert,
                }}
                >
                    Something Went Wrong - please try again later 
                </Alert> 
                <Stack
                    id='review-form-sections'
                    className='form-sections'
                    spacing={4}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <AccountReviewInput 
                        profileType={profileType}
                        schoolName={schoolName}
                        firstname={firstname}
                        middlename={middlename}
                        lastname={lastname}
                        birthMonth={birthMonth}
                        birthDay={birthDay}
                        birthYear={birthYear}
                        email={email}
                        phone={phone}
                        username={username}
                        password={password.length}
                    />
                    {profileType === 'STUDENT' ? (
                        <StudentReviewInput 
                            academicYear={academicYear}
                            major={major}
                            minor={minor}
                            concentration={concentration}
                        />
                    ) : (
                        <ProfessorReviewInput 
                            academicRole={academicRole} 
                            apptYear={apptYear}
                            department={department}
                            officeBuilding={officeBuilding}
                            officeRoom={officeRoom}
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
                            Submit
                        </Typography>
                    </Button> 
                </Box> 
            </form>
        </Box>

    )

}

export default ReviewForm;
