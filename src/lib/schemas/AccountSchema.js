import { any, number, string, z } from "zod";

export const ProfAccountSchema = z.object({
    department: string().min(1, {message: "Department is Required"}),
    academicRole: string().min(1, {message: "Academic Role is Required"}),
    apptYear: number({required_error: "Appointed Year is Required"}),
    officeBuilding: string().trim().min(1, {message: "Office Building is Required"}).max(50, {message: "Maximum 50 Character"}),
    officeRoom: string().trim().min(1, {message: "Room # is Required"}).max(50, {message: "Maximum 50 Character"}),
});


export const OfficeHrsSchema = z.object({
    location: string().trim().min(1, {message: "Location is Required"}).max(50, {message: "Maximum 50 Characters"}),
    room: string().trim().min(1, {message: "Room # is Required"}).max(50, {message: "Maximum 50 Character"}),
    strTime: any().refine((input) => {
        return input != null && input.format("h:mm A") != 'Invalid Date';
    }, "Time is Required"),
    endTime: any().refine((input) => {
        return input != null && input.format("h:mm A") != 'Invalid Date';
    }, "Time is Required"),
    days: string().array().nonempty({message: "A Day is Required"})
});

export const StudAccountSchema = z.object({
    gradeLvl: string().min(1, {message: "Academic Year is Required"}),
    major: string().min(1, {message: "Major is Required"}),
    minor: string().optional(),
    concentration: string().trim().toLowerCase().max(50, {message: "Maximum 50 Character"}).optional()
});
