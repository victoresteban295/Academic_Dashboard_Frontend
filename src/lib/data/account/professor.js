export const getProfData = () => {
    return {
        department: "Mathematics",
        academicRole: "Professor",
        apptYear: "2004",
        officeBuilding: "Norris Center",
        officeRoom: "223A",
        officeHrs: [
            {
                location: "Norris Center",
                room: "223A",
                startTime: "3:00 PM",
                endTime: "5:00 PM",
                days: ["Mon", "Wed", "Fri"]
            },
            {
                location: "Norris Center",
                room: "223A",
                startTime: "11:00 AM",
                endTime: "12:00 PM",
                days: ["Tue", "Thu"]
            }
        ]
    }
}


