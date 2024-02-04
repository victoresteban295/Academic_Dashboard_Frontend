import { FileDownloadDone, MoreVert } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";

const Reminder = ({
    group, 
    groupId, 
    remindId, 
    title, 
    description, 
    startDate, 
    time, 
    changeReminders, 
    currentReminders,
    handleOpenAlert 
}) => {

    return (
        <Stack
            sx={{
            }}
        >
            {/* Reminder's Title & Options Section */}
            <Box
                className="title-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    {title}
                </Typography>
                <Box
                    className="reminder-options"
                    sx={{
                        display: 'flex',
                        ml: 2,
                    }}
                >
                    <Tooltip
                        title="Mark As Complete"
                    >
                        <IconButton
                            size='small'
                        >
                            <FileDownloadDone fontSize='inherit'/> 
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title="Options"
                    >
                        <IconButton
                            size='small'
                        >
                            <MoreVert fontSize='inherit'/> 
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* Reminder's Group, Date, & Time Section */}
            <Stack
                className="group-date-time-section"
                direction={{xs: 'column', sm: 'row'}}
                alignItems={{xs: 'flex-start', sm: 'center'}}
                spacing={{xs: 0, sm: 1}}
            >
                {(currentReminders != groupId) && (
                    <Typography
                        variant='body1'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {`${group}:`}
                    </Typography>
                )}
                <Typography
                    variant='subtitle1'
                >
                    {`${startDate}, ${time}`}
                </Typography>
            </Stack>

            {/* Reminder's Group, Date, & Time Section */}
            <Typography
                variant="body1"
            >
                {description}
            </Typography>
        </Stack>
    )
}

export default Reminder;
