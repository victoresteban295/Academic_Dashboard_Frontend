import RemindersPageContent from "@/components/reminders/RemindersPageContent";
import { groups, todayReminders, upcomingReminders } from "@/lib/data/reminders";

export const metadata = {
    title: "Reminders",
    themeColor: '#78a1bb'
}

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
