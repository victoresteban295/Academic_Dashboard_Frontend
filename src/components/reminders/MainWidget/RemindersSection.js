import { Box, Divider, Stack, Typography } from "@mui/material";
import Reminder from "./Reminder";

const RemindersSection = ({ 
    reminders, 
    changeReminders, 
    currentReminders,
    handleOpenAlert 
}) => {

    return (
        <>
            {(reminders.length != 0) ? (
                <Stack
                    className='reminders-section'
                    spacing={2}
                    divider={<Divider flexItem />}
                    sx={{
                        width: '100%',
                        px: 2,
                    }}
                >
                        {reminders.map((reminder) => {
                            const { group, groupId, remindId, title, 
                                description, startDate, time } = reminder;
                            return (
                                <Reminder 
                                    key={remindId}
                                    group={group}
                                    groupId={groupId}
                                    remindId={remindId}
                                    title={title}
                                    description={description}
                                    startDate={startDate}
                                    time={time}
                                    changeReminders={changeReminders}
                                    currentReminders={currentReminders}
                                    handleOpenAlert={handleOpenAlert}
                                />
                            )
                        })}
                </Stack>
            ) : (
                <Box
                    className="No-Reminders-Section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        py: 4,
                    }}
                >
                    <Typography
                        variant='h6'
                        align="center"
                    >
                        No Reminders Left to Complete!
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default RemindersSection;
