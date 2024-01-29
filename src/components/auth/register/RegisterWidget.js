"use client"
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import InstitutionForm from "./InstitutionForm/InstitutionForm";
import AccountForm from "./AccountForm/AccountForm";
import ReviewForm from "./ReviewForm/ReviewForm";

const RegisterWidget = () => {

    /* Material UI - Stepper Code */
    const steps = ['Academic Institution', 'Profile', 'Review']; //Steps 
    const [activeStep, setActiveStep] = useState(0); //Represents Each Step in Stepper
    const handleNext = () => { //Move to Next Step
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleBack = () => { //Move Back to Previous Step
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    /* Select Options Passed to Account Form Component */
    const [majors, setMajors] = useState([]);
    const setStateMajors = (majors) => {
        const sortedMajors = majors.sort();
        setMajors(() => {
            return ['Undecided', ...sortedMajors];
        });
    }
    const [minors, setMinors] = useState([]);
    const setStateMinors = (minors) => {
        const sortedMinors = minors.sort();
        setMinors(prevArray => {
            return [...prevArray, ...sortedMinors];
        });
    }

    const [depts, setDepts] = useState([]);
    const setStateDepts = (depts) => {
        const sortedDepts = depts.sort();
        setDepts(prevArray => {
            return [...prevArray, ...sortedDepts];
        });
    }

    /* State Value to Allow Users To Revist & Edit Before Submitting */
    //Academic Institution Form
    const [profileType, setProfileType] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [schoolId, setSchoolId] = useState('');

    //Personal Information Form
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [birthYear, setBirthYear] = useState('');

    //Account Information Form
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
        confirmPassword) => {
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
            setConfirmPassword(confirmPassword);
    }

    //Student Information Form
    const [academicYear, setAcademicYear] = useState('');
    const [major, setMajor] = useState('');
    const [minor, setMinor] = useState('');
    const [concentration, setConcentration] = useState('');

    const handleStudentFormData = (year, major, minor, concen) => {
        setAcademicYear(year);
        setMajor(major);
        setMinor(minor);
        setConcentration(concen);
    }

    //Professor Information Form
    const [academicRole, setAcademicRole] = useState('');
    const [apptYear, setApptYear] = useState('');
    const [department, setDepartment] = useState('');
    const [officeBuilding, setOfficeBuilding] = useState('');
    const [officeRoom, setOfficeRoom] = useState('');

    const handleProfessorFormData = (role, appt, dept, building, room) => {
        setAcademicRole(role);
        setApptYear(appt);
        setDepartment(dept);
        setOfficeBuilding(building);
        setOfficeRoom(room);
    }

    return (
        <Box
            id='register-widget'
            sx={{ 
                p: 4,
                bgcolor: 'widget.background',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                width: '100%',
                my: {xs: 1, sm: 8},
            }}
        >
            <Stepper 
                activeStep={activeStep} 
            >
                {steps.map((label) => {
                    return (
                        <Step 
                            key={label} 
                        >
                            <StepLabel>
                                <Typography
                                    sx={{
                                        display: {xs: 'none', sm:'flex'}
                                    }}
                                >
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Box
                className='form-container'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: { xs: 6, sm: 4},
                }}
            >
                {(activeStep === 0) ? (
                    <InstitutionForm 
                        profileType={profileType}
                        schoolName={schoolName}
                        schoolId={schoolId}
                        setProfileType={setProfileType}
                        setSchoolName={setSchoolName}
                        setSchoolId={setSchoolId}
                        setMajors={setStateMajors}
                        setMinors={setStateMinors}
                        setDepts={setStateDepts}
                        handleNext={handleNext}
                    />
                ) : (activeStep === 1) ? (
                    <AccountForm 
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
                        confirmPassword={confirmPassword}
                        academicYear={academicYear}
                        major={major}
                        minor={minor}
                        concentration={concentration}
                        academicRole={academicRole}
                        apptYear={apptYear}
                        department={department}
                        officeBuilding={officeBuilding}
                        officeRoom={officeRoom}
                        handleAccountInfoFormData={handleAccountInfoFormData}
                        handleStudentFormData={handleStudentFormData}
                        handleProfessorFormData={handleProfessorFormData}
                        profile={profileType}
                        majors={majors}
                        minors={minors}
                        depts={depts}
                        handleBack={handleBack}
                        handleNext={handleNext}
                    />
                ): (
                    <ReviewForm 
                        profileType={profileType}
                        schoolName={schoolName}
                        schoolId={schoolId}
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
                        concentration={concentration}
                        academicRole={academicRole}
                        apptYear={apptYear}
                        department={department}
                        officeBuilding={officeBuilding}
                        officeRoom={officeRoom}
                        handleBack={handleBack}
                    />
                )}
            </Box>
        </Box>

    )
}

export default RegisterWidget;
