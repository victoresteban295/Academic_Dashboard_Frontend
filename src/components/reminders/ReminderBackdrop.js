import { Popover, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const ReminderBackdrop = ({
    group,
    groupId,
    remindId,
    title,
    description,
    startDate,
    time,
    open,
    handleClose
}) => {
    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    /* Title State Value */
    const [newTitle, setNewTitle] = useState(title);
    const [isUpdating, setUpdating] = useState(false);

    /* Date State Value */
    const [date, setDate] = useState(null);

    const modifyTitle = () => {
        setUpdating(false);
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
            <Stack
                spacing={1}
                sx={{
                    display: 'flex',
                    maxWidth: '350px',
                    p: 2,
                }}
            >
                <InputBase
                    value={isUpdating ? newTitle : title}
                    placeholder="Add Reminder's Title"
                    onChange={(e) =>{
                        setUpdating(true);
                        setNewTitle(e.target.value)
                    }}
                    onBlur={modifyTitle}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            e.target.blur();
                        }
                    }}
                    inputProps={{maxLength: 25}}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '700',
                        flexGrow: 4,
                    }}
                />
                <DatePicker 
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    sx={{
                        color: '#000',
                        fontWeight: '700',
                    }}
                />
                
            </Stack>
        </Popover>
    )
}

export default ReminderBackdrop;
