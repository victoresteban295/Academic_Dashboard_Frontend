import { Box, Typography } from "@mui/material";

const Group = ({ 
    groupId, 
    title, 
    size, 
    currentReminders,
    handleCurrentReminders
}) => {

    /* Currently Being Viewed By User */
    let isActive;
    const isCurrent = (currentReminders === groupId);
    if(isCurrent) {
        isActive = {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#000'
        }
    } else {
        isActive = {
            boxShadow: '1px 1px 4px 2px #cecece'
        }
    }

    /* View Upcoming Reminders */
    const handleClick = () => {
        handleCurrentReminders(groupId);
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '10px',
                alignItems: 'center',
                cursor: 'pointer',
                p: 1,
                ...isActive,
            }}
        >
            <Typography
                variant="button"
            >
                {title}
            </Typography>
            <Typography
                variant="button"
                sx={{
                }}
            >
                {size}
            </Typography>
        </Box>
    )
}

export default Group;
