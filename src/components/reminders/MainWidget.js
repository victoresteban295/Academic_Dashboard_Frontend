import GroupedReminders from "./MainWidget/GroupedReminders/GroupedReminders";
import TodaysReminders from "./MainWidget/TodaysReminders/TodaysReminders";
import UpcomingReminders from "./MainWidget/UpcomingReminders/UpcomingReminders";

const MainWidget = ({
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
                upcomingReminders={upcomingReminders}
                changeUpcomingReminders={changeUpcomingReminders}
                groups={groups}
                changeGroups={changeGroups}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
                handleOpenAlert={handleOpenAlert}
            />
            <UpcomingReminders
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
            {groups.map((group) => {
                const { groupId, title, reminders } = group;
                return (
                    <GroupedReminders
                        key={groupId}
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
                )
            })}

        </>
    )
}

export default MainWidget;
