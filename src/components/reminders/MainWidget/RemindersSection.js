import { Box, Stack, Typography } from "@mui/material";
import Reminder from "./Reminder";

const RemindersSection = ({ 
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    reminders,
    currentReminders,
    handleOpenAlert
}) => {

    return (
        <>
            {(reminders.length != 0) ? (
                <Stack
                    className='reminders-section'
                    spacing={2}
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
                                    todayReminders={todayReminders}
                                    changeTodayReminders={changeTodayReminders}
                                    upcomingReminders={upcomingReminders}
                                    changeUpcomingReminders={changeUpcomingReminders}
                                    groups={groups}
                                    changeGroups={changeGroups}
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
