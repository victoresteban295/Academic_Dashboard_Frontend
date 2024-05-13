import { Edit, RestartAltOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, Divider, Stack, Typography } from "@mui/material";
import Category from "./Category";
import NewCategory from "./NewCategory";
import { useState } from "react";

const EditGradeCompBackdrop = ({
    open,
    handleClose,
    gradeComposition,
    changeGradeComposition,
    handleOpenAlert
}) => {
    /* Clone Grade Composition Object */
    const copyGradeComposition = [];
    for(const element of gradeComposition) {
        const grade = structuredClone(element);
        copyGradeComposition.push(grade);
    }
    const [updatedGradeComp, setUpdatedGradeComp] = useState(copyGradeComposition);

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        setUpdatedGradeComp([...copyGradeComposition])
    }

    /* Feature Not Available in Demo Backdrop */
    const [openWarnDemo, setOpenWarnDemo] = useState(false);
    const handleOpenWarnDemo = () => {
        setOpenWarnDemo(true);
        setTimeout(() => {
            handleCloseWarnDemo();
            handleCloseBackdrop();
        }, "5000");
    }
    const handleCloseWarnDemo = () => {
        setOpenWarnDemo(false);
    }

    /* Update Category */
    const updateCategory = (oldCategory, newCategory) => {
        const copyComposition = [...updatedGradeComp];
        for(const element of copyComposition) {
            //Find & Update Category
            if(element.category === oldCategory) {
                element.category = newCategory;
            }
        }

        //Update Categories
        setUpdatedGradeComp(copyComposition);
    }

    /* Update Percentage */
    const updatePercentage = (category, percentage) => {
        const copyComposition = [...updatedGradeComp];
        for(const element of copyComposition) {
            //Find & Update Category
            if(element.category === category) {
                element.percentage = percentage;
            }
        }

        //Update Categories
        setUpdatedGradeComp(copyComposition);
    }

    /* Remove Category */
    const removeComposition = (category) => {
        //Filter Out Category Being Removed
        const copyComposition = [...updatedGradeComp];
        const updatedComposition = copyComposition.filter(element => {
            return element.category != category;
        })

        //Update Categories
        setUpdatedGradeComp(updatedComposition);
    }

    /* Edit Grade Composition */
    const editGradeComposition = () => {
        console.log(updatedGradeComp);
        handleOpenWarnDemo();
    }


    const getTakenCategories = () => {
        //Categories Not Available
        const takenCategories = [];
        for(const element of updatedGradeComp) {
            takenCategories.push(element.category);
        }

        return takenCategories
    }
    const takenCategories = getTakenCategories();


    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Dialog
                fullWidth={true}
                maxWidth="mobile"
                open={openWarnDemo}
            >
                <Box
                    sx={{
                        p: 2,
                    }}
                >
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Editing the Grade Composition is not available for Demo!"}
                    </Typography>
                </Box>
            </Dialog>
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
                                key={index}
                                takenCategories={takenCategories}
                                category={category}
                                percentage={percentage}
                                updateCategory={updateCategory}
                                updatePercentage={updatePercentage}
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
                            onClick={editGradeComposition}
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
                            onClick={editGradeComposition}
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
        </Dialog>

    )
}

export default EditGradeCompBackdrop;
