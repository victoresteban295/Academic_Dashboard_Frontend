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
import { Alert, Dialog, DialogActions, DialogTitle } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const steps = ['Academic Institution', 'Profile', 'Review'];

const RegisterWidget = () => {

    const router = useRouter();
    const [alert, setAlert] = React.useState(false);
    let displayAlert
    if(alert) {
        displayAlert = {}
    } else {
        displayAlert = {
            display: 'none',
        }
    }

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

    const [majors, setMajors] = React.useState(['Undecided']);
    const setStateMajors = (majors) => {
        const sortedMajors = majors.sort();
        setMajors(prevArray => {
            return [...prevArray, ...sortedMajors];
        });
    }
    const [minors, setMinors] = React.useState([]);
    const setStateMinors = (minors) => {
        const sortedMinors = minors.sort();
        setMinors(prevArray => {
            return [...prevArray, ...sortedMinors];
        });
    }

    const [depts, setDepts] = React.useState([]);
    const setStateDepts = (depts) => {
        const sortedDepts = depts.sort();
        setDepts(prevArray => {
            return [...prevArray, ...sortedDepts];
        });
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

    const handleMajor = (major) => {
        setMajor(major);
    }
    const handleMinor = (minor) => {
        setMinor(minor);
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

    const handleDepartment = (dept) => {
        setDepartment(dept);
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

    const handleSubmit =  async () => {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profileType: profileType,
                schoolName: institution,
                schoolid: idCode,
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
                academicRole: academicRole,
                apptYear: apptYear,
                department: department,
                officeBuilding: officeBuilding,
                officeRoom: officeRoom,
                gradeLvl: academicYear,
                major: major,
                minor: minor,
                concentration: concentration,
            })
        });

        if(res.ok) {
            setAlert(false);
            router.push('/login?success=true') 
        } else {
            setAlert(true); 
        }
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
                        setStateMajors={setStateMajors}
                        setStateMinors={setStateMinors}
                        setStateDepts={setStateDepts}
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
                        handleMajor={handleMajor}
                        handleMinor={handleMinor}
                        handleAcademicRole={handleAcademicRole}
                        handleAppointedYear={handleAppointedYear}
                        handleDepartment={handleDepartment}
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
                        majors={majors}
                        minors={minors}
                        depts={depts}
                    />
                ) : (
                    <React.Fragment>
                        <Alert 
                            severity='error'
                        sx={{
                            m: 2,
                            ...displayAlert,
                        }}
                        >
                            Something Went Wrong - please try again later 
                        </Alert> 
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
