import { string, z } from "zod";

export const ChecklistTitleSchema = z.object({
    checklistTitle: string().trim().max(50, {message: "Maximum 50 Character"}).optional(),
});
