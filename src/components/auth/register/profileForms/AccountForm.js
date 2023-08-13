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

    //React Hook Form
    const schema = z.object({
        firstname: string().min(1, {message: "First Name is Required"}),
        lastname: string().min(1, {message: "Last Name is Required"}),
        email: string().min(1, {message: "Email is Required"}).email({message: "Invalid Email Address"}),
        birthMonth: string({required_error: "Month is Required"}),
        birthDay: number({required_error: "Day is Required"}),
        birthYear: number({required_error: "Year is Required"}),
        phone: number({required_error: "Phone Number is Required"}).min(10, {message: "10 Digit Phone Number is Required"}),
    })

    const { register, formState, control, getValues, handleSubmit } = useForm({
        resolver: zodResolver(schema),
    });
    const { errors } = formState;
    const { field: birthMonthField } = useController({ name: 'birthMonth', control })
    const { field: birthDayField } = useController({ name: 'birthDay', control })
    const { field: birthYearField } = useController({ name: 'birthYear', control })

    const handleBirthMonth = (month) => {
        props.handleBirthMonth(month);
    }
    const handleBirthDay = (day) => {
        props.handleBirthDay(day);
    }
    const handleBirthYear = (year) => {
        props.handleBirthYear(year);
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
            getValues("password")
        );
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
                
            />
            {(props.profileType === "STUDENT") ? (
                <StudentForm 
                    register={register}
                    errors={errors}
                />
            ) : (
                <ProfessorForm 
                    register={register}
                    errors={errors}
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
