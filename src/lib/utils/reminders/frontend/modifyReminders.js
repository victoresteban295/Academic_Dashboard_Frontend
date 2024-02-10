import dayjs from "dayjs";
import { nanoid } from "nanoid";

export const createReminder = (
    groupId, 
    title, 
    description, 
    date, 
    time, 
    groups, 
    todayReminders, 
    upcomingReminders) => {

    let updatedGroups = [...groups]
    let updatedToday = [...todayReminders];
    let updatedUpcoming;
    const todayDate = dayjs().format("MM/DD/YY");
    const dateTime = `${date}-${time}`

    //Define Group Name
    let groupTitle = "";
    if(groupId != "") {
        for(const group of groups) {
            if(group.groupId === groupId) {
                groupTitle = group.title;      
            }
        }
    }
    const remindId = nanoid(10);

    //Create Reminder Object
    const reminder = {
        group: groupTitle,
        groupId: groupId,
        remindId: remindId,
        title: title,
        description: description,
        startDate: date,
        time: time,
        iso8601: dayjs(dateTime, "MM/DD/YY-h:mm A").toISOString()
    }

    //Add Reminder to Upcoming Reminders
    //20 Groups X 20 Reminders per Groups = 400 Total Reminders Allowed
    if(upcomingReminders.length < 400) {
        updatedUpcoming = sortReminders([...upcomingReminders, reminder]);
    } else {
        throw new Error("Total Reminders Limit Exceeded");
    }

    //If Grouped, Add Reminder to Group
    if(groupId != "") { 
        updatedGroups.map(group => {
            if(group.groupId === groupId) {
                //Each Group is Limited to 20 Reminders
                if(group.reminders.length < 20) {
                    //Add New Reminder & Sort Reminders
                    const updatedReminders = sortReminders([...group.reminders, reminder]);
                    group.reminders = updatedReminders;
                } else {
                    throw new Error("Reminders Limit Exceeded: 20");
                }
            }
        })
    }

    //If Scheduled Today, Add Reminder to Today's Reminders
    if(todayDate === date) {
        updatedToday = sortReminders([...todayReminders, reminder]);
    }

    return {
        updatedGroups: updatedGroups,
        updatedUpcoming: updatedUpcoming,
        updatedToday: updatedToday
    }
}

const editReminder = (groupId, remindId, groups, todayReminders, upcomingReminders) => {
    let updatedGroups = [...groups]
    let updatedToday = [...todayReminders];
    let updatedUpcoming = [...upcomingReminders];

    //Define Group Name
    let groupTitle = "";
    if(groupId != "") {
        for(const group of groups) {
            if(group.groupId === groupId) {
                groupTitle = group.title;      
            }
        }
    }

    //Edit Reminder 
    updatedToday.map(reminder => {
        //Edit Reminder
        if(reminder.remindId === remindId) {
             
        }
    })

}

const sortReminders = (reminders) => {
    return reminders.sort((a, b) => new Date(a.iso8601) - new Date(b.iso8601))
}


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
