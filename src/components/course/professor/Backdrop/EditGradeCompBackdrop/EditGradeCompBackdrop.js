import { Edit, RestartAltOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, Divider, Stack, Typography } from "@mui/material";
import Category from "./Category";
import NewCategory from "./NewCategory";
import { useState } from "react";

const EditGradeCompBackdrop = ({
    open,
    handleClose,
    gradeComposition
}) => {

    /* Clone Grade Composition Object */
    const copyGradeComposition = [];
    for(const element of gradeComposition) {
        const grade = structuredClone(element);
        copyGradeComposition.push(grade);
    }

    //Does Total Percentage equal 100
    const [percentAlert, setAlert] = useState(false);

    //Grade Composition's Categories
    const [updatedGradeComp, setUpdatedGradeComp] = useState(copyGradeComposition);

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        setAlert(false);
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

    /* Add New Category */
    const addCategory = (category, percentage) => {
        const newCategory = {
            category: category,
            percentage: percentage
        }
        const copyComposition = [...updatedGradeComp, newCategory];

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

    /* Reset Category Options */
    const resetComposition = () => {
        setUpdatedGradeComp([]);
    }

    /* Edit Grade Composition */
    const editGradeComposition = () => {
        const percentages = [];
        for(const element of updatedGradeComp) {
            percentages.push(element.percentage);
        }

        let totalPercentage = 0;
        for(const element of percentages) {
            totalPercentage = totalPercentage + element ;
        }

        if(totalPercentage === 100) {
            setAlert(false);
            handleOpenWarnDemo();
        } else {
            setAlert(true);
        }
    }

    /* Categories That Have Been Selected */
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
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        width: '100%',
                        display: percentAlert ? "flex" : "none",
                        py: 0.5,
                        px: 2,
                        borderRadius: '5px',
                        bgcolor: 'error.light',
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            fontWeight: '700',
                            color: 'error.main'
                        }}
                    >
                        {"Percentages Must Add Up to 100"}
                    </Typography>
                </Stack>
                {/* Added Categories */}
                {updatedGradeComp.map(gradeComp => {
                    const { category, percentage } = gradeComp;
                    return (
                        <Category 
                            key={category}
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
                    sx={{
                        display: (updatedGradeComp.length === 4) || (updatedGradeComp.length === 0) ? 'none' : 'flex',
                    }}
                />
                <NewCategory 
                    compositionLength={updatedGradeComp.length}
                    takenCategories={takenCategories}
                    addCategory={addCategory}
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
                        onClick={resetComposition}
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
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        size="small"
                        variant="text"
                        onClick={resetComposition}
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
