import { OfficeHrsSchema } from "@/lib/schemas/AccountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, EditOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, FormHelperText, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const OfficeHrsBackdrop = ({ 
    open, 
    handleClose,
    index,
    location,
    room,
    strTime,
    endTime,
    days,
    officeHrs,
    changeOfficeHrs
}) => {

    const start = (strTime === "") ? null : dayjs(strTime, "h:mm A");
    const end = (endTime === "") ? null : dayjs(endTime, "h:mm A");

    const values = {
        location: location,
        room: room,
        strTime: start,
        endTime: end,
        days: days,
    }

    /* React Hook Form */
    const { register, formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            location: location,
            room: room,
            strTime: start,
            endTime: end,
            days: days,

        },
        values,
        resolver: zodResolver(OfficeHrsSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    const modifyOfficeHrs = (data) => {
        try {
            //Frontend: Edit Professor's Account Info
            const updatedData = {
                index: officeHrs.length.toString(),
                location: data.location,
                room: data.room,
                startTime: data.strTime.format("h:mm A"),
                endTime: data.endTime.format("h:mm A"),
                days: data.days,
            } 

            //Update State Value
            changeOfficeHrs([...officeHrs, updatedData]);
            handleCloseBackdrop();

            //Backend API: Update Database
            
        } catch(error) {
        }
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(modifyOfficeHrs)} 
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
                            {"Office Hours"}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey',
                            }}
                        >
                            {"Time frame in which students can visit your office for academic assistance"}
                        </Typography>
                    </Stack>
                    <Stack
                        id="office-input-field-group"
                        className="input-field-group"
                        direction="column"
                        spacing={2}
                        useFlexGap
                    >
                        <TextField 
                            id="office-building-input-field"    
                            sx={{flexGrow: 1}} 
                            label="Location" 
                            variant="outlined" 
                            error={!!errors.location}
                            helperText={errors.location?.message}
                            {...register('location')}
                        />
                        <TextField
                            id="room-number-input-field" 
                            sx={{flexGrow: 1}} 
                            label="Room #" 
                            variant="outlined" 
                            error={!!errors.room}
                            helperText={errors.room?.message}
                            {...register('room')}
                        />
                    </Stack>
                    <Stack
                        direction={{
                            fold: "column",
                            mobile: "row",
                            tablet: "row",
                            desktop: "row",
                        }}
                        spacing={2}
                    >
                        <Controller 
                            name="strTime"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl>
                                        <TimePicker 
                                            label="Start Time"
                                            value={value}
                                            onChange={onChange}
                                            slotProps = {{
                                                textField: {
                                                    error: !!errors.strTime,
                                                }
                                            }}
                                        />
                                        <FormHelperText
                                            error={!!errors.strTime}
                                        >
                                            {errors.strTime?.message}
                                        </FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                display: {
                                    fold: 'none',
                                    mobile: 'flex',
                                    tablet: 'flex',
                                    desktop: 'flex',
                                },
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                align="center"
                                variant="h4"
                            >
                                {"-"}
                            </Typography>
                        </Box>
                        <Controller 
                            name="endTime"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl>
                                        <TimePicker 
                                            label="End Time"
                                            value={value}
                                            onChange={onChange}
                                            slotProps = {{
                                                textField: {
                                                    error: !!errors.endTime,
                                                }
                                            }}
                                        />
                                        <FormHelperText
                                            error={!!errors.endTime}
                                        >
                                            {errors.endTime?.message}
                                        </FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                    </Stack>
                    <Controller 
                        name="days"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <FormControl>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={value}
                                        onChange={(event, dates) => {
                                            onChange(dates);
                                        }}
                                        size="large"
                                        fullWidth={true}
                                        sx={{
                                            display: {
                                                fold: "none",
                                                mobile: "flex",
                                                tablet: "flex",
                                                desktop: "flex",
                                            },
                                            border: !!errors.days ? '1px solid' : 'none',
                                            borderColor: !!errors.days ? 'error.main' : 'none',
                                        }}
                                    >
                                        <ToggleButton 
                                            value="Mon"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Mon
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Tue"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Tue
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Wed"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Wed
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Thu"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Thu
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Fri"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                Fri
                                            </Typography>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    <FormHelperText
                                        error={!!errors.days}
                                        sx={{
                                            display: {
                                                fold: "none",
                                                mobile: "flex",
                                                tablet: "flex",
                                                desktop: "flex",
                                            },
                                        }}
                                    >
                                        {errors.days?.message}
                                    </FormHelperText>
                                </FormControl>
                            )
                        }}
                    />
                    <Controller 
                        name="days"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <FormControl>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={value}
                                        onChange={(event, dates) => {
                                            onChange(dates);
                                        }}
                                        size="small"
                                        fullWidth={true}
                                        sx={{
                                            display: {
                                                fold: "flex",
                                                mobile: "none",
                                                tablet: "none",
                                                desktop: "none",
                                            },
                                            border: !!errors.days ? '1px solid' : 'none',
                                            borderColor: !!errors.days ? 'error.main' : 'none',
                                        }}
                                    >
                                        <ToggleButton 
                                            value="Mon"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                M
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Tue"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                T
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Wed"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                W
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Thu"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                R
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Fri"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: '700',
                                                }}
                                            >
                                                F
                                            </Typography>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    <FormHelperText
                                        error={!!errors.days}
                                        sx={{
                                            display: {
                                                fold: "flex",
                                                mobile: "none",
                                                tablet: "none",
                                                desktop: "none",
                                            },
                                        }}
                                    >
                                        {errors.days?.message}
                                    </FormHelperText>
                                </FormControl>
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
                            justifyContent: (index === "") ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {index != "" && (
                            <Button
                                color="error"
                                variant="text"
                                startIcon={<Delete />}
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
                            startIcon={index === "" ? <Add /> : <EditOutlined />}
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
                            justifyContent: (index === "") ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {index != "" && (
                            <Button
                                size="small"
                                color="error"
                                variant="text"
                                startIcon={<Delete />}
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
                            startIcon={index === "" ? <Add /> : <EditOutlined />}
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

export default OfficeHrsBackdrop;
