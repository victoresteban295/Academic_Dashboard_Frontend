import { RemoveCircleTwoTone } from "@mui/icons-material";
import { FormControl, IconButton, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Category = ({ 
    takenCategories,
    category,
    percentage,
    updateCategory,
    updatePercentage,
    removeComposition
}) => {

    const allCategories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];
    const percentages = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];

    const [defaultCategory, setCategory] = useState(category);
    const handleCategory = (event) => {
        const updatedCategory = event.target.value;
        setCategory(updatedCategory);
        updateCategory(category, updatedCategory);
    }

    const [defaultPercentage, setPercentage] = useState(percentage);
    const handlePercentage = (event) => {
        const updatedPercentage = event.target.value;
        setPercentage(updatedPercentage);
        updatePercentage(category, updatedPercentage)
    }

    /* Remove Category */
    const removeCategory = () => {
        removeComposition(category);
    }

    return (
        <Stack
            direction="row"
            spacing={2}
            useFlexGap
        >
            <FormControl fullWidth >
                <TextField
                    select
                    value={defaultCategory}
                    onChange={handleCategory}
                    label='Category'
                >
                    {allCategories.map((item) => {
                        return(
                            <MenuItem
                                key={item} 
                                value={item}
                                sx={{
                                    display: takenCategories.includes(item) ? "none" : "flex",
                                }}
                            >
                                {item}
                            </MenuItem>
                        );
                    })}
                </TextField>
            </FormControl>
            <FormControl fullWidth >
                <TextField
                    select
                    value={defaultPercentage}
                    onChange={handlePercentage}
                    label='Percentage'
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
            </FormControl>
            <IconButton
                size="medium"
                onClick={removeCategory}
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
