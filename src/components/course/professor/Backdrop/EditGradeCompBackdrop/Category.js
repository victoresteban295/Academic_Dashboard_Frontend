import { FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Category = ({ 
    category,
    percentage
}) => {

    const categories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];

    /* React Hook Form */
    /* const values = { */
    /*     department: category, */
    /*     academicRole: percentage, */
    /* } */
    /* const { register, formState, control, handleSubmit, reset } = useForm({ */
    /*     mode: 'onBlur', */
    /*     defaultValues: { */
    /*         category: category, */
    /*         percentage: percentage, */
    /*     }, */
    /*     values, */
    /*     resolver: zodResolver(ProfAccountSchema), //Zod Validation Schema */
    /* }); */
    /* const { errors } = formState; */

    return (
        <Stack
            spacing={2}
            useFlexGap
        >
            <FormControl fullWidth >
                <TextField
                    select
                    value={category}
                    onChange={onChange}
                    label='Category'
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
                <Controller
                    name="category"
                    control={control}
                    render={({field: { onChange, value}}) => {
                        return (
                            <TextField
                                select
                                error={!!errors.category}
                                value={value}
                                onChange={onChange}
                                label='Category'
                                helperText={errors.category?.message}
                            >
                                {categories.map((category) => {
                                    return(
                                        <MenuItem
                                            key={category} 
                                            value={category}
                                        >
                                            {category}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        )
                    }}
                />
            </FormControl>

        </Stack>
    )
}

export default Category;
