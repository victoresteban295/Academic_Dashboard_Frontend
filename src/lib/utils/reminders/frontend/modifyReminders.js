export const deleteReminder = (groupId, remindId, groups, todayReminders, upcomingReminders) => {
    let updatedGroups = [...groups];
    let updatedToday;
    let updatedUpcoming;

    //Reminder is Not Grouped
    if(groupId === "") {
        //Filter Out Reminder Getting Deleted
        updatedUpcoming = upcomingReminders.filter(reminder => {
            return reminder.remindId != remindId;
        })
        updatedToday = todayReminders;
    } else {
        //Filter Out Reminder Getting Deleted
        updatedToday = todayReminders.filter(reminder => {
            return reminder.remindId != remindId;
        })
        updatedUpcoming = upcomingReminders.filter(reminder => {
            return reminder.remindId != remindId;
        })

        //Delete Reminder found in Group
        updatedGroups.map(group => {
            //Find Group
            if(group.groupId === groupId) {
                let updatedReminders = [...group.reminders]
                //Filter Out Reminder Getting Deleted
                group.reminders = updatedReminders.filter(reminder => {
                    return reminder.remindId != remindId;
                })
            } 
        })
    }

    return {
        updatedGroups: updatedGroups,
        updatedToday: updatedToday,
        updatedUpcoming: updatedUpcoming
    }
}
