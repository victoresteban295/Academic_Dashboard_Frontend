import { Stack } from "@mui/material";
import RemindersSection from "../RemindersSection";
import GroupedTitleSection from "./GroupedTitleSection";

const GroupedReminders = ({
    groupId,
    title,
    reminders,
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
    
    return (
        <>
            {(currentReminders === groupId) && (
                <Stack
                    className="grouped-reminders-widget"
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    <GroupedTitleSection
                        groupId={groupId}
                        title={title}
                        reminders={reminders}
                        todayReminders={todayReminders} 
                        changeTodayReminders={changeTodayReminders}
                        upcomingReminders={upcomingReminders}
                        changeUpcomingReminders={changeUpcomingReminders}
                        groups={groups}
                        changeGroups={changeGroups}
                        currentReminders={currentReminders}
                        handleCurrentReminders={handleCurrentReminders}
                        handleOpenAlert={handleOpenAlert}
                    />
                    <RemindersSection 
                        todayReminders={todayReminders}
                        changeTodayReminders={changeTodayReminders}
                        upcomingReminders={upcomingReminders}
                        changeUpcomingReminders={changeUpcomingReminders}
                        groups={groups}
                        changeGroups={changeGroups}
                        reminders={reminders}
                        currentReminders={currentReminders}
                        handleCurrentReminders={handleCurrentReminders}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
            )}
        </>
    )
}

export default GroupedReminders;
