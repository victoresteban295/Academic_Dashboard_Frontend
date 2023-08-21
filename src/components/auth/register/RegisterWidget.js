"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcademicForm from './AcademicForm';
import ReviewForm from './ReviewForm';
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

    //Account Information Form
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repassword, setRepassword] = React.useState('');

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
        password,
        repassword) => {
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
            setRepassword(repassword);
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


    //Student Information Form
    const [academicYear, setAcademicYear] = React.useState('');
    const [major, setMajor] = React.useState('');
    const [minor, setMinor] = React.useState('');
    const [concentration, setConcentration] = React.useState('');

    const handleStudentFormData = (year, major, minor, concen) => {
        setAcademicYear(year);
        setMajor(major);
        setMinor(minor);
        setConcentration(concen);
    }

    const handleAcadmeicYear = (year) => {
        setAcademicYear(year);
    }

    //Professor Information Form
    const [academicRole, setAcademicRole] = React.useState('');
    const [apptYear, setApptYear] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [officeBuilding, setOfficeBuilding] = React.useState('');
    const [officeRoom, setOfficeRoom] = React.useState('');

    const handleProfessorFormData = (role, appt, dept, building, room) => {
        setAcademicRole(role);
        setApptYear(appt);
        setDepartment(dept);
        setOfficeBuilding(building);
        setOfficeRoom(room);
    }

    const handleAcademicRole = (role) => {
        setAcademicRole(role);
    }

    const handleAppointedYear = (year) => {
        setApptYear(year);
    }

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        let profile;

        if(profileType === 'STUDENT') {
            profile = {
                username: username,
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                birthMonth: birthMonth,
                birthDay: birthDay,
                birthYear: birthYear,
                gradeLvl: academicYear,
                major: major,
                minor: minor,
                concentration: concentration
            }
        } else {
            profile = {
                username: username,
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                birthMonth: birthMonth,
                birthDay: birthDay,
                birthYear: birthYear,
                department: department,
                academicRole: academicRole,
                apptYear: apptYear,
                officeBuilding: officeBuilding,
                officeRoom: officeRoom
            }
        }

        let user = {
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            profileType: profileType,
            email: email,
            phone: phone,
            username: username,
            password: password,
            schoolName: institution,
            schoolId: idCode,
            profile: profile
        }

        console.log(user);
    }

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
                        handleStudentFormData={handleStudentFormData}
                        handleProfessorFormData={handleProfessorFormData}
                        handleBirthMonth={handleBirthMonth}
                        handleBirthDay={handleBirthDay}
                        handleBirthYear={handleBirthYear}
                        handleAcademicYear={handleAcadmeicYear}
                        handleAcademicRole={handleAcademicRole}
                        handleAppointedYear={handleAppointedYear}
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
                        repassword={repassword}
                        academicYear={academicYear}
                        major={major}
                        minor={minor}
                        concentration={concentration}
                        academicRole={academicRole}
                        apptYear={apptYear}
                        department={department}
                        officeBuilding={officeBuilding}
                        officeRoom={officeRoom}
                    />
                ) : (
                    <React.Fragment>
                        <ReviewForm
                            profileType={profileType}
                            institution={institution}
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
                            academicYear={academicYear}
                            major={major}
                            minor={minor}
                            concentration={concentration}
                            academicRole={academicRole}
                            apptYear={apptYear}
                            department={department}
                            officeBuilding={officeBuilding}
                            officeRoom={officeRoom}
                        />
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
                                onClick={handleSubmit}
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
