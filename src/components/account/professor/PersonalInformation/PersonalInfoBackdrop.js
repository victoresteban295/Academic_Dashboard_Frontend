import { academicRoles, departments } from "@/lib/data/account/professor";
import { ProfAccountSchema } from "@/lib/schemas/AccountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const PersonalInfoBackdrop = ({ 
    open, 
    handleClose,
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    changeAccount,
    handleOpenAlert
}) => {
    const generateYears = () => {
        let currentYear = new Date().getFullYear();
        let years = [];
        for(let i = 0; i < 100; i++) {
            years.push(currentYear);
            currentYear--;
        }
        return years;
    }
    const years = generateYears();

    /* React Hook Form */
    const values = {
        department: department,
        academicRole: academicRole,
        apptYear: Number(apptYear),
        officeBuilding: officeBuilding,
        officeRoom: officeRoom
    }
    const { register, formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            department: department,
            academicRole: academicRole,
            apptYear: Number(apptYear),
            officeBuilding: officeBuilding,
            officeRoom: officeRoom
        },
        values,
        resolver: zodResolver(ProfAccountSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    const editAccount = (data) => {
        try {
            //Frontend: Edit Professor's Account Info
            const updatedData = {
                department: data.department,
                academicRole: data.academicRole,
                apptYear: data.apptYear,
                officeBuilding: data.officeBuilding,
                officeRoom: data.officeRoom,
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
                            {"Academic information about you as a professor"}
                        </Typography>
                    </Stack>
                    <FormControl fullWidth >
                        <Controller 
                            name="department"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.department}
                                        value={value}
                                        onChange={onChange}
                                        label='Department'
                                        helperText={errors.department?.message}
                                    >
                                    {departments.map((dept) => {
                                        return(
                                            <MenuItem
                                                key={dept} 
                                                value={dept}
                                            >
                                                {dept}
                                            </MenuItem>
                                        );
                                    })}
                                    </TextField>
                                )
                            }}
                        />
                    </FormControl>
                    <Stack
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
                                name="academicRole"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.academicRole}
                                            value={value}
                                            onChange={onChange}
                                            label='Academic Role'
                                            helperText={errors.academicRole?.message}
                                        >
                                        {academicRoles.map((role) => {
                                            return(
                                                <MenuItem 
                                                    key={role} 
                                                    value={role}
                                                >
                                                    {role}
                                                </MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth >
                            <Controller
                                name="apptYear"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <TextField
                                            select
                                            error={!!errors.apptYear}
                                            value={value}
                                            onChange={onChange}
                                            label='Appointed Year'
                                            helperText={errors.apptYear?.message}
                                        >
                                        {years.map((year) => {
                                            return(
                                                <MenuItem 
                                                    key={year} 
                                                    value={year}
                                                >
                                                    {year}
                                                </MenuItem>
                                            );
                                        })}
                                        </TextField>
                                    )
                                }}
                            />
                        </FormControl>
                    </Stack>
                    <Stack
                        id="office-input-field-group"
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
                            id="office-building-input-field"    
                            sx={{flexGrow: 1}} 
                            label="Office Building" 
                            variant="outlined" 
                            error={!!errors.officeBuilding}
                            helperText={errors.officeBuilding?.message}
                            {...register('officeBuilding')}
                        />
                        <TextField 
                            id="room-number-input-field" 
                            sx={{flexGrow: 1}} 
                            label="Room #" 
                            variant="outlined" 
                            error={!!errors.officeRoom}
                            helperText={errors.officeRoom?.message}
                            {...register('officeRoom')}
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

export default PersonalInfoBackdrop;
