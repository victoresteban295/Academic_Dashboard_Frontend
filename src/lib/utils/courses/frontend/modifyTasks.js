import dayjs from "dayjs";

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
