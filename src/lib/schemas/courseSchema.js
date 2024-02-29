import { string, z } from "zod";

export const SyllabusSection = z.object({
    title: string().trim().min(1, {message: "Title is Required"}).max(25, {message: "Maximum 50 Characters"}),
    info: string().trim().min(1, {message: "Description is Required"}).max(1500, {message: "Maximum 1500 Characters"}),
})

export const CourseDescription = z.object({
    description: string().trim().min(1, {message: "Description is Required"}).max(1500, {message: "Maximum 1500 Characters"}),
})

export const CourseSchedule = z.object({
    location: string().trim().min(1, {message: "Location is Required"}).max(30, {message: "Maximum 30 Characters"}),
})
