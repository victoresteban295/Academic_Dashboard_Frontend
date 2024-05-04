import { ProfContactSchema } from "@/lib/schemas/AccountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactInfoBackdrop = ({
    open,
    handleClose,
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    email,
    phone,
    changeAccount,
    handleOpenAlert
}) => {

    /* React Hook Form */
    const values = {
        email: email,
        phone: phone,
    }
    const { register, formState, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: email,
            phone: phone,
        },
        values,
        resolver: zodResolver(ProfContactSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Edit Contact Information */
    const editContact = (data) => {
        try {
            const updatedData = {
                department: department,
                academicRole: academicRole,
                apptYear: apptYear,
                officeBuilding: officeBuilding,
                officeRoom: officeRoom,
                email: data.email,
                phone: data.phone,
            }

            //Update State Value
            changeAccount(updatedData);
            handleCloseBackdrop();

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message)
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
                onSubmit={handleSubmit(editContact)}
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 1,
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
                        >
                            {"Contact Information"}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey',
                            }}
                        >
                            {"Add ways for students to contact you"}
                        </Typography>
                    </Stack>
                    <Stack
                        id="contact-input-field-group"
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
                        <TextField
                            id="email-input-field"    
                            sx={{flexGrow: 1}} 
                            label="Email" 
                            variant="outlined" 
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register('email')}
                        />
                        <TextField 
                            id="phone-input-field" 
                            sx={{flexGrow: 1}} 
                            label="Phone" 
                            variant="outlined" 
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            {...register('phone')}
                        />
                    </Stack>
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

export default ContactInfoBackdrop;
