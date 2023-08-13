"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcademicForm from './AcademicForm';
/* import ProfileForm from './ProfileForm'; */
/* import StudentForm from './StudentForm'; */
/* import ProfessorForm from './ProfessorForm'; */
import ReviewForm from './ReviewForm';
import { useForm } from 'react-hook-form';
import AccountForm from './profileForms/AccountForm';

const steps = ['Academic Institution', 'Profile', 'Review'];

const RegisterWidget = () => {

    //Academic Institution Form
    const [profileType, setProfileType] = React.useState('');
    const [institution, setInstitution] = React.useState('');
    const [idCode, setIdCode] = React.useState('');

    const handleAcademcFormData = (profileType, institution, idCode) => {
        setProfileType(profileType);
        setInstitution(institution);
        setIdCode(idCode);
    }

    const handleProfileType = (profileType) => {
        setProfileType(profileType);
    };

    //Personal Information Form
    const [firstname, setFirstname] = React.useState('');
    const [middlename, setMiddlename] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [birthMonth, setBirthMonth] = React.useState('');
    const [birthDay, setBirthDay] = React.useState('');
    const [birthYear, setBirthYear] = React.useState('');

    const handleAccountInfoFormData = (
        firstname, 
        middlename, 
        lastname, 
        month, 
        day, 
        year,
        email,
        phone,
        username,
        password) => {
            setFirstname(firstname);
            setMiddlename(middlename);
            setLastname(lastname);
            setBirthMonth(month);
            setBirthDay(day);
            setBirthYear(year);
            setEmail(email);
            setPhone(phone);
            setUsername(username);
            setPassword(password);
    }

    const handleBirthMonth = (month) => {
        setBirthMonth(month);
    }
    const handleBirthDay = (day) => {
        setBirthDay(day);
    }
    const handleBirthYear = (year) => {
        setBirthYear(year);
    }

    //Account Information Form
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Student Information Form
    const [academicYear, setAcademicYear] = React.useState('');
    const [major, setMajor] = React.useState('');
    const [minor, setMinor] = React.useState('');
    const [concentration, setConcentration] = React.useState('');

    //Professor Information Form
    const [academicRole, setAcademicRole] = React.useState('');
    const [apptYear, setApptYear] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [officeBuilding, setOfficeBuilding] = React.useState('');
    const [officeRoom, setOfficeRoom] = React.useState('');


    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
            <Box 
                sx={{ 
                    p: 4,
                    bgcolor: 'widget.background',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '10px',
                    width: '100%',
                    my: 8,
                }}
            >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {(activeStep === 0) ? (
                    <AcademicForm 
                        profileType={profileType}
                        institution={institution}
                        idCode={idCode}
                        handleAcademicFormData={handleAcademcFormData}
                        handleProfileType={handleProfileType}
                        handleNext={handleNext}
                    />
                ) : (activeStep === 1) ? (
                    <AccountForm 
                        profileType={profileType}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleAccountInfoFormData={handleAccountInfoFormData}
                        handleBirthMonth={handleBirthMonth}
                        handleBirthDay={handleBirthDay}
                        handleBirthYear={handleBirthYear}
                        firstname={firstname}
                        middlename={middlename}
                        lastname={lastname}
                        birthMonth={birthMonth}
                        birthDay={birthDay}
                        birthYear={birthYear}
                        email={email}
                        phone={phone}
                        username={username}
                        password={password}
                        academicYear={academicYear}
                        major={major}
                        minor={minor}
                        concentratio={concentration}
                        academicRole={academicRole}
                        apptYear={apptYear}
                        department={department}
                        officeBuilding={officeBuilding}
                        officeRoom={officeRoom}
                    />
                ) : (
                    <React.Fragment>
                        <ReviewForm />
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button 
                                disabled={activeStep === 0}
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
                                variant="contained"
                                onClick={handleReset}
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
                    </React.Fragment>
                )}
            </Box>
    );
}

export default RegisterWidget;
