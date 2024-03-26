export const modifyOfficeHrs = (index, location, room, startTime, endTime, days, officeHrs) => {
    let updatedOfficeHrs = [...officeHrs];
    let sortedDays = sortDays(days);

    //Professor Are Limited to 10 Office Hours
    if(officeHrs.length < 10) {
        //Create New Office Hours
        if(index === "") {

            //New Office Hours
            const officeHr = {
                index: officeHrs.length.toString(),
                location: location,
                room: room,
                startTime: startTime,
                endTime: endTime,
                days: days,
            } 

            //Add Office Hour to List
            updatedOfficeHrs.push(officeHr);

        //Edit Office Hours
        } else {
            //Find Office Hour to Modify
            for(const officeHr of updatedOfficeHrs) {
                if(officeHr.index === index) {
                    officeHr.location = location;
                    officeHr.room = room;
                    officeHr.startTime = startTime;
                    officeHr.endTime = endTime;
                    officeHr.days = sortedDays;
                    break; //End Loop
                }
            }
        }

        return {
            updatedOfficeHrs: updatedOfficeHrs,
        }
    } else {
        throw new Error("Office Hours Limit Exceeded: 10");
    }

}

export const deleteOfficeHrs = (index, officeHrs) => {
    //Filter out Office Hours Getting Deleted
    let updatedOfficeHrs = officeHrs.filter(officeHr => {
        return officeHr.index != index;
    })

    //Update Index on each Office Hours
    for(let i=0; i < updatedOfficeHrs.length; i++) {
        updatedOfficeHrs[i].index = i.toString();
    }

    return {
        updatedOfficeHrs: updatedOfficeHrs,
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
