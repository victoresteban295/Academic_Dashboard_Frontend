import { majors, minors } from "@/lib/data/account/student";
import { StudAccountSchema } from "@/lib/schemas/AccountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const StudentInfoBackdrop = ({ 
    open,
    handleClose,
    gradeLvl,
    major,
    minor,
    concentration,
    changeAccount,
    handleOpenAlert
}) => {
    const academicYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

    /* React Hook Form */
    const values = {
        gradeLvl: gradeLvl,
        major: major,
        minor: minor,
        concentration: concentration
    }
    const { register, formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            gradeLvl: gradeLvl,
            major: major,
            minor: minor,
            concentration: concentration
        },
        values,
        resolver: zodResolver(StudAccountSchema), //Zod Validation Schema
    });
    const { errors } = formState;
    
    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Edit Student's Account */
    const editAccount = (data) => {
        try {
            let updatedMinor;
            if(data.minor === " ----- ") {
                updatedMinor = "";
            } else {
                updatedMinor = data.minor;
            }

            //Frontend: Edit Professor's Account Info
            const updatedData = {
                gradeLvl: data.gradeLvl,
                major: data.major,
                minor: updatedMinor,
                concentration: data.concentration,
            } 

            //Update State Value
            changeAccount(updatedData);
            handleCloseBackdrop();

            //Backend API: Update Database
            
        } catch(error) {
            handleOpenAlert(error.message);
        }
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(editAccount)} 
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >
                    <Stack
                        className="title-section"
                        spacing={0}
                        sx={{
                            width: '100%',
                            pb: 1,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                            }}
                        >
                            {"General Information"}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey',
                            }}
                        >
                            {"Academic information about you as a student"}
                        </Typography>
                    </Stack>
                    <FormControl fullWidth >
                        <Controller 
                            name="gradeLvl"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.gradeLvl}
                                        value={value}
                                        onChange={onChange}
                                        label='Grade Level'
                                        helperText={errors.gradeLvl?.message}
                                    >
                                    {academicYears.map((year) => {
                                        return(
                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                        );
                                    })}
                                    </TextField>
                                )
                            }}
                        />
                    </FormControl>
                    <Stack
                        className="input-field-group"
                        direction={{
                            fold: 'column',
                            mobile: 'column',
                            tablet: 'row',
                            desktop: 'row',
                        }}
                        spacing={2}
                        useFlexGap
                    >
                        <FormControl fullWidth >
                            <Controller 
                                name="major"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.major}
                                            value={value}
                                            onChange={onChange}
                                            label='Major'
                                            helperText={errors.major?.message}
                                        >
                                        {majors.map((major) => {
                                            return(
                                                <MenuItem key={major} value={major}>{major}</MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <Controller 
                                name="minor"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.minor}
                                            value={value}
                                            onChange={onChange}
                                            label='Minor'
                                            helperText={errors.minor?.message}
                                        >
                                        {minors.map((minor) => {
                                            return(
                                                <MenuItem key={minor} value={minor}>{minor}</MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Stack>
                    <TextField 
                        id="concentration-input-field"
                        label="Concentration" 
                        variant="outlined" 
                        error={!!errors.concentration}
                        helperText={errors.concentration?.message}
                        {...register('concentration')}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            type="submit"
                            variant="text"
                            startIcon={<EditOutlined />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light',
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

export default StudentInfoBackdrop;
