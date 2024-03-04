import { CourseTask } from "@/lib/schemas/courseSchema";
import { deleteTask, modifyTasks } from "@/lib/utils/courses/frontend/modifyTasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, FormControl, FormHelperText, MenuItem, Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TaskBackdrop = ({ 
    open, 
    handleClose, 
    taskId,
    title,
    task,
    due,
    date,
    note,
    weeklyTasks,
    changeWeeklyTasks,
    handleOpenAlert 
}) => {

    /* Clone Each WeeklyTasks Object */
    const prevWeeklyTasks = [];
    for(const week of weeklyTasks) {
        const clone = structuredClone(week);
        prevWeeklyTasks.push(clone);
    }

    /* React Hook Form */
    const defaultDate = (date === "") ? null : dayjs(date, "MM/DD/YY");
    let defaultDue, defaultTime;
    if(due.includes("AM") || due.includes("PM")) {
        defaultDue = "Select Time"
        defaultTime = dayjs(due, "h:mm A");
    } else if(due === "") {
        defaultDue = "";
        defaultTime = null;
    } else {
        defaultDue = due;
        defaultTime = null;
    }
    const values = {
        title: title,
        task: task,
        date: defaultDate,
        due: defaultDue,
        time: defaultTime,
        note: note
    }
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title : title,
            task: task,
            date: defaultDate,
            due: defaultDue,
            time: defaultTime,
            note: note
        },
        values,
        resolver: zodResolver(CourseTask), //Zod Validation Schema
    });
    const { errors } = formState;

    //Task Values
    const tasks = ["Assignment", "Quiz", "Exam", "Project", "Paper", "Other"];
    //Due Values
    const dues = ["Before Class", "During Class", "After Class", "Start of Day", "End of Day", "Select Time"];
    const [selectedTime, setSelectedTime] = useState(defaultDue === "Select Time")


    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        setSelectedTime(false);
        reset();
    }

    /* Create/Edit Task */
    const handleModifyTask = (data) => {
        try {
            //Did User Select a Specific Time
            let due;
            if(data.due === 'Select Time') {
                due = data.time.format("h:mm A");
            } else {
                due = data.due;
            }

            //Frontend: Modify Task 
            const { updatedWeeklyTasks } = modifyTasks(
                taskId, 
                data.title, 
                data.task,
                data.date.format("MM/DD/YY"),
                due,
                data.note,
                weeklyTasks
            );

            //Update State Value
            changeWeeklyTasks(updatedWeeklyTasks);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);
            changeWeeklyTasks(prevWeeklyTasks);
        }
        handleCloseBackdrop();
    }

    /* Delete Task */
    const handleDeleteTask = () => {
        try {
            //Frontend: Delete Task 
            const { updatedWeeklyTasks } = deleteTask(taskId, date, weeklyTasks);

            //Update State Value
            changeWeeklyTasks(updatedWeeklyTasks);

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
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if(value === 'Select Time') {
                                                setSelectedTime(true);
                                            } else {
                                                setSelectedTime(false);
                                            }
                                            onChange(value);
                                        }}
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
                        direction={{
                            fold: "column",
                            mobile: "row",
                            tablet: "row",
                            desktop: "row",
                        }}
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
                        {selectedTime && (
                            <Controller 
                                name="time"
                                control={control}
                                render={({field: { onChange, value}}) => {
                                    return (
                                        <FormControl fullWidth>
                                            <TimePicker
                                                disabled={!selectedTime}
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
                        )}
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
                                    inputProps={{maxLength: 200}}
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
