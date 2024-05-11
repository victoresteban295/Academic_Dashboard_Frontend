import { Edit, RestartAltOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, Divider, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Category from "./Category";
import NewCategory from "./NewCategory";
import { GradeCompSchema } from "@/lib/schemas/courseSchema";
import { useState } from "react";

const EditGradeCompBackdrop = ({
    open,
    handleClose,
    gradeComposition,
    changeGradeComposition,
    handleOpenAlert
}) => {

    const [updatedGradeComp, setUpdatedGradeComp] = useState([...gradeComposition]);

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
    }

    /* Modify an Existing Category */
    const modifyComposition = (index, category, percentage) => {
        //Update Category 
        const composition = [...updatedGradeComp];
        for(const element of composition) {
            //Find & Update Category
            if(element.index === index) {
                element.category = category;
                element.percentage = percentage;
            }
        }
        
        //Update Categories
        setUpdatedGradeComp(composition)
    }

    /* Remove Category */
    const removeComposition = (index) => {
        //Filter Out Category Being Removed
        const copyComposition = [...updatedGradeComp];
        const updatedComposition = copyComposition.filter(element => {
            return element.index != index;
        })

        //Update Categories
        setUpdatedGradeComp(updatedComposition)
    }

    /* Edit Grade Composition */
    const editGradeComposition = (data) => {
        try {
            //Frontend: Edit Course Description

            //Update State Value
            changeGradeComposition(updatedGradeComp);
            console.log(gradeComposition); //Delete Later 


            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error);
        }
        handleCloseBackdrop();
    }

    const categories = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];

    const getCategories = () => {

    }

    const getPercentages = () => {

    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={editGradeComposition}
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
                    {/* Added Categories */}
                    {updatedGradeComp.map(gradeComp => {
                        const { index, category, percentage } = gradeComp;
                        return (
                            <Category 
                                index={index}
                                category={category}
                                percentage={percentage}
                                modifyComposition={modifyComposition}
                                removeComposition={removeComposition}
                            />
                        )
                    })}
                    <Divider 
                        flexItem
                    />
                    <NewCategory 
                    /> 
                    <Box
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'flex',
                                tablet: 'flex',
                                desktop: 'flex',
                            },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            variant="text"
                            startIcon={<RestartAltOutlined />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {"Reset"}
                        </Button> 
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
