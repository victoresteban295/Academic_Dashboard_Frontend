import { Box, Typography } from "@mui/material";

const Upcoming = ({ 
    upcomingSize,
    currentReminders,
    handleCurrentReminders
}) => {

    /* Currently Being Viewed By User */
    let isActive;
    const isCurrent = (currentReminders === 'upcoming');
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
        handleCurrentReminders('upcoming');
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                p: 1,
                cursor: 'pointer',
                width: '100px',
                ...isActive,
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    justifySelf: 'flex-start', 
                    fontWeight: '700',
                }}
            >
                {"Upcoming"}
            </Typography>
            <Typography
                variant="h6"
                align='right'
            >
                {upcomingSize}
            </Typography>
        </Box>
    )
}

export default Upcoming;
