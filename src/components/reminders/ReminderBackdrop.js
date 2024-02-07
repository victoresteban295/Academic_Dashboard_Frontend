import { Box, Button, Divider, FormControl, InputBase, MenuItem, Popover, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
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
    }

    const defaultDate = (startDate === "") ? null : dayjs(startDate, "MM/DD/YYYY");
    const defaultTime = (time === "") ? null : dayjs(time, "h:mm A");

    /* React Hook Form */
    const { register, formState, control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title: title,
            groups: groupId,
            date: defaultDate,
            time: defaultTime,
            description: description
        }
    });
    const { errors } = formState;

    /* Title State Value */
    const [newTitle, setNewTitle] = useState(title);

    const modifyTitle = () => {
    }

    const submitReminder = (data) => {
        console.log(data.date.format("MM/DD/YYYY"));
        console.log(data.time.format("h:mm A"));
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
                noValidate
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
                        <InputBase
                            value={newTitle}
                            autoFocus={title === ""}
                            placeholder="Add Reminder's Title"
                            onChange={(e) =>{
                                setNewTitle(e.target.value)
                            }}
                            onBlur={modifyTitle}
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
                        <Divider />
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
                                    {groups.map((grp) => {
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
                                    <DatePicker 
                                        label="Date"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
                        <Controller 
                            name="time"
                            control={control}
                            render={({field: { onChange, value}}) => {
                                return (
                                    <TimePicker 
                                        label="Time"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
                    </Stack>
                    <TextField 
                        label="Description"
                        multiline
                        rows={4}
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
