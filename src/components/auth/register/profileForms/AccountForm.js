"use client"
import * as React from 'react';
import ProfileForm from './ProfileForm';
import StudentForm from './StudentForm';
import ProfessorForm from './ProfessorForm';
import { Box, Button, Typography } from '@mui/material';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { number, string, z } from 'zod';

const AccountForm = (props) => {

    let profile;
    if(props.profileType === 'STUDENT') {
        profile = {
            academicYear: string({required_error: "Academic Year is Required"}),
            major: string({required_error: "Major is Required"}),
            minor: string({required_error: "Minor is Required"}).optional(),
            concentration: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional(),
        }
    } else {
        profile = {
            academicRole: string({required_error: "Academic Role is Required"}),
            appointedYear: number({required_error: "Appointed Year is Required"}),
            department: string({required_error: "Department is Required"}),
            officeBuilding: string().trim().toLowerCase().min(1, {message: "Office Building is Required"}).max(50, {message: "Maximum 50 Character"}),
            officeRoom: string().trim().min(1, {message: "Room # is Required"}).max(50, {message: "Maximum 50 Character"}),
        }
    }

    //React Hook Form
    const schema = z.object({
        firstname: string().trim().toLowerCase().min(1, {message: "First Name is Required"}).max(50, {message: "Maximum 50 Character"}),
        middlename: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional(),
        lastname: string().trim().toLowerCase().min(1, {message: "Last Name is Required"}).max(50, {message: "Maximum 50 Character"}),
        birthMonth: string({required_error: "Month is Required"}),
        birthDay: number({required_error: "Day is Required"}),
        birthYear: number({required_error: "Year is Required"}),
        email: string().trim().toLowerCase()
            .min(1, {message: "Email is Required"})
            .email({message: "Invalid Email Address"})
            .max(50, {message: "Maximum 50 Character"})
            .refine(async (input) => {
                const res = await fetch(`http://localhost:3000/api/auth/availability/email/${input}`);
                if(res.ok) {
                    return true;
                } else {
                    return false;
                }
            }, "Email is Already Taken"),
        phone: string().trim()
            .min(10, {message: "Phone Number is Required (Minimum 10 Digits Long)"})
            .regex(/^[0-9]*$/, {message: "Invalid: Numeric Values Only"})
            .max(15, {message: "Maximum 15 Digits"})
            .refine( async (input) => {
                const res = await fetch(`http://localhost:3000/api/auth/availability/phone/${input}`);
                if(res.ok) {
                    return true;
                } else {
                    return false;
                }
            }, "Phone is Already Taken"),
        username: string().trim().toLowerCase()
            .min(6, {message: "Username is Required (Minimum 6 Characters Long)"})
            .refine(async (input) => {
                const res = await fetch(`http://localhost:3000/api/auth/availability/username/${input}`);
                if(res.ok) {
                    return true;
                } else {
                    return false;
                }
            }, "Username is Already Taken"),
        password: string().min(6, {message: "Password is Required (Minimum 6 Characters Long)"}).max(50, {message: "Maximum 50 Character"}),
        repassword: string().min(6, {message: "Password is Required (Minimum 6 Characters Long)"}).max(50, {message: "Maximum 50 Character"}),
        ...profile,

    }).refine((data) => data.password === data.repassword, {
        message: "Passwords Don't Match",
        path: ['repassword']
    })

    const { register, formState, control, getValues, handleSubmit } = useForm({
        resolver: zodResolver(schema),
    });
    const { errors } = formState;
    const { field: birthMonthField } = useController({ name: 'birthMonth', control })
    const { field: birthDayField } = useController({ name: 'birthDay', control })
    const { field: birthYearField } = useController({ name: 'birthYear', control })
    const { field: academicYearField } = useController({ name: 'academicYear', control })
    const { field: majorField } = useController({ name: 'major', control })
    const { field: minorField } = useController({ name: 'minor', control })
    const { field: academicRoleField } = useController({ name: 'academicRole', control })
    const { field: appointedYearField } = useController({ name: 'appointedYear', control })
    const { field: deptField } = useController({ name: 'department', control })

    const handleBirthMonth = (month) => {
        props.handleBirthMonth(month);
    }
    const handleBirthDay = (day) => {
        props.handleBirthDay(day);
    }
    const handleBirthYear = (year) => {
        props.handleBirthYear(year);
    }

    const handleAcademicYear = (year) => {
        props.handleAcademicYear(year);
    }

    const handleMajor = (major) => {
        props.handleMajor(major);
    }

    const handleMinor = (minor) => {
        props.handleMinor(minor);
    }

    const handleAcademicRole = (role) => {
        props.handleAcademicRole(role);
    }

    const handleAppointedYear = (year) => {
        props.handleAppointedYear(year);
    }

    const handleDepartment = (dept) => {
        props.handleDepartment(dept);
    }

    const saveCurrentForm = () => {
        props.handleAccountInfoFormData(
            getValues("firstname"),
            getValues("middlename"),
            getValues("lastname"),
            getValues("birthMonth"),
            getValues("birthDay"),
            getValues("birthYear"),
            getValues("email"),
            getValues("phone"),
            getValues("username"),
            getValues("password"),
            getValues("repassword")
        );

        if (props.profileType === 'STUDENT') {
            props.handleStudentFormData(
                getValues("academicYear"), 
                getValues("major"),
                getValues("minor"),
                getValues("concentration"),
            );
            props.handleProfessorFormData('', '', '', '', '');
        } else {
            props.handleProfessorFormData(
                getValues("academicRole"),
                getValues("appointedYear"),
                getValues("department"),
                getValues("officeBuilding"),
                getValues("officeRoom")
            );
            props.handleStudentFormData('', '', '', '', '');
        }
    }

    const handleNextForm = () => {
        saveCurrentForm();
        props.handleNext();
    }

    const handleBackForm = () => {
        props.handleBack();
        saveCurrentForm();
    }

    return (
        <form noValidate onSubmit={handleSubmit(handleNextForm)}> 
            <ProfileForm 
                handleBirthMonth={handleBirthMonth}
                handleBirthDay={handleBirthDay}
                handleBirthYear={handleBirthYear}
                register={register}
                errors={errors}
                control={control}
                birthMonthField={birthMonthField}
                birthDayField={birthDayField}
                birthYearField={birthYearField}
                firstname={props.firstname}
                middlename={props.middlename}
                lastname={props.lastname}
                birthMonth={props.birthMonth}
                birthDay={props.birthDay}
                birthYear={props.birthYear}
                email={props.email}
                phone={props.phone}
                username={props.username}
                password={props.password}
                repassword={props.repassword}
                
            />
            {(props.profileType === "STUDENT") ? (
                <StudentForm 
                    register={register}
                    errors={errors}
                    control={control}
                    handleAcademicYear={handleAcademicYear}
                    handleMajor={handleMajor}
                    handleMinor={handleMinor}
                    academicYearField={academicYearField}
                    majorField={majorField}
                    minorField={minorField}
                    academicYear={props.academicYear}
                    major={props.major}
                    minor={props.minor}
                    concentration={props.concentration}
                    majors={props.majors}
                    minors={props.minors}
                />
            ) : (
                <ProfessorForm 
                    register={register}
                    errors={errors}
                    control={control}
                    handleAcademicRole={handleAcademicRole}
                    handleAppointedYear={handleAppointedYear}
                    handleDepartment={handleDepartment}
                    academicRoleField={academicRoleField}
                    appointedYearField={appointedYearField}
                    deptField={deptField}
                    academicRole={props.academicRole}
                    apptYear={props.apptYear}
                    department={props.department}
                    officeBuilding={props.officeBuilding}
                    officeRoom={props.officeRoom}
                    depts={props.depts}
                />
            )} 
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button 
                    variant="contained"
                    onClick={handleBackForm}
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
