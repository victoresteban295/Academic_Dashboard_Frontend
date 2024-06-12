import { CourseDescription } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import UnavailableBackdrop from "./UnavailableBackdrop";
import { useState } from "react";

const EditCourseDesBackdrop = ({ 
    open, 
    handleClose, 
    description
}) => {

    /* React Hook Form */
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            description: description,
        },
        resolver: zodResolver(CourseDescription), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Feature Not Available Warning */
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

    /* Edit Course Description */
    const editDescription = () => {
        handleOpenWarnDemo();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <UnavailableBackdrop
                open={openWarnDemo}
                message="Editing Course's Description Feature is not available for Demo"
            />
            <form
                onSubmit={handleSubmit(editDescription)}
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
                            {"Course Description"}
                        </Typography>
                    </Box>
                    <Controller 
                        name="description"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    value={value} 
                                    onChange={onChange}
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                    inputProps={{maxLength: 1500}}
                                    fullWidth={true}
                                    multiline
                                    minRows={8}
                                    maxRows={8}
                                    placeholder="Course Description..."
                                />
                            )
                        }}
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

export default EditCourseDesBackdrop;
