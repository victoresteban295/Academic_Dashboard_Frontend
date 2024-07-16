import dayjs from "dayjs";

export const getTaskStats = (taskId, today) => {
    /* Current Week */
    const todayDate = today.format("MM/DD/YY");
    const todayStrWeek = dayjs(todayDate, "MM/DD/YY").startOf('week');
  
    /* Math 230: Discrete Mathematics */
    /* Past Tasks */
    const taskIdA1 = {
        taskFound: true,
        taskId: "taskIdA1",
        task: "Assignment",
        title: "Homework #1",
        date: dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY"),
        note: "Chapter 1: P.23 - P.24",
        due: "Before Class",
        totalScore: 120,
        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString(),
        gradedStudents: [
            {
                studId: "studIdA1",
                isExcluded: false,
                name: "Abel Hank",
                gradeLvl: "Freshman",
                taskGrade: 110,
            },
            {
                studId: "studIdA2",
                isExcluded: false,
                name: "Abigail Baker",
                gradeLvl: "Junior",
                taskGrade: 108,
            },
            {
                studId: "studIdA3",
                isExcluded: false,
                name: "Adams Hills",
                gradeLvl: "Freshman",
                taskGrade: 62,
            },
            {
                studId: "studIdA4",
                isExcluded: false,
                name: "Adams Henry",
                gradeLvl: "Sophomore",
                taskGrade: 85,
            },
            {
                studId: "studIdA5",
                isExcluded: false,
                name: "Andrea Sam",
                gradeLvl: "Freshman",
                taskGrade: 106,
            },
            {
                studId: "studIdA6",
                isExcluded: false,
                name: "Benjamin Alvarez",
                gradeLvl: "Sophomore",
                taskGrade: 98,
            },
            {
                studId: "studIdA7",
                isExcluded: false,
                name: "Brian Clinton",
                gradeLvl: "Junior",
                taskGrade: 118,
            },
            {
                studId: "studIdA8",
                isExcluded: false,
                name: "Charlotte Nguyen",
                gradeLvl: "Freshman",
                taskGrade: 110,
            },
            {
                studId: "studIdA9",
                isExcluded: false,
                name: "Chloe Zackery",
                gradeLvl: "Freshman",
                taskGrade: 102,
            },
            {
                studId: "studIdA10",
                isExcluded: false,
                name: "Daniel Brown",
                gradeLvl: "Junior",
                taskGrade: 80,
            },
            {
                studId: "studIdA11",
                isExcluded: false,
                name: "Elliot Jim",
                gradeLvl: "Senior",
                taskGrade: 88,
            },
            {
                studId: "studIdA12",
                isExcluded: false,
                name: "Emily Gonzalez",
                gradeLvl: "Freshman",
                taskGrade: 113,
            },
            {
                studId: "studIdA13",
                isExcluded: false,
                name: "Fiona Smith",
                gradeLvl: "Freshman",
                taskGrade: 118,
            },
            {
                studId: "studIdA14",
                isExcluded: false,
                name: "Frank Zack",
                gradeLvl: "Sophomore",
                taskGrade: 112,
            },
            {
                studId: "studIdA15",
                isExcluded: false,
                name: "Gabriel Till",
                gradeLvl: "Sophomore",
                taskGrade: 84,
            },
            {
                studId: "studIdA16",
                isExcluded: false,
                name: "Gaby Rivera",
                gradeLvl: "Freshman",
                taskGrade: 92,
            },
            {
                studId: "studIdA17",
                isExcluded: false,
                name: "Gary Winston",
                gradeLvl: "Freshman",
                taskGrade: 102,
            },
            {
                studId: "studIdA18",
                isExcluded: false,
                name: "Hannah Wells",
                gradeLvl: "Junior",
                taskGrade: 103,
            },
            {
                studId: "studIdA19",
                isExcluded: false,
                name: "Irene Zapada",
                gradeLvl: "Junior",
                taskGrade: 62,
            },
            {
                studId: "studIdA20",
                isExcluded: false,
                name: "Isaac Thomas",
                gradeLvl: "Freshman",
                taskGrade: 82,
            },
            {
                studId: "studIdA21",
                isExcluded: false,
                name: "Jacob Torres",
                gradeLvl: "Sophomore",
                taskGrade: 107,
            },
            {
                studId: "studIdA22",
                isExcluded: false,
                name: "Jasmine Yang",
                gradeLvl: "Freshman",
                taskGrade: 110,
            },
            {
                studId: "studIdA23",
                isExcluded: false,
                name: "Jay Sun",
                gradeLvl: "Freshman",
                taskGrade: 96,
            },
            {
                studId: "studIdA24",
                isExcluded: false,
                name: "Johnson White",
                gradeLvl: "Freshman",
                taskGrade: 107,
            },
            {
                studId: "studIdA25",
                isExcluded: false,
                name: "Maria Flores",
                gradeLvl: "Junior",
                taskGrade: 115,
            },
            {
                studId: "studIdA26",
                isExcluded: false,
                name: "Martina Lopez",
                gradeLvl: "Freshman",
                taskGrade: 104,
            },
            {
                studId: "studIdA27",
                isExcluded: false,
                name: "Maya Jones",
                gradeLvl: "Senior",
                taskGrade: 77,
            },
            {
                studId: "studIdA28",
                isExcluded: false,
                name: "Michael Smith",
                gradeLvl: "Freshman",
                taskGrade: 100,
            },
            {
                studId: "studIdA29",
                isExcluded: false,
                name: "Natalie Scott",
                gradeLvl: "Freshman",
                taskGrade: 114, 
            },
            {
                studId: "studIdA30",
                isExcluded: false,
                name: "Nate Hills",
                gradeLvl: "Freshman",
                taskGrade: 94,
            },
            {
                studId: "studIdA31",
                isExcluded: false,
                name: "Noah Parker",
                gradeLvl: "Freshman",
                taskGrade: 101,
            },
            {
                studId: "studIdA32",
                isExcluded: false,
                name: "Olivia Sky",
                gradeLvl: "Sophomore",
                taskGrade: 114,
            },
            {
                studId: "studIdA33",
                isExcluded: false,
                name: "Olin Mike",
                gradeLvl: "Freshman",
                taskGrade: 97,
            },
            {
                studId: "studIdA34",
                isExcluded: false,
                name: "Pam Harrison",
                gradeLvl: "Freshman",
                taskGrade: 106,
            },
            {
                studId: "studIdA35",
                isExcluded: false,
                name: "Paul Carter",
                gradeLvl: "Senior",
                taskGrade: 116,
            },
            {
                studId: "studIdA36",
                isExcluded: false,
                name: "Peter Davis",
                gradeLvl: "Senior",
                taskGrade: 89,
            },
            {
                studId: "studIdA37",
                isExcluded: false,
                name: "Victor Benitez",
                gradeLvl: "Senior",
                taskGrade: 118,
            },
            {
                studId: "studIdA38",
                isExcluded: false,
                name: "Victoria Robles",
                gradeLvl: "Freshman",
                taskGrade: 116,
            },
            {
                studId: "studIdA39",
                isExcluded: false,
                name: "Zachary Underwood",
                gradeLvl: "Junior",
                taskGrade: 74,
            },
        ],
        notGradedStudents: [
        ],
    }

    /* Upcoming Tasks */
    const taskIdA17 = {
        taskFound: true,
        taskId: "taskIdA17",
        task: "Assignment",
        title: "Homework #14",
        date: todayStrWeek.add(3, 'day').format("MM/DD/YY"),
        note: "Chapter 14: P.10 - P.18",
        due: "Before Class",
        totalScore: 120,
        iso8601: dayjs(`${todayStrWeek.add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString(),
        gradedStudents: [
        ],
        notGradedStudents: [
            {
                studId: "studIdA1",
                isExcluded: false,
                name: "Abel Hank",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA2",
                isExcluded: false,
                name: "Abigail Baker",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA3",
                isExcluded: false,
                name: "Adams Hills",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA4",
                isExcluded: false,
                name: "Adams Henry",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA5",
                isExcluded: false,
                name: "Andrea Sam",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA6",
                isExcluded: false,
                name: "Benjamin Alvarez",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA7",
                isExcluded: false,
                name: "Brian Clinton",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA8",
                isExcluded: false,
                name: "Charlotte Nguyen",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA9",
                isExcluded: false,
                name: "Chloe Zackery",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA10",
                isExcluded: false,
                name: "Daniel Brown",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA11",
                isExcluded: false,
                name: "Elliot Jim",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA12",
                isExcluded: false,
                name: "Emily Gonzalez",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA13",
                isExcluded: false,
                name: "Fiona Smith",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA14",
                isExcluded: false,
                name: "Frank Zack",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA15",
                isExcluded: false,
                name: "Gabriel Till",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA16",
                isExcluded: false,
                name: "Gaby Rivera",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA17",
                isExcluded: false,
                name: "Gary Winston",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA18",
                isExcluded: false,
                name: "Hannah Wells",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA19",
                isExcluded: false,
                name: "Irene Zapada",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA20",
                isExcluded: false,
                name: "Isaac Thomas",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA21",
                isExcluded: false,
                name: "Jacob Torres",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA22",
                isExcluded: false,
                name: "Jasmine Yang",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA23",
                isExcluded: false,
                name: "Jay Sun",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA24",
                isExcluded: false,
                name: "Johnson White",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA25",
                isExcluded: false,
                name: "Maria Flores",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA26",
                isExcluded: false,
                name: "Martina Lopez",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA27",
                isExcluded: false,
                name: "Maya Jones",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA28",
                isExcluded: false,
                name: "Michael Smith",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA29",
                isExcluded: false,
                name: "Natalie Scott",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA30",
                isExcluded: false,
                name: "Nate Hills",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA31",
                isExcluded: false,
                name: "Noah Parker",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA32",
                isExcluded: false,
                name: "Olivia Sky",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA33",
                isExcluded: false,
                name: "Olin Mike",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA34",
                isExcluded: false,
                name: "Pam Harrison",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA35",
                isExcluded: false,
                name: "Paul Carter",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA36",
                isExcluded: false,
                name: "Peter Davis",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA37",
                isExcluded: false,
                name: "Victor Benitez",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA38",
                isExcluded: false,
                name: "Victoria Robles",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA39",
                isExcluded: false,
                name: "Zachary Underwood",
                gradeLvl: "Junior",
                taskGrade: null,
            },
        ],

    }

    /* Past */
    if(taskId === "taskIdA1") {
        return taskIdA1;

    /* Upcoming */
    } else if(taskId === "taskIdA17"){
        return taskIdA17;

    /* Task Not Found */
    } else {
        return {
            taskFound: false,
        }
    }
    
}
