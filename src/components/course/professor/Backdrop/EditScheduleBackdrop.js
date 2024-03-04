import { CourseSchedule } from "@/lib/schemas/courseSchema";
import { deleteSchedule, modifySchedule } from "@/lib/utils/courses/frontend/modifySchedule";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, FormHelperText, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const EditScheduleBackdrop = ({ 
    size,
    open, 
    handleClose, 
    index,
    location,
    days,
    strTime,
    endTime,
    schedules,
    changeSchedules,
    handleOpenAlert 
}) => {
    const start = (strTime === "") ? null : dayjs(strTime, "h:mm A");
    const end = (endTime === "") ? null : dayjs(endTime, "h:mm A");

    const values = {
        location: location,
        strTime: start,
        endTime: end,
        days: days,
    }

    /* React Hook Form */
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            location: location,
            strTime: start,
            endTime: end,
            days: days,

        },
        values,
        resolver: zodResolver(CourseSchedule), //Zod Validation Schema
    });
    const { errors } = formState;


    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Create/Edit Course's Schedule */
    const handleModifySchedule = (data) => {
        try {
            //Frontend: Modify Course Schedule 
            const { updatedSchedules } = modifySchedule(
                index, 
                data.location, 
                data.strTime.format("h:mm A"), 
                data.endTime.format("h:mm A"), 
                data.days, 
                schedules)

            //Update State Value
            changeSchedules(updatedSchedules);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);
        }
        handleCloseBackdrop();
    }

    /* Delete Course's Schedule */
    const handleDeleteSchedule = () => {
        try {
            //Frontend: Delete Course Schedule
            const { updatedSchedules } = deleteSchedule(index, schedules)

            //Update State Value
            changeSchedules(updatedSchedules);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error);
        }
        handleCloseBackdrop();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(handleModifySchedule)}
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >
                    <Controller 
                        name="location"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    variant="standard"
                                    value={value} 
                                    onChange={onChange}
                                    error={!!errors.location}
                                    helperText={errors.location?.message}
                                    inputProps={{maxLength: 30}}
                                    fullWidth={true}
                                    autoFocus={true}
                                    placeholder="Lecture Location..."
                                />
                            )
                        }}
                    />
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
                            justifyContent: (index === "") || (size === 1 ) ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {((index != "") && (size != 1)) && (
                            <Button
                                color="error"
                                onClick={handleDeleteSchedule}
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
                            justifyContent: (index === "") || (size === 1 ) ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {((index != "") && (size != 1)) && (
                            <Button
                                size="small"
                                onClick={handleDeleteSchedule}
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

export default EditScheduleBackdrop;
