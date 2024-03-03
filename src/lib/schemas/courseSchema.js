import { any, string, z } from "zod";

export const SyllabusSection = z.object({
    title: string().trim().min(1, {message: "Title is Required"}).max(25, {message: "Maximum 50 Characters"}),
    info: string().trim().min(1, {message: "Description is Required"}).max(1500, {message: "Maximum 1500 Characters"}),
})

export const CourseDescription = z.object({
    description: string().trim().min(1, {message: "Description is Required"}).max(1500, {message: "Maximum 1500 Characters"}),
})

export const CourseSchedule = z.object({
    location: string().trim().min(1, {message: "Location is Required"}).max(30, {message: "Maximum 30 Characters"}),
    strTime: any().refine((input) => {
        return input != null && input.format("h:mm A") != 'Invalid Date';
    }, "Time is Required"),
    endTime: any().refine((input) => {
        return input != null && input.format("h:mm A") != 'Invalid Date';
    }, "Time is Required"),
    days: string().array().nonempty({message: "A Day is Required"})
})

export const CourseTask = z.object({
    title: string().trim().min(1, {message: "Title is Required"}).max(50, {message: "Maximum 50 Characters"}),
    task: string().min(1, {message: "Task is Required"}),
    due: string().min(1, {message: "Due is Required"}),
    date: any().refine((input) => {
        return input != null && input.format("MM/DD/YYYY") != 'Invalid Date';
    }, "Date is Required"),
    time: any().refine(() => {
            return true;
    }, "Time is Required"),
    note: string().trim().max(200, {message: "Maximum 200 Characters"}).optional(),
}).refine((data) => {
        if(data.due != "Select Time" || data.due === null) {
            return true;
        } else {
            return data.time != null && data.time.format("h:mm A") != 'Invalid Date';
        }
}, { message: "Time is Required", path: ['time']})
