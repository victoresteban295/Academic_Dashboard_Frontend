import { SyllabusSection } from "@/lib/schemas/courseSchema";
import { deleteSection, editSection } from "@/lib/utils/courses/frontend/modifySyllabus";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const EditInfoSectionBackdrop = ({ 
    open, 
    handleClose, 
    index, 
    title,
    info, 
    infos,
    changeInfoSections,
    handleOpenAlert 
}) => {

    /* React Hook Form */
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title: title,
            info: info,
        },
        resolver: zodResolver(SyllabusSection), //Zod Validation Schema
    });
    const { errors } = formState;


    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Edit Syllabus Section */
    const submitSyllabusSection = (data) => {
        try {
            //Frontend: Edit Syllabus Section
            const { updatedInfoSections } = editSection(index, data.title, data.info, infos);

            //Update State Value
            changeInfoSections(updatedInfoSections);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);
        }
        handleCloseBackdrop();
    }

    /* Delete Syllabus Section */
    const handleDeleteSection = () => {
        try {
            //Frontend: Delete Syllabus Section
            const { updatedInfoSections } = deleteSection(index, infos);

            //Update State Value
            changeInfoSections(updatedInfoSections);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);
        }
        handleCloseBackdrop();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(submitSyllabusSection)}
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >
                    <Controller 
                        name="title"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    variant="standard"
                                    value={value} 
                                    onChange={onChange}
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                    inputProps={{maxLength: 25}}
                                    fullWidth={true}
                                    autoFocus={true}
                                    placeholder="Syllabus Section Title..."
                                />
                            )
                        }}
                    />
                    <Controller 
                        name="info"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    value={value} 
                                    onChange={onChange}
                                    error={!!errors.info}
                                    helperText={errors.info?.message}
                                    inputProps={{maxLength: 1500}}
                                    fullWidth={true}
                                    multiline
                                    minRows={8}
                                    maxRows={8}
                                    placeholder="Syllabus Section description..."
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
                            justifyContent: index === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {index != "" && (
                            <Button
                                color="error"
                                variant="text"
                                startIcon={<Delete />}
                                onClick={handleDeleteSection}
                                sx={{
                                    fontWeight: '700',
                                    bgcolor: 'error.light'
                                }}
                            >
                                Delete
                            </Button> 
                        )}
                        <Button
                            variant="text"
                            startIcon={index === "" ? <Add /> : <Edit />}
                            type="submit"
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {index === "" ? "Create" : "Edit"}
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
                            justifyContent: index === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {index != "" && (
                            <Button
                                size="small"
                                color="error"
                                variant="text"
                                startIcon={<Delete />}
                                onClick={handleDeleteSection}
                                sx={{
                                    fontWeight: '700',
                                    bgcolor: 'error.light'
                                }}
                            >
                                Delete
                            </Button> 
                        )}
                        <Button
                            type="submit"
                            size="small"
                            variant="text"
                            startIcon={index === "" ? <Add /> : <Edit />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {index === "" ? "Create" : "Edit"}
                        </Button> 
                    </Box>
                </Stack>
            </form>
        </Dialog>
    )
}

export default EditInfoSectionBackdrop;
