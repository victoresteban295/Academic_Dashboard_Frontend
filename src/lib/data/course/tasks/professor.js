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
        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString(),
        gradedStudents: [
            {
                studId: "studIdA1",
                name: "Abel Hank",
                gradeLvl: "Freshman",
                taskGrade: 92,
            },
            {
                studId: "studIdA2",
                name: "Abigail Baker",
                gradeLvl: "Junior",
                taskGrade: 90,
            },
            {
                studId: "studIdA3",
                name: "Adams Hills",
                gradeLvl: "Freshman",
                taskGrade: 52,
            },
            {
                studId: "studIdA4",
                name: "Adams Henry",
                gradeLvl: "Sophomore",
                taskGrade: 71,
            },
            {
                studId: "studIdA5",
                name: "Andrea Sam",
                gradeLvl: "Freshman",
                taskGrade: 88,
            },
            {
                studId: "studIdA6",
                name: "Benjamin Alvarez",
                gradeLvl: "Sophomore",
                taskGrade: 82,
            },
            {
                studId: "studIdA7",
                name: "Brian Clinton",
                gradeLvl: "Junior",
                taskGrade: 98,
            },
            {
                studId: "studIdA8",
                name: "Charlotte Nguyen",
                gradeLvl: "Freshman",
                taskGrade: 92,
            },
            {
                studId: "studIdA9",
                name: "Chloe Zackery",
                gradeLvl: "Freshman",
                taskGrade: 85,
            },
            {
                studId: "studIdA10",
                name: "Daniel Brown",
                gradeLvl: "Junior",
                taskGrade: 67,
            },
            {
                studId: "studIdA11",
                name: "Elliot Jim",
                gradeLvl: "Senior",
                taskGrade: 73,
            },
            {
                studId: "studIdA12",
                name: "Emily Gonzalez",
                gradeLvl: "Freshman",
                taskGrade: 94,
            },
            {
                studId: "studIdA13",
                name: "Fiona Smith",
                gradeLvl: "Freshman",
                taskGrade: 98,
            },
            {
                studId: "studIdA14",
                name: "Frank Zack",
                gradeLvl: "Sophomore",
                taskGrade: 93,
            },
            {
                studId: "studIdA15",
                name: "Gabriel Till",
                gradeLvl: "Sophomore",
                taskGrade: 70,
            },
            {
                studId: "studIdA16",
                name: "Gaby Rivera",
                gradeLvl: "Freshman",
                taskGrade: 77,
            },
            {
                studId: "studIdA17",
                name: "Gary Winston",
                gradeLvl: "Freshman",
                taskGrade: 85,
            },
            {
                studId: "studIdA18",
                name: "Hannah Wells",
                gradeLvl: "Junior",
                taskGrade: 86,
            },
            {
                studId: "studIdA19",
                name: "Irene Zapada",
                gradeLvl: "Junior",
                taskGrade: 52,
            },
            {
                studId: "studIdA20",
                name: "Isaac Thomas",
                gradeLvl: "Freshman",
                taskGrade: 68,
            },
            {
                studId: "studIdA21",
                name: "Jacob Torres",
                gradeLvl: "Sophomore",
                taskGrade: 89,
            },
            {
                studId: "studIdA22",
                name: "Jasmine Yang",
                gradeLvl: "Freshman",
                taskGrade: 92,
            },
            {
                studId: "studIdA23",
                name: "Jay Sun",
                gradeLvl: "Freshman",
                taskGrade: 80,
            },
            {
                studId: "studIdA24",
                name: "Johnson White",
                gradeLvl: "Freshman",
                taskGrade: 89,
            },
            {
                studId: "studIdA25",
                name: "Maria Flores",
                gradeLvl: "Junior",
                taskGrade: 96,
            },
            {
                studId: "studIdA26",
                name: "Martina Lopez",
                gradeLvl: "Freshman",
                taskGrade: 87,
            },
            {
                studId: "studIdA27",
                name: "Maya Jones",
                gradeLvl: "Senior",
                taskGrade: 64,
            },
            {
                studId: "studIdA28",
                name: "Michael Smith",
                gradeLvl: "Freshman",
                taskGrade: 83,
            },
            {
                studId: "studIdA29",
                name: "Natalie Scott",
                gradeLvl: "Freshman",
                taskGrade: 95,
            },
            {
                studId: "studIdA30",
                name: "Nate Hills",
                gradeLvl: "Freshman",
                taskGrade: 78,
            },
            {
                studId: "studIdA31",
                name: "Noah Parker",
                gradeLvl: "Freshman",
                taskGrade: 84,
            },
            {
                studId: "studIdA32",
                name: "Olivia Sky",
                gradeLvl: "Sophomore",
                taskGrade: 95,
            },
            {
                studId: "studIdA33",
                name: "Olin Mike",
                gradeLvl: "Freshman",
                taskGrade: 81,
            },
            {
                studId: "studIdA34",
                name: "Pam Harrison",
                gradeLvl: "Freshman",
                taskGrade: 88,
            },
            {
                studId: "studIdA35",
                name: "Paul Carter",
                gradeLvl: "Senior",
                taskGrade: 97,
            },
            {
                studId: "studIdA36",
                name: "Peter Davis",
                gradeLvl: "Senior",
                taskGrade: 74,
            },
            {
                studId: "studIdA37",
                name: "Victor Benitez",
                gradeLvl: "Senior",
                taskGrade: 98,
            },
            {
                studId: "studIdA38",
                name: "Victoria Robles",
                gradeLvl: "Freshman",
                taskGrade: 97,
            },
            {
                studId: "studIdA39",
                name: "Zachary Underwood",
                gradeLvl: "Junior",
                taskGrade: 62,
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
        iso8601: dayjs(`${todayStrWeek.add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString(),
        gradedStudents: [
        ],
        notGradedStudents: [
            {
                studId: "studIdA1",
                name: "Abel Hank",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA2",
                name: "Abigail Baker",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA3",
                name: "Adams Hills",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA4",
                name: "Adams Henry",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA5",
                name: "Andrea Sam",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA6",
                name: "Benjamin Alvarez",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA7",
                name: "Brian Clinton",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA8",
                name: "Charlotte Nguyen",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA9",
                name: "Chloe Zackery",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA10",
                name: "Daniel Brown",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA11",
                name: "Elliot Jim",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA12",
                name: "Emily Gonzalez",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA13",
                name: "Fiona Smith",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA14",
                name: "Frank Zack",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA15",
                name: "Gabriel Till",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA16",
                name: "Gaby Rivera",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA17",
                name: "Gary Winston",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA18",
                name: "Hannah Wells",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA19",
                name: "Irene Zapada",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA20",
                name: "Isaac Thomas",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA21",
                name: "Jacob Torres",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA22",
                name: "Jasmine Yang",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA23",
                name: "Jay Sun",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA24",
                name: "Johnson White",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA25",
                name: "Maria Flores",
                gradeLvl: "Junior",
                taskGrade: null,
            },
            {
                studId: "studIdA26",
                name: "Martina Lopez",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA27",
                name: "Maya Jones",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA28",
                name: "Michael Smith",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA29",
                name: "Natalie Scott",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA30",
                name: "Nate Hills",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA31",
                name: "Noah Parker",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA32",
                name: "Olivia Sky",
                gradeLvl: "Sophomore",
                taskGrade: null,
            },
            {
                studId: "studIdA33",
                name: "Olin Mike",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA34",
                name: "Pam Harrison",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA35",
                name: "Paul Carter",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA36",
                name: "Peter Davis",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA37",
                name: "Victor Benitez",
                gradeLvl: "Senior",
                taskGrade: null,
            },
            {
                studId: "studIdA38",
                name: "Victoria Robles",
                gradeLvl: "Freshman",
                taskGrade: null,
            },
            {
                studId: "studIdA39",
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
