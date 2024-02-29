import { CourseSchedule } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, FormHelperText, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const EditScheduleBackdrop = ({ 
    open, 
    handleClose, 
    index,
    location,
    days,
    strTime,
    endTime,
    handleOpenAlert 
}) => {

    /* React Hook Form */
    const start = (strTime === "") ? null : dayjs(strTime, "h:mm A");
    const end = (endTime === "") ? null : dayjs(endTime, "h:mm A");
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            location: location,
            strTime: start,
            endTime: end,
            days: ["Mon", "Tue"],

        },
        resolver: zodResolver(CourseSchedule), //Zod Validation Schema
    });
    const { errors } = formState;


    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Create/Edit Course's Schedule */
    const modifySchedule = (data) => {
        try {
            //Frontend: Modify Course Schedule 

            //Update State Value

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
                onSubmit={handleSubmit(modifySchedule)}
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
                                    }}
                                >
                                    <ToggleButton 
                                        value="Mon"
                                    >
                                        Mon
                                    </ToggleButton>
                                    <ToggleButton 
                                        value="Tue"
                                    >
                                        Tue
                                    </ToggleButton>
                                    <ToggleButton 
                                        value="Wed"
                                    >
                                        Wed
                                    </ToggleButton>
                                    <ToggleButton 
                                        value="Thu"
                                    >
                                        Thu
                                    </ToggleButton>
                                    <ToggleButton 
                                        value="Fri"
                                    >
                                        Fri
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            )
                        }}
                    />
                    <ToggleButtonGroup
                        size="small"
                        fullWidth={true}
                        sx={{
                            display: {
                                fold: "flex",
                                mobile: "none",
                                tablet: "none",
                                desktop: "none",
                            }
                        }}
                    >
                        <ToggleButton 
                            value="Mon"
                        >
                            M
                        </ToggleButton>
                        <ToggleButton 
                            value="Tue"
                        >
                            T
                        </ToggleButton>
                        <ToggleButton 
                            value="Wed"
                        >
                            W
                        </ToggleButton>
                        <ToggleButton 
                            value="Thu"
                        >
                            R
                        </ToggleButton>
                        <ToggleButton 
                            value="Fri"
                        >
                            F
                        </ToggleButton>
                    </ToggleButtonGroup>
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
