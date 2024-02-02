import RemindersPageContent from "@/components/reminders/RemindersPageContent";
import { groups, todayReminders, upcomingReminders } from "@/lib/data/reminders";

const RemindersPage = () => {
    return (
        <>
            <RemindersPageContent 
                today={todayReminders} 
                upcoming={upcomingReminders}
                groupedReminders={groups}
            />
        </>
    )
}

export default RemindersPage;
