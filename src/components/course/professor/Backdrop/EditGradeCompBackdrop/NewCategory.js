import { CategorySchema } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCircleTwoTone } from "@mui/icons-material";
import { FormControl, IconButton, MenuItem, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const NewCategory = () => {

    const categories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];
    const percentages = ["5%", "10%", "15%"];

    /* React Hook Form */
    const values = {
        department: "",
        academicRole: "",
    }
    const { register, formState, control, getValues, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            category: "",
            percentage: "",
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
                                    console.log(getValues("category"));

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
                                    console.log(getValues("percentage"));

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
                <AddCircleTwoTone 
                    fontSize="inherit"
                    sx={{
                        color: 'primary.main'
                    }}
                />
            </IconButton>
        </Stack>

    )
}

export default NewCategory;
