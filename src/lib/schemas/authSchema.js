import { number, string, z } from 'zod';

export const InstitutionFormSchema = z.object({
    profileType: string().min(1, {message: "Profile Type is Required"}),
    schoolName: string().trim().toLowerCase().min(1, {message: "Academic Instituition is Required"}).max(50, {message: "Maximum 50 Character"}),
    schoolId: string().trim().min(10, {message: "Minimum 10 Characters"}).max(10, {message: "Maximum 10 Characters"}),
});

export const StudentProfileSchema = z.object({
    firstname: string().trim().toLowerCase().min(1, {message: "First Name is Required"}).max(50, {message: "Maximum 50 Character"}),
    middlename: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional(),
    lastname: string().trim().toLowerCase().min(1, {message: "Last Name is Required"}).max(50, {message: "Maximum 50 Character"}),
    birthMonth: string().min(1, {message: "Month is Required"}),
    birthDay: number({invalid_type_error: "Day is Required"}),
    birthYear: number({invalid_type_error: "Year is Required"}),
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
    confirmPassword: string().min(6, {message: "Password is Required (Minimum 6 Characters Long)"}).max(50, {message: "Maximum 50 Character"}),
    academicYear: string().min(1, {message: "Academic Year is Required"}),
    major: string().min(1, {message: "Major is Required"}),
    minor: string().optional(),
    concentration: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Don't Match",
    path: ['confirmPassword']
})

export const ProfessorProfileSchema = z.object({
    firstname: string().trim().toLowerCase().min(1, {message: "First Name is Required"}).max(50, {message: "Maximum 50 Character"}),
    middlename: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional(),
    lastname: string().trim().toLowerCase().min(1, {message: "Last Name is Required"}).max(50, {message: "Maximum 50 Character"}),
    birthMonth: string().min(1, {message: "Month is Required"}),
    birthDay: number({invalid_type_error: "Day is Required"}),
    birthYear: number({invalid_type_error: "Year is Required"}),
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
    confirmPassword: string().min(6, {message: "Password is Required (Minimum 6 Characters Long)"}).max(50, {message: "Maximum 50 Character"}),
    academicRole: string().min(1, {message: "Academic Role is Required"}),
    appointedYear: number({required_error: "Appointed Year is Required"}),
    department: string().min(1, {message: "Department is Required"}),
    officeBuilding: string().trim().toLowerCase().min(1, {message: "Office Building is Required"}).max(50, {message: "Maximum 50 Character"}),
    officeRoom: string().trim().min(1, {message: "Room # is Required"}).max(50, {message: "Maximum 50 Character"}),

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Don't Match",
    path: ['confirmPassword']
})

