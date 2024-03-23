export const getProfData = () => {
    return {
        department: "Mathematics",
        academicRole: "Professor",
        apptYear: "2004",
        officeBuilding: "Norris Center",
        officeRoom: "223A",
        officeHrs: [
            {
                index: "0",
                location: "Norris Center",
                room: "223A",
                startTime: "3:00 PM",
                endTime: "5:00 PM",
                days: ["Mon", "Wed", "Fri"]
            },
            {
                index: "1",
                location: "Norris Center",
                room: "223A",
                startTime: "11:00 AM",
                endTime: "12:00 PM",
                days: ["Tue", "Thu"]
            }
        ]
    }
}

export const academicRoles = [
    'Professor', 
    'Assistant Professor', 
    'Visiting Instructor', 
    'Visiting Assistant Instructor', 
    'Visiting Assistant Professor', 
    'Chair', 
    'Director', 
    'Other'
];

export const departments = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "History",
    "Economics",
    "Communication",
    "Art",
    "Biology",
    "Psychology",
    "Political Science",
    "Sociology",
    "Chemistry",
    "Philosophy",
    "Anthropology",
    "Engineering"
];

