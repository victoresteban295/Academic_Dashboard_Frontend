import { Edit } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const EditGradeCompBackdrop = ({
    open,
    handleClose,
    gradeComposition,
    changeGradeComposition,
    handleOpenAlert
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
    }

    const updateComposition = (index, category, percentage) => {
        //Update Category 
        const updatedComposition = [...gradeComposition];
        for(const element of updatedComposition) {
            //Find & Update Category
            if(element.index === index) {
                element.category = category;
                element.percentage = percentage;
            }
        }
        
        //Update Categories
        changeGradeComposition(updatedComposition);
    }

    const removeComposition = (index) => {
        //Filter Out Category Being Removed
        const copyComposition = [...gradeComposition];
        const updatedComposition = copyComposition.filter(element => {
            return element.index != index;
        })

        //Update Categories
        changeGradeComposition(updatedComposition);
    }

    /* Edit Course Description */
    const editGradeComposition = (data) => {
        try {
            //Frontend: Edit Course Description

            //Update State Value

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error);
        }
        handleCloseBackdrop();
    }

    const categories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                /* onSubmit={handleSubmit(editGradeComposition)} */
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            px: 1,
                            color: 'primary.main',
                            borderRadius: '5px',
                            bgcolor: 'primary.light',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700',
                            }}
                        >
                            {"Grade Composition"}
                        </Typography>
                    </Box>
                    {/* Stack Form Will Go Here !!!!!! */}
                    {gradeComposition.map(gradeComp => {
                        const { category, percentage } = gradeComp;
                        return (
                            <Stack
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
                    })}
                    
                    <Box
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'flex',
                                tablet: 'flex',
                                desktop: 'flex',
                            },
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant="text"
                            startIcon={<Edit />}
                            type="submit"
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {"Edit"}
                        </Button> 
                    </Box>
                    <Box
                        sx={{
                            display: {
                                fold: 'flex',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'none',
                            },
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            type="submit"
                            size="small"
                            variant="text"
                            startIcon={<Edit />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {"Edit"}
                        </Button> 
                    </Box>
                </Stack>
            </form>
        </Dialog>

    )
}

export default EditGradeCompBackdrop;
