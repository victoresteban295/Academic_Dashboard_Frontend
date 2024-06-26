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
                taskGrade: 92,
            },
            {
                studId: "studIdA2",
                name: "Abigail Baker",
                taskGrade: 90,
            },
            {
                studId: "studIdA3",
                name: "Adams Hills",
                taskGrade: 52,
            },
            {
                studId: "studIdA4",
                name: "Adams Henry",
                taskGrade: 71,
            },
            {
                studId: "studIdA5",
                name: "Andrea Sam",
                taskGrade: 88,
            },
            {
                studId: "studIdA6",
                name: "Benjamin Alvarez",
                taskGrade: 82,
            },
            {
                studId: "studIdA7",
                name: "Brian Clinton",
                taskGrade: 98,
            },
            {
                studId: "studIdA8",
                name: "Charlotte Nguyen",
                taskGrade: 92,
            },
            {
                studId: "studIdA9",
                name: "Chloe Zackery",
                taskGrade: 85,
            },
            {
                studId: "studIdA10",
                name: "Daniel Brown",
                taskGrade: 67,
            },
            {
                studId: "studIdA11",
                name: "Elliot Jim",
                taskGrade: 73,
            },
            {
                studId: "studIdA12",
                name: "Emily Gonzalez",
                taskGrade: 94,
            },
            {
                studId: "studIdA13",
                name: "Fiona Smith",
                taskGrade: 98,
            },
            {
                studId: "studIdA14",
                name: "Frank Zack",
                taskGrade: 93,
            },
            {
                studId: "studIdA15",
                name: "Gabriel Till",
                taskGrade: 70,
            },
            {
                studId: "studIdA16",
                name: "Gaby Rivera",
                taskGrade: 77,
            },
            {
                studId: "studIdA17",
                name: "Gary Winston",
                taskGrade: 85,
            },
            {
                studId: "studIdA18",
                name: "Hannah Wells",
                taskGrade: 86,
            },
            {
                studId: "studIdA19",
                name: "Irene Zapada",
                taskGrade: 52,
            },
            {
                studId: "studIdA20",
                name: "Isaac Thomas",
                taskGrade: 68,
            },
            {
                studId: "studIdA21",
                name: "Jacob Torres",
                taskGrade: 89,
            },
            {
                studId: "studIdA22",
                name: "Jasmine Yang",
                taskGrade: 92,
            },
            {
                studId: "studIdA23",
                name: "Jay Sun",
                taskGrade: 80,
            },
            {
                studId: "studIdA24",
                name: "Johnson White",
                taskGrade: 89,
            },
            {
                studId: "studIdA25",
                name: "Maria Flores",
                taskGrade: 96,
            },
            {
                studId: "studIdA26",
                name: "Martina Lopez",
                taskGrade: 87,
            },
            {
                studId: "studIdA27",
                name: "Maya Jones",
                taskGrade: 64,
            },
            {
                studId: "studIdA28",
                name: "Michael Smith",
                taskGrade: 83,
            },
            {
                studId: "studIdA29",
                name: "Natalie Scott",
                taskGrade: 95,
            },
            {
                studId: "studIdA30",
                name: "Natalie Scott",
                taskGrade: 78,
            },
            {
                studId: "studIdA31",
                name: "Noah Parker",
                taskGrade: 84,
            },
            {
                studId: "studIdA32",
                name: "Olivia Sky",
                taskGrade: 95,
            },
            {
                studId: "studIdA33",
                name: "Olin Mike",
                taskGrade: 81,
            },
            {
                studId: "studIdA34",
                name: "Pam Harrison",
                taskGrade: 88,
            },
            {
                studId: "studIdA35",
                name: "Paul Carter",
                taskGrade: 97,
            },
            {
                studId: "studIdA36",
                name: "Peter Davis",
                taskGrade: 74,
            },
            {
                studId: "studIdA37",
                name: "Victor Benitez",
                taskGrade: 98,
            },
            {
                studId: "studIdA38",
                name: "Victoria Robles",
                taskGrade: 97,
            },
            {
                studId: "studIdA39",
                name: "Zachary Underwood",
                taskGrade: 62,
            },
        ],
        notGradedStudnets: [
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
        notGradedStudnets: [
            {
                studId: "studIdA1",
                name: "Abel Hank",
                taskGrade: null,
            },
            {
                studId: "studIdA2",
                name: "Abigail Baker",
                taskGrade: null,
            },
            {
                studId: "studIdA3",
                name: "Adams Hills",
                taskGrade: null,
            },
            {
                studId: "studIdA4",
                name: "Adams Henry",
                taskGrade: null,
            },
            {
                studId: "studIdA5",
                name: "Andrea Sam",
                taskGrade: null,
            },
            {
                studId: "studIdA6",
                name: "Benjamin Alvarez",
                taskGrade: null,
            },
            {
                studId: "studIdA7",
                name: "Brian Clinton",
                taskGrade: null,
            },
            {
                studId: "studIdA8",
                name: "Charlotte Nguyen",
                taskGrade: null,
            },
            {
                studId: "studIdA9",
                name: "Chloe Zackery",
                taskGrade: null,
            },
            {
                studId: "studIdA10",
                name: "Daniel Brown",
                taskGrade: null,
            },
            {
                studId: "studIdA11",
                name: "Elliot Jim",
                taskGrade: null,
            },
            {
                studId: "studIdA12",
                name: "Emily Gonzalez",
                taskGrade: null,
            },
            {
                studId: "studIdA13",
                name: "Fiona Smith",
                taskGrade: null,
            },
            {
                studId: "studIdA14",
                name: "Frank Zack",
                taskGrade: null,
            },
            {
                studId: "studIdA15",
                name: "Gabriel Till",
                taskGrade: null,
            },
            {
                studId: "studIdA16",
                name: "Gaby Rivera",
                taskGrade: null,
            },
            {
                studId: "studIdA17",
                name: "Gary Winston",
                taskGrade: null,
            },
            {
                studId: "studIdA18",
                name: "Hannah Wells",
                taskGrade: null,
            },
            {
                studId: "studIdA19",
                name: "Irene Zapada",
                taskGrade: null,
            },
            {
                studId: "studIdA20",
                name: "Isaac Thomas",
                taskGrade: null,
            },
            {
                studId: "studIdA21",
                name: "Jacob Torres",
                taskGrade: null,
            },
            {
                studId: "studIdA22",
                name: "Jasmine Yang",
                taskGrade: null,
            },
            {
                studId: "studIdA23",
                name: "Jay Sun",
                taskGrade: null,
            },
            {
                studId: "studIdA24",
                name: "Johnson White",
                taskGrade: null,
            },
            {
                studId: "studIdA25",
                name: "Maria Flores",
                taskGrade: null,
            },
            {
                studId: "studIdA26",
                name: "Martina Lopez",
                taskGrade: null,
            },
            {
                studId: "studIdA27",
                name: "Maya Jones",
                taskGrade: null,
            },
            {
                studId: "studIdA28",
                name: "Michael Smith",
                taskGrade: null,
            },
            {
                studId: "studIdA29",
                name: "Natalie Scott",
                taskGrade: null,
            },
            {
                studId: "studIdA30",
                name: "Natalie Scott",
                taskGrade: null,
            },
            {
                studId: "studIdA31",
                name: "Noah Parker",
                taskGrade: null,
            },
            {
                studId: "studIdA32",
                name: "Olivia Sky",
                taskGrade: null,
            },
            {
                studId: "studIdA33",
                name: "Olin Mike",
                taskGrade: null,
            },
            {
                studId: "studIdA34",
                name: "Pam Harrison",
                taskGrade: null,
            },
            {
                studId: "studIdA35",
                name: "Paul Carter",
                taskGrade: null,
            },
            {
                studId: "studIdA36",
                name: "Peter Davis",
                taskGrade: null,
            },
            {
                studId: "studIdA37",
                name: "Victor Benitez",
                taskGrade: null,
            },
            {
                studId: "studIdA38",
                name: "Victoria Robles",
                taskGrade: null,
            },
            {
                studId: "studIdA39",
                name: "Zachary Underwood",
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
