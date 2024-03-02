import { CourseSchedule } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, FormHelperText, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const TaskBackdrop = ({ 
    open, 
    handleClose, 
    taskId,
    title,
    handleOpenAlert 
}) => {

    /* React Hook Form */
    const { formState, control, handleSubmit, reset, getValues } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title : title,
        },
        values,
        resolver: zodResolver(CourseSchedule), //Zod Validation Schema
    });
    const { errors } = formState;

    //Task Values
    const tasks = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];
    //Due Values
    const dues = ["Before Class", "During Class", "After Class", "Start of Day", "End of Day", "Time"];
    const selectedTime = getValues('')

    const values = {
        title: title,
    }

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    /* Create/Edit Task */
    const handleModifyTask = (data) => {
        try {
            //Frontend: Modify Task 

            //Update State Value

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error);
        }
        handleCloseBackdrop();
    }

    /* Delete Task */
    const handleDeleteTask = () => {
        try {
            //Frontend: Delete Task 

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
                onSubmit={handleSubmit(handleModifyTask)}
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
                                    inputProps={{maxLength: 50}}
                                    fullWidth={true}
                                    autoFocus={true}
                                    placeholder="Task's Title..."
                                />
                            )
                        }}
                    />
                    <FormControl fullWidth >
                        <Controller
                            name="task"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.task}
                                        value={value}
                                        onChange={onChange}
                                        label='Task'
                                        helperText={errors.task?.message}
                                    >
                                        {tasks.map((task) => {
                                            return(
                                                <MenuItem
                                                    key={task} 
                                                    value={task}
                                                >
                                                    {task}
                                                </MenuItem>
                                            );
                                        })}
                                    </TextField>
                                )
                            }}
                        />
                    </FormControl>
                    <Controller
                        name="due"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <FormControl 
                                    fullWidth
                                >
                                    <TextField
                                        select
                                        error={!!errors.due}
                                        value={value}
                                        onChange={onChange}
                                        label='Due'
                                        helperText={errors.due?.message}
                                    >
                                    {dues.map((option) => {
                                        return(
                                            <MenuItem
                                                key={option} 
                                                value={option}
                                            >
                                                {option}
                                            </MenuItem>
                                        );
                                    })}
                                    </TextField>
                                </FormControl>
                            )
                        }}
                    />
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Controller 
                            name="date"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl fullWidth>
                                        <DatePicker
                                            label="Date"
                                            value={value}
                                            onChange={onChange}
                                            slotProps = {{
                                                textField: {
                                                    error: !!errors.date,
                                                }
                                            }}
                                        />
                                        <FormHelperText
                                            error={!!errors.date}
                                        >
                                            {errors.date?.message}
                                        </FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                        <Controller 
                            name="time"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl fullWidth>
                                        <TimePicker
                                            label="Time"
                                            value={value}
                                            onChange={onChange}
                                            slotProps = {{
                                                textField: {
                                                    error: !!errors.time,
                                                }
                                            }}
                                        />
                                        <FormHelperText
                                            error={!!errors.time}
                                        >
                                            {errors.time?.message}
                                        </FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                    </Stack>
                    <Controller 
                        name="note"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    label="Note"
                                    value={value} 
                                    onChange={onChange}
                                    error={!!errors.note}
                                    helperText={errors.note?.message}
                                    inputProps={{maxLength: 250}}
                                    fullWidth={true}
                                    multiline
                                    minRows={4}
                                    maxRows={4}
                                    placeholder="Task's Note..."
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
                            justifyContent: taskId === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {taskId != "" && (
                            <Button
                                color="error"
                                onClick={handleDeleteTask}
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
                            startIcon={taskId === "" ? <Add /> : <Edit />}
                            type="submit"
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {taskId === "" ? "Create" : "Edit"}
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
                            justifyContent: taskId === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {taskId != "" && (
                            <Button
                                size="small"
                                onClick={handleDeleteTask}
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
                            startIcon={taskId === "" ? <Add /> : <Edit />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {taskId === "" ? "Create" : "Edit"}
                        </Button> 
                    </Box>
                </Stack>
            </form>
        </Dialog>
    )
}

export default TaskBackdrop;
