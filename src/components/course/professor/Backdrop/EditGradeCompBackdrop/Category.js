import { CategorySchema } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RemoveCircleTwoTone } from "@mui/icons-material";
import { FormControl, IconButton, MenuItem, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Category = ({ 
    index,
    category,
    percentage,
    modifyComposition,
    removeComposition
}) => {

    const categories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];
    const percentages = ["5%", "10%", "15%"];

    /* React Hook Form */
    const values = {
        department: category,
        academicRole: percentage,
    }
    const { register, formState, control, getValues, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            category: category,
            percentage: percentage,
        },
        values,
        resolver: zodResolver(CategorySchema), //Zod Validation Schema
    });
    const { errors } = formState;

    return (
        <Stack
            direction="row"
            spacing={2}
            useFlexGap
        >
            <FormControl fullWidth >
                <Controller
                    name="category"
                    control={control}
                    render={({field: { onChange, value}}) => {
                        return (
                            <TextField
                                select
                                error={!!errors.category}
                                value={value}
                                onChange={(value => {
                                    onChange(value);
                                    modifyComposition(index, value, percentage);
                                })}
                                label='Category'
                                helperText={errors.category?.message}
                            >
                                {categories.map((item) => {
                                    return(
                                        <MenuItem
                                            key={item} 
                                            value={item}
                                        >
                                            {item}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        )
                    }}
                />
            </FormControl>
            <FormControl fullWidth >
                <Controller
                    name="percentage"
                    control={control}
                    render={({field: { onChange, value}}) => {
                        return (
                            <TextField
                                select
                                error={!!errors.percentage}
                                value={value}
                                onChange={(value => {
                                    onChange(value);
                                    modifyComposition(index, category, value);
                                })}
                                label='Percentage'
                                helperText={errors.percentage?.message}
                            >
                                {percentages.map((item) => {
                                    return(
                                        <MenuItem
                                            key={item} 
                                            value={item}
                                        >
                                            {item}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        )
                    }}
                />
            </FormControl>
            <IconButton
                size="medium"
            >
                <RemoveCircleTwoTone 
                    fontSize="inherit"
                    sx={{
                        color: 'error.main'
                    }}
                />
            </IconButton>
        </Stack>
    )
}

export default Category;
