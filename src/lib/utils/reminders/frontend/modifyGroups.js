import { arrayMove } from "@dnd-kit/sortable";
import { nanoid } from "nanoid";

export const deleteGroup = (groupId, groups, todayReminders, upcomingReminders) => {
    let updatedGroups;
    let updatedToday;
    let updatedUpcoming;

    //Filter Out Group Getting Deleted
    updatedGroups = groups.filter(group => {
        return group.groupId != groupId;
    })

    //Filter Out Any Reminders Under Deleted Group
    updatedToday = todayReminders.filter(reminder => {
        return reminder.groupId != groupId;
    })
    updatedUpcoming = upcomingReminders.filter(reminder => {
        return reminder.groupId != groupId;
    })

    return {
        updatedGroups: updatedGroups,
        updatedToday: updatedToday,
        updatedUpcoming: updatedUpcoming
    }
}

export const createNewGroup = (groups, title) => {
    //User's Groups Limit is 20
    if(groups.length < 20) {
        //Create New Group Object
        const groupId = nanoid(10);
        const group = {
            groupId: groupId,
            title: title,
            reminders: []
        }

        //Add Group to Groups List
        let updatedGroups = [...groups, group];

        return {
            updatedGroups: updatedGroups,
            groupId: groupId,
        }
    //User Reached Groups Limit
    } else {
        throw new Error("Groups Limit Exceeded: 20");
    }
}

export const renameGroup = (groups, todayReminders, upcomingReminders, title, groupId) => {
    let updatedGroups = [...groups];
    let updatedToday = [...todayReminders];
    let updatedUpcoming = [...upcomingReminders];

    //Rename Group & its Reminders
    updatedGroups.map(group => {
        if(group.groupId === groupId) {
            //Rename Group's Title
            group.title = title;
            //Update Group's Title in Each Reminder 
            let updatedReminders = [...group.reminders];
            updatedReminders.map(reminder => {
                reminder.group = title;
            })
            group.reminders = updatedReminders;
        }
    }) 

    //Update Reminders in TodayReminders
    updatedToday.map(reminder => {
        if(reminder.groupId === groupId) {
            reminder.group = title;
        }
    })

    //Update Reminders in TodayReminders
    updatedUpcoming.map(reminder => {
        if(reminder.groupId === groupId) {
            reminder.group = title;
        }
    })

    return {
        updatedGroups: updatedGroups,
        updatedToday: updatedToday,
        updatedUpcoming: updatedUpcoming
    }
}

export const reorderGroups = (groups, activeId, overId) => {
    let activeIdx; //Index of Active Checklist
    let overIdx; //Index of Over Checklist
    let outdatedGroups = [...groups];

    outdatedGroups.map(group => {
        if(activeId === group.groupId) {
            activeIdx = groups.indexOf(group);
        } else if(overId === group.groupId) {
            overIdx = groups.indexOf(group);
        }
    });

    return arrayMove(groups, activeIdx, overIdx);
}
