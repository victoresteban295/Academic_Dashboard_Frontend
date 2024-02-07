import { Stack } from "@mui/material";
import RemindersSection from "../RemindersSection";
import UpcomingTitleSection from "./UpcomingTitleSection";

const UpcomingReminders = ({
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
            {(currentReminders === "upcoming") && (
                <Stack
                    className="upcoming-reminders-widget"
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    <UpcomingTitleSection
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
                        groups={groups}
                        reminders={upcomingReminders}
                        changeReminders={changeUpcomingReminders}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
            )}
        </>
    )

}

export default UpcomingReminders;
