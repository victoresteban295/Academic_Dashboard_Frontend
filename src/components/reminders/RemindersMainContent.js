import GroupedReminders from "./RemindersMainContent/GroupedReminders";
import TodaysReminders from "./RemindersMainContent/TodaysReminders";
import UpcomingReminders from "./RemindersMainContent/UpcomingReminders";

const RemindersMainContent = ({
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
            <TodaysReminders 
                todayReminders={todayReminders}
                changeTodayReminders={changeTodayReminders}
                handleOpenAlert={handleOpenAlert}
            />
            <UpcomingReminders 
                upcomingReminders={upcomingReminders}
                changeUpcomingReminders={changeUpcomingReminders}
                handleOpenAlert={handleOpenAlert}
            />
            <GroupedReminders 
                groups={groups}
                changeGroups={changeGroups}
                handleOpenAlert={handleOpenAlert}
            />

        </>
    )
}

export default RemindersMainContent;
