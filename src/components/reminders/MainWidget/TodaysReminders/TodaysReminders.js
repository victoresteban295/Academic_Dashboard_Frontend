import { Stack } from "@mui/material";
import RemindersSection from "../RemindersSection";
import TodaysTitleSection from "./TodaysTitleSection";

const TodaysReminders = ({
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
            {(currentReminders === "today") && (
                <Stack
                    className="todays-reminders-widget"
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    <TodaysTitleSection
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
                        reminders={todayReminders}
                        changeReminders={changeTodayReminders}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
            )}
        </>
    )

}

export default TodaysReminders;
