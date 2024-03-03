import dayjs from "dayjs";
import { nanoid } from "nanoid";

/* Seperate WeeklyTasks into Upcoming and Past */
export const seperateWeeklyTasks = (today, weeklyTasks) => {
    let upcoming = [];
    let past = [];
    let reversePast = [];
    
    const todayEndWeek = dayjs(today, "MM/DD/YY").endOf('week').format("MM/DD/YY");
    const endWeekISO = dayjs(`${todayEndWeek}-11:59 PM`, "MM/DD/YY-h:mm A").toISOString();

    for(const weeklyTask of weeklyTasks) {
        const isToday = (new Date(endWeekISO) - new Date(weeklyTask.iso8601));
        if(isToday > 0) {
            past.push(weeklyTask);
        } else {
            upcoming.push(weeklyTask);
        }
    }

    //Reverse so recently past week is 1st
    for(let i=past.length-1; i>=0; i--) {
        let weeklyTask = past[i];
        reversePast.push(weeklyTask);
    }

    return {
        upcoming: upcoming,
        past: reversePast,
    }
}

export const modifyTasks = (taskId, title, task, date, due, note, weeklyTasks) => {
    //Start of Week Where Task Belongs To
    const taskWeek = dayjs(date, "MM/DD/YY").startOf('week').format("MMMM D");
    let updatedWeeklyTasks = [...weeklyTasks];
    let time = (due.includes("AM") || due.includes("PM")) ? due : "12:00 AM";

    //Create a New Task
    if(taskId === "") {
        //Create New Task
        const newTask = {
            taskId: nanoid(10),
            title: title,
            task: task,
            date: date,
            note: note,
            due: due,
            iso8601: dayjs(`${date}-${time}`, "MM/DD/YY-h:mm A").toISOString(),
        }

        //If Exist, Look for Week Where to Place Task
        for(const week of updatedWeeklyTasks) {
            //If Found, Add Task to Week
            if(week.strWeek === taskWeek) {

                //Add New Task to Week
                const modifyTasks = [...week.tasks, newTask];
                week.tasks = sortTasks(modifyTasks);

                return {
                    updatedWeeklyTasks: updatedWeeklyTasks,
                }
            }
        }

        //Create New Week for Task
        const endOfWeek = dayjs(date, "MM/DD/YY").endOf('week').format("MM/DD/YY");
        const newWeek = {
            strWeek: taskWeek,
            endWeek: dayjs(endOfWeek, "MM/DD/YY").format("MMMM D"),
            iso8601: dayjs(`${endOfWeek}-11:59 PM`, "MM/DD/YY-h:mm A").toISOString(),
            tasks: [newTask]
        }
        const modifyWeeks = [...updatedWeeklyTasks, newWeek];
        
        return {
            updatedWeeklyTasks: sortWeeks(modifyWeeks),
        }


    //Edit Existing Task
    } else {

        //Task Remains in Same Week 
        for(const week of updatedWeeklyTasks) {
            if(week.strWeek === taskWeek) {
                //Check if Task is Under Week Range
                for(const editTask of week.tasks) {
                    //If Found, Edit Task 
                    if(editTask.taskId === taskId) {
                        editTask.title = title;
                        editTask.task = task;
                        editTask.date=date
                        editTask.due = due;
                        editTask.note = note;
                        editTask.iso8601 = dayjs(`${date}-${time}`, "MM/DD/YY-h:mm A").toISOString();

                        //Sort Tasks
                        const outdatedTasks = [...week.tasks];
                        week.tasks = sortWeeks(outdatedTasks);

                        return {
                            updatedWeeklyTasks: updatedWeeklyTasks,
                        }
                    }
                }
            }
        }
        
        //Task Does NOT Remain in the Same Week
        for(const week of updatedWeeklyTasks) {
            //Add Task To New Week Range
            if(week.strWeek === taskWeek) {
                const updatedTask = {
                    taskId: taskId,
                    title: title,
                    task: task,
                    date: date,
                    note: note,
                    due: due,
                    iso8601: dayjs(`${date}-${time}`, "MM/DD/YY-h:mm A").toISOString(),
                }

                //Add Modifeid Taks and Sort Tasks
                const outdatedTasks = [...week.tasks, updatedTask];
                week.tasks = sortWeeks(outdatedTasks);

            //Remove Task From Old Week
            } else {
                const tasks = [...week.tasks];
                week.tasks = tasks.filter(outdatedTask => {
                    return !(outdatedTask.taskId === taskId && outdatedTask.date != date);
                })
            }
        }
        
        //Filter Out Any Weeks That Doesn't Have Any Tasks
        const outdatedWeeks = [...updatedWeeklyTasks];
        updatedWeeklyTasks = outdatedWeeks.filter(week => {
            return week.tasks.length > 0;
        })
        
        return {
            updatedWeeklyTasks: updatedWeeklyTasks,
        }
    }
}

export const deleteTask = (taskId, date, weeklyTasks) => {
    let updatedWeeklyTasks = [...weeklyTasks];
    //Date Range Under Which Task is Found
    const dateWeek = dayjs(date, "MM/DD/YY").startOf('week').format("MMMM D");

    //Loop thru Weeks
    for(const week of updatedWeeklyTasks) {
        //Week Where Deleted Task Is Located
        if(week.strWeek === dateWeek) {
            const outdatedTasks = [...week.tasks];
            week.tasks = outdatedTasks.filter(task => {
                return task.taskId != taskId;
            })
        }
    }

    //Filter Out Any Weeks That Doesn't Have Any Tasks
    const outdatedWeeks = [...updatedWeeklyTasks];
    updatedWeeklyTasks = outdatedWeeks.filter(week => {
        return week.tasks.length > 0;
    })
    
    return {
        updatedWeeklyTasks: updatedWeeklyTasks,
    }
}

const sortWeeks = (weeks) => {
    return weeks.sort((a, b) => new Date(a.iso8601) - new Date(b.iso8601))
}

const sortTasks = (tasks) => {
    return tasks.sort((a, b) => new Date(a.iso8601) - new Date(b.iso8601))
}
