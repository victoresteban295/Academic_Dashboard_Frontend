/* Add/Edit a Course's Lecture Schedule */
export const modifySchedule = (index, location, strTime, endTime, days, schedules) => {
    let updatedSchedules = [...schedules];
    let sortedDays = sortDays(days);
    
    //Create a New Schedule
    if(index === "") {
        if(schedules.length < 5) {
            const schedule = {
                index: schedules.length.toString(),
                location: location,
                strTime: strTime,
                endTime: endTime,
                days: sortedDays
            }
            updatedSchedules.push(schedule);
        } else {
            throw new Error("Course's Schedule Limt Exceeded: 5");
        }
    //Edit Existing Schedule
    } else {
        for(const schedule of schedules) {
            if(schedule.index === index) {
                schedule.location = location; 
                schedule.strTime = strTime; 
                schedule.endTime = endTime; 
                schedule.days = sortedDays; 
            }
        }
    }


    return {
        updatedSchedules: updatedSchedules,
    } 
}

const sortDays = (days) => {
    let sortedDays = [];

    if(days.includes("Mon")) {
        sortedDays.push("Mon");
    }
    if(days.includes("Tue")) {
        sortedDays.push("Tue");
    }
    if(days.includes("Wed")) {
        sortedDays.push("Wed");
    }
    if(days.includes("Thu")) {
        sortedDays.push("Thu");
    }
    if(days.includes("Fri")) {
        sortedDays.push("Fri");
    }

    return sortedDays;
}

/* Delete A Course's Lecture Schedule */
export const deleteSchedule = (index, schedules) => {
    //Filter out Schedule Getting Deleted
    let updatedSchedules = schedules.filter(schedule => {
        return schedule.index != index;
    })

    //Update the index on each Section
    for(let i = 0; i < updatedSchedules.length; i++) {
        updatedSchedules[i].index = i.toString();
    }

    return {
        updatedSchedules: updatedSchedules,
    } 
}
