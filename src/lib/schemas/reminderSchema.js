import { any, string, z } from "zod";

export const ReminderSchema = z.object({
    title: string().trim().min(1, {message: "Title is Required"}).max(50, {message: "Maximum 50 Characters"}),
    groups: string().min(1, {message: "Groups is Required"}),
    date: any().refine((input) => {
        return input != null && input.format("MM/DD/YYYY") != 'Invalid Date';
    }, "Date is Required"),
    time: any().refine((input) => {
        return input != null && input.format("h:mm A") != 'Invalid Date';
    }, "Time is Required"),
    description: string().trim().max(250, {message: "Maximum 250 Characters"}).optional(),
});
