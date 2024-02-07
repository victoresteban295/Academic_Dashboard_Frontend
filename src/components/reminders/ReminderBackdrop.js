import { ReminderSchema } from "@/lib/schemas/reminderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Divider, FormControl, FormHelperText, InputBase, MenuItem, Popover, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

const ReminderBackdrop = ({
    group,
    groupId,
    remindId,
    title,
    description,
    startDate,
    time,
    open,
    groups,
    handleClose
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        reset(); //Reset Input Fields
    }

    const grps = [
        {
            title: "None",
            groupId: " ",
        },
        ...groups
    ]

    /* React Hook Form */
    const defaultDate = (startDate === "") ? null : dayjs(startDate, "MM/DD/YY");
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

    /* Submit Reminder */
    const submitReminder = (data) => {
        console.log(data.title);
        console.log(data.groups.trim());
        console.log(data.date.format("MM/DD/YY"));
        console.log(data.time.format("h:mm A"));
        console.log(data.description);
        handleCloseBackdrop();
    }

    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{ 
                mt: 10,
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
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
                        maxWidth: '500px',
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
                                        label='Groups'
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
                        direction={{ xs: 'column', sm: 'row'}}
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
        </Popover>
    )
}

export default ReminderBackdrop;
