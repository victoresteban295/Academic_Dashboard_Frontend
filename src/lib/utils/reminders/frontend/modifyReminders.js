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

    //If Scheduled Today or Overdue Date, Add Reminder to Today's Reminders
    const todayDate = dayjs().format("MM/DD/YY");
    const todayTime = "11:59 PM"
    const todayISO = dayjs(`${todayDate}-${todayTime}`, "MM/DD/YY-h:mm A").toISOString();
    const newDateISO = dayjs(`${date}-${time}`, "MM/DD/YY-h:mm A").toISOString();
    const isToday = (new Date(todayISO) - new Date(newDateISO));
    if(isToday >= 0) {
        updatedToday = sortReminders([...todayReminders, reminder]);
    }

    return {
        updatedGroups: updatedGroups,
        updatedUpcoming: updatedUpcoming,
        updatedToday: updatedToday
    }
}

export const editReminder = (
    groupId, 
    remindId, 
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

    //Today's Date and Time
    const todayDate = dayjs().format("MM/DD/YY");
    const todayTime = "11:59 PM"
    const todayISO = dayjs(`${todayDate}-${todayTime}`, "MM/DD/YY-h:mm A").toISOString();
    const newDateISO = dayjs(`${date}-${time}`, "MM/DD/YY-h:mm A").toISOString();

    //Define Group Name
    let groupTitle = "";
    if(groupId != "") {
        for(const group of groups) {
            if(group.groupId === groupId) {
                groupTitle = group.title;      
            }
        }
    }

    //Locate Reminder to Edit
    let reminder;
    for(const remind of upcomingReminders) {
        if(remind.remindId === remindId) {
            reminder = remind; 
        }
    }
    const oldGroupId = reminder.groupId;

    /* ******************************** */
    /* Edit Reminder in Today Reminders */
    /* ******************************** */

    // Today's Date - Reminder's Date
    // -> (+) Positive Num: Reminder's Date Today's Date or a Past Date
    // -> (-) Negative Num: Reminder's Date is a Future Date
    const isToday = (new Date(todayISO) - new Date(reminder.iso8601))
    //Is New Date Before or After Today's Date
    const isStillToday = (new Date(todayISO) - new Date(newDateISO))
    //Is Reminder in Today's Reminders
    if(isToday >= 0) {
        //New Date is either Today or Past Date
        //Remains in Today's Reminders
        if(isStillToday >= 0) {
            //Edit Reminder in Upcoming Reminders
            const todays = [...todayReminders];
            todays.map(remind => {
                //Locate & Edit Reminder
                if(remind.remindId === remindId) {
                    remind.group = groupTitle; 
                    remind.groupId = groupId;
                    remind.title = title;
                    remind.description = description;
                    remind.startDate = date;
                    remind.time = time;
                    remind.iso8601 = newDateISO;
                }
            })
            updatedToday = sortReminders([...todays]); //Sort Reminders

        //New Date is in the Future
        //Remove Reminder from Today's Reminders
        } else {
            //Filter Out Edited Reminder
            const todays = [...todayReminders];
            updatedToday = todays.filter(remind => {
                return remind.remindId != remindId;
            })
        }
    //Add Edited Reminder to Today's Reminder?
    } else if(isStillToday >= 0) {
        //Add Reminder to Today's Reminder
        const newReminder = {
            group: groupTitle,
            groupId: groupId,
            remindId: remindId,
            title: title,
            description: description,
            startDate: date,
            time: time,
            iso8601: newDateISO
        }
        const todays = [...todayReminders, newReminder];
        updatedToday = sortReminders(todays);
    }


    /* *********************************** */
    /* Edit Reminder in Upcoming Reminders */
    /* *********************************** */
    const upcoming = [...upcomingReminders];
    upcoming.map(remind => {
        //Locate & Edit Reminder
        if(remind.remindId === remindId) {
            remind.group = groupTitle; 
            remind.groupId = groupId;
            remind.title = title;
            remind.description = description;
            remind.startDate = date;
            remind.time = time;
            remind.iso8601 = newDateISO;
        }
    })
    updatedUpcoming = sortReminders([...upcoming]); //Sort Reminders

    /* *********************** */
    /* Edit Reminder in Groups */
    /* *********************** */

    //Did Reminder Change Groups
    //Reminder Remains in Same Group
    if(oldGroupId === groupId) {
        updatedGroups.map(grp => {
            //Locate Group
            if(grp.groupId === groupId) {
                const reminders = [...grp.reminders];
                //Locate Reminder
                for(const remind of reminders) {
                    //Edit Reminder
                    if(remind.remindId === remindId) {
                        remind.group = groupTitle; 
                        remind.groupId = groupId;
                        remind.title = title;
                        remind.description = description;
                        remind.startDate = date;
                        remind.time = time;
                        remind.iso8601 = newDateISO;
                    }
                }
                //Update and Sort Reminders Under Group
                grp.reminders = sortReminders(reminders);
            }
        })

    //Reminder Changed Groups
    } else {
        //Delete Reminder From Old Group
        updatedGroups.map(grp => {
            //Locate Old Group
            if(grp.groupId === oldGroupId) {
                const reminders = [...grp.reminders];
                //Remove Reminder From Old Group
                grp.reminders = reminders.filter(remind => {
                    return remind.remindId != remindId;
                })
            }
        })

        //Add Reminder to New Group
        updatedGroups.map(grp => {
            //Locate Group
            if(grp.groupId === groupId) {
                //Add Reminder to New Group
                const reminders = grp.reminders
                const newReminder = {
                    group: groupTitle,
                    groupId: groupId,
                    remindId: remindId,
                    title: title,
                    description: description,
                    startDate: date,
                    time: time,
                    iso8601: newDateISO
                }
                grp.reminders = sortReminders([...reminders, newReminder]);
            }
        })
    }

    return {
        updatedToday: updatedToday,
        updatedUpcoming: updatedUpcoming,
        updatedGroups: updatedGroups
    }
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
