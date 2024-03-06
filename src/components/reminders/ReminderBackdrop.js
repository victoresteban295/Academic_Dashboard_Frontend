import { ReminderSchema } from "@/lib/schemas/reminderSchema";
import { createReminder, deleteReminder, editReminder } from "@/lib/utils/reminders/frontend/modifyReminders";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button, Dialog, Divider, FormControl, FormHelperText, InputBase, MenuItem, Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const ReminderBackdrop = ({
    groupId,
    remindId, 
    title,
    description,
    date,
    time,
    open,
    handleClose,
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders,
    handleOpenAlert
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        reset(); //Reset Input Fields
    }

    /* Reminder's Group Options */
    const grps = [
        {
            title: "None",
            groupId: " ",
        },
        ...groups
    ]

    /* React Hook Form */
    const defaultDate = (date === "") ? null : dayjs(date, "MM/DD/YY");
    const defaultTime = (time === "") ? null : dayjs(time, "h:mm A");
    const { formState, control, handleSubmit, reset } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title: title,
            groups: groupId,
            date: defaultDate,
            time: defaultTime,
            description: description
        },
        resolver: zodResolver(ReminderSchema), //Zod Validation Schema
    });
    const { errors } = formState;
    let dividerColor;
    if(!!errors.title) {
        dividerColor = {
            bgcolor: 'error.main',
        }
    } else {
        dividerColor = {}
    }

    /* Create/Edit Reminder */
    const submitReminder = (data) => {
        handleCloseBackdrop();
        try {
            //Creating a New Reminder
            if(remindId === "") {
                //Frontend: Create a New Reminder
                const { updatedToday, updatedUpcoming, updatedGroups } = createReminder(
                    data.groups,
                    data.title,
                    data.description,
                    data.date.format("MM/DD/YY"),
                    data.time.format("h:mm A"),
                    groups,
                    todayReminders,
                    upcomingReminders);
                
                //Update State Value
                changeTodayReminders(updatedToday);
                changeUpcomingReminders(updatedUpcoming);
                changeGroups(updatedGroups);

                //Backend API: Update Database

            //Edit Reminder
            } else {
                //Frontend: Edit Reminder
                const { updatedToday, updatedUpcoming, updatedGroups } = editReminder(
                    data.groups, 
                    remindId,
                    data.title,
                    data.description,
                    data.date.format("MM/DD/YY"),
                    data.time.format("h:mm A"),
                    groups,
                    todayReminders,
                    upcomingReminders);

                //Update State Value
                changeTodayReminders(updatedToday);
                changeUpcomingReminders(updatedUpcoming);
                changeGroups(updatedGroups);

                //Refresh Default Values
                handleCurrentReminders("");
                setTimeout(() => {
                    handleCurrentReminders(currentReminders);
                }, 10)

                //Backend API: Update Database

            }
        } catch(error) {
            handleOpenAlert(error.message);

        }
    }

    /* Delete Reminder */
    const handleDeleteReminder = () => {
        try {
            //Frontend: Delete Reminder
            const { 
                updatedGroups, 
                updatedToday, 
                updatedUpcoming } = deleteReminder(groupId, remindId, groups, todayReminders, upcomingReminders);

            //Update State Value
            changeTodayReminders(updatedToday);
            changeUpcomingReminders(updatedUpcoming);
            changeGroups(updatedGroups);

            //Backend API: Update Database

        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(); //Add parameter
            changeUpcomingReminders();
            changeGroups();
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
                onSubmit={handleSubmit(submitReminder)}
            >
                <Stack
                    spacing={2}
                    sx={{
                        display: 'flex',
                        p: 2,
                    }}
                >
                    <Stack
                        spacing={0}
                    >
                        <Controller
                            name="title"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl>
                                        <InputBase
                                            value={value}
                                            autoFocus={title === ""}
                                            placeholder="Add Reminder's Title"
                                            error={!!errors.title}
                                            onChange={onChange}
                                            onKeyDown={(e) => {
                                                if(e.key === 'Enter') {
                                                    e.target.blur();
                                                }
                                            }}
                                            inputProps={{maxLength: 50}}
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: '700',
                                                flexGrow: 4,
                                            }}
                                        />
                                        <Divider 
                                            sx={{
                                                ...dividerColor,
                                            }}
                                        />
                                        <FormHelperText
                                            error={!!errors.title}
                                        >
                                            {errors.title?.message}
                                        </FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                    </Stack>
                    <FormControl  
                        fullWidth
                    >
                        <Controller
                            name="groups"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TextField
                                        select
                                        error={!!errors.groups}
                                        value={value}
                                        onChange={onChange}
                                        label='Group'
                                        helperText={errors.groups?.message}
                                    >
                                    {grps.map((grp) => {
                                        const { title, groupId } = grp;
                                        return(
                                            <MenuItem
                                                key={groupId} 
                                                value={groupId}
                                            >
                                                {title}
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
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Controller 
                            name="date"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <FormControl>
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
                                    <FormControl>
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
                        name="description"
                        control={control}
                        render={({field: { onChange, value}}) => {
                            return (
                                <TextField 
                                    label="Description"
                                    value={value}
                                    onChange={onChange}
                                    multiline
                                    inputProps={{maxLength: 250}}
                                    rows={4}
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
                            justifyContent: remindId === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {remindId != "" && (
                            <Button
                                color="error"
                                variant="text"
                                onClick={handleDeleteReminder}
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
                            startIcon={remindId === "" ? <Add /> : <Edit />}
                            type="submit"
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {remindId === "" ? "Create" : "Edit"}
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
                            justifyContent: remindId === "" ? 'flex-end' : 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {remindId != "" && (
                            <Button
                                size="small"
                                color="error"
                                onClick={handleDeleteReminder}
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
                            startIcon={remindId === "" ? <Add /> : <Edit />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light'
                            }}
                        >
                            {remindId === "" ? "Create" : "Edit"}
                        </Button> 
                    </Box>
                </Stack>
            </form>
        </Dialog>
    )
}

export default ReminderBackdrop;
