import { ReminderSchema } from "@/lib/schemas/reminderSchema";
import { createReminder, editReminder } from "@/lib/utils/reminders/frontend/modifyReminders";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Dialog, Divider, FormControl, FormHelperText, InputBase, MenuItem, Popover, Stack, TextField, Typography } from "@mui/material";
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
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            type="submit"
                            variant='contained'
                        >
                            <Typography
                                variant='button'
                                sx={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}
                            >
                                {(title === "") ? "Create" : "Edit"}
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Dialog>
    )
}

export default ReminderBackdrop;
