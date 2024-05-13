import dayjs from "dayjs";

export const getTitle = (course) => {

    if(course === "math245") {
        return "Math 245: Differential Equations";
    } else if(course === "math230") {
        return "Math 230: Discrete Mathematics";
    } 
}

export const getCourse = (course, today) => {

    /* Current Week */
    const todayDate = today.format("MM/DD/YY");
    const todayStrWeek = dayjs(todayDate, "MM/DD/YY").startOf('week');
    const todayEndWeek = dayjs(todayDate, "MM/DD/YY").endOf('week');

        
    const math245 = {

        /* Professor Information */
        school: "Academic College",
        instructor: "Dr.Demo",
        office: "Palenske Hall 330",
        phone: "323 233-3221",
        email: "demoprof@college.edu",

        /* Course Information */
        course: "Math 245",
        dept: "Mathematics",
        title: "Math 245: Differential Equations",
        section: "1A",
        semester: "Spring 2024",
        strDate: "01/16/24",
        endDate: "04/26/24",

        /* Grade Composition */
        gradeComp: [
            {
                index: "0",
                category: "Assignment",
                percentage: "20"
            },
            {
                index: "1",
                category: "Quiz",
                percentage: "30"
            },
            {
                index: "2",
                category: "Exam",
                percentage: "25"
            },
            {
                index: "3",
                category: "Other",
                percentage: "25"
            }
        ],

        /* Syllabus Information */
        description: "This course serves as an introduction to the fundamental concepts and techniques of differential equations, a cornerstone of mathematics with wide-ranging applications in physics, engineering, biology, economics, and many other fields. Differential equations are essential for modeling and understanding systems that change over time or space, making them a powerful tool in scientific inquiry and problem-solving. In this course, students will explore various types of differential equations, including ordinary differential equations (ODEs) and partial differential equations (PDEs). The primary focus will be on first-order and second-order ODEs, both linear and nonlinear, along with methods for solving them analytically and numerically.",
        infoSections: [
            {
                index: "0",
                title: "Prerequisites",
                info: "Calculus I and II (or equivalent). Basic understanding of linear algebra is helpful but not required."
            },
            {
                index: "1",
                title: "Attendance Policy",
                info: "This course is “hands-on” and class participation at every class and lab is very important to learn the material. Excessive unexcused attendance and/or tardiness will result in some reduction of the final grade, in addition to the no-credit policy toward in-class homework (see “Homework” below). I regard more than 10% of the approximately 40 days scheduled for class discussions (that works out to 4 days) to be in danger of becoming excessive."
            },
            {
                index: "2",
                title: "Homework Policy",
                info: "Homework will consist of problem assignments and in-class exercises. Problems will be posted and collected on the course website. Each homework problem will be graded on a 10-point scale, and your homework will be submitted via the course web. To facilitate this, there is a scanner at the back of the room. While we strongly encourage you to work with one another on the homework assignments, the material you turn in must represent your own work. Late problem assignments will be accepted at my discretion. A significant penalty will be assessed on late problem assignments except in cases of emergency or illness documented by the Health Service or by prior arrangement. In-class exercises cannot be made up except in cases of emergency or illness documented by the Health Service or by prior arrangement. Evidence of copying on homework or evidence that someone else has completed and submitted your homework assignment on your behalf will result in a letter to the Dean of Students, which will trigger the college’s judicial process for academic integrity."
            }
        ],

        /* Course Schedule */
        schedules: [
            {
                index: "0",
                location: "Palenske Hall 230",
                days: [ "Mon", "Thu", "Fri" ],
                strTime: "9:15 AM",
                endTime: "10:20 AM",
            },
            {
                index: "1",
                location: "Norris Center 100",
                days: [ "Tue", "Wed" ],
                strTime: "1:00 PM",
                endTime: "2:00 PM",
            }
        ],

        /* Weekly Tasks */
        weeklyTasks: [
            {
                strWeek: todayStrWeek.subtract(8, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(8, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(8, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "hby45392-9",
                        task: "Assignment",
                        title: "Homework #1",
                        date: dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY"),
                        note: "Chapter 1: P.23 - P.24",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(7, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(7, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(7, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "nu734392-9",
                        task: "Assignment",
                        title: "Homework #2",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 2: P.12 - P.15",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "0leqvse4-9",
                        task: "Assignment",
                        title: "Homework #3",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 3: P.14 - P.23",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "aleqvse4-8",
                        task: "Quiz",
                        title: "Quiz #1",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 1 to Chapter 3. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(6, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(6, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(6, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "1234vse4-8",
                        task: "Assignment",
                        title: "Homework #4",
                        date: dayjs(`${todayStrWeek.subtract(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY"),
                        note: "Chapter 4: P.20 - P.22",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.subtract(5, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(5, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(5, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "-9342jihus",
                        task: "Assignment",
                        title: "Homework #5",
                        date: dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 5: P.3 - P.6",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "g93g2jihug",
                        task: "Assignment",
                        title: "Homework #6",
                        date: dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 6: P.14 - P.17",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(4, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(4, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(4, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "youmojihug",
                        task: "Assignment",
                        title: "Homework #7",
                        date: dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 7: P.2 - P.5",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "youbigihee",
                        task: "Quiz",
                        title: "Quiz #2",
                        date: dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 4 to Chapter 7. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(3, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(3, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(3, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "prezbigive",
                        task: "Assignment",
                        title: "Homework #8",
                        date: dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 8: P.30 - P.33",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "obaima723b",
                        task: "Assignment",
                        title: "Homework #9",
                        date: dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 9: P.43 - P.47",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(2, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(2, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(2, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "biden723bq",
                        task: "Assignment",
                        title: "Homework #10",
                        date: dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 10: P.45",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "bprofrt34s",
                        task: "Assignment",
                        title: "Homework #11",
                        date: dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 11: P.50 - P.54",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(1, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(1, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(1, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "tks12serw3",
                        task: "Assignment",
                        title: "Homework #12",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 12: P.3 - P.6",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "tskrw30982",
                        task: "Assignment",
                        title: "Homework #13",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 13: P.10 - P.13",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0000",
                        task: "Exam",
                        title: "Midterm Exam",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY"),
                        note: "Exam will cover topics from Chapter 01 to Chapter 13. One 5x3 notecard with notes will be allowed.",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            /* Upcoming */
            {
                strWeek: todayStrWeek.format("MMMM D"),
                endWeek: todayEndWeek.format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0001",
                        task: "Assignment",
                        title: "Homework #14",
                        date: todayStrWeek.add(3, 'day').format("MM/DD/YY"),
                        note: "Chapter 14: P.10 - P.18",
                        due: "Before Class",
                        iso8601: dayjs(`${todayStrWeek.add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(1, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(1, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(1, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0002",
                        task: "Assignment",
                        title: "Homework #15",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 15: P.15 - P.19",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0003",
                        task: "Assignment",
                        title: "Homework #16",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 16: P.29 - P.34",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0004",
                        task: "Quiz",
                        title: "Quiz #3",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 14 to Chapter 16. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(2, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(2, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(2, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0005",
                        task: "Assignment",
                        title: "Homework #17",
                        date: dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 17: P.3 - P.7",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0006",
                        task: "Assignment",
                        title: "Homework #18",
                        date: dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 18: P.29 - P.32",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(3, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(3, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(3, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0007",
                        task: "Assignment",
                        title: "Homework #19",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 19: P.44 - P.48",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0008",
                        task: "Assignment",
                        title: "Homework #20",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 20: P.16 - P.23",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0009",
                        task: "Quiz",
                        title: "Quiz #4",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 17 to Chapter 20. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(5, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(4, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(4, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(4, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0010",
                        task: "Assignment",
                        title: "Homework #21",
                        date: dayjs(`${todayStrWeek.add(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY"),
                        note: "Chapter 21: P.44 - P.51",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(5, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(5, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(5, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0011",
                        task: "Assignment",
                        title: "Homework #22",
                        date: dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 22: P.44 - P.48",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0012",
                        task: "Assignment",
                        title: "Homework #23",
                        date: dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 23: P.16 - P.23",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.add(6, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(6, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(6, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0013",
                        task: "Assignment",
                        title: "Homework #24",
                        date: "04/23/24",
                        date: dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 24: P.32 - P.37",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskid0014",
                        task: "Assignment",
                        title: "Homework #25",
                        date: dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 25: P.12 - P.16",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(7, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(7, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(7, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskid0015",
                        task: "Exam",
                        title: "Final Exam",
                        date: dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY"),
                        note: "Exam will cover topics from Chapter 14 to Chapter 25. One 5x3 notecard with notes will be allowed.",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(3, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
        ]
    }

    const math230 = {

        /* Professor Information */
        school: "Academic College",
        instructor: "Dr.Demo",
        office: "Palenske Hall 330",
        phone: "323 233-3221",
        email: "demoprof@college.edu",

        /* Course Information */
        course: "Math 230",
        dept: "Mathematics",
        title: "Math 230: Discrete Mathematics",
        section: "1A",
        semester: "Spring 2024",
        strDate: "01/16/24",
        endDate: "04/26/24",

        /* Grade Composition */
        gradeComp: [
            {
                index: "0",
                category: "Assignment",
                percentage: "20"
            },
            {
                index: "1",
                category: "Quiz",
                percentage: "30"
            },
            {
                index: "2",
                category: "Exam",
                percentage: "50"
            }
        ],

        /* Syllabus Information */
        description: "Discrete mathematics serves as the mathematical foundation for computer science and various other disciplines. This course provides a rigorous exploration of discrete mathematical structures and concepts, focusing on their applications in computer science, cryptography, logic, and algorithms. Throughout the course, emphasis will be placed on developing problem-solving skills, logical reasoning, and mathematical maturity. Students will engage in a variety of exercises, proofs, and applications to reinforce their understanding of discrete mathematical concepts.",
        infoSections: [
            {
                index: "0",
                title: "Prerequisites",
                info: "Calculus I (recommended). Familiarity with basic mathematical concepts such as sets, functions, and logic."
            },
            {
                index: "1",
                title: "Attendance Policy",
                info: "This course is “hands-on” and class participation at every class and lab is very important to learn the material. Excessive unexcused attendance and/or tardiness will result in some reduction of the final grade, in addition to the no-credit policy toward in-class homework (see “Homework” below). I regard more than 10% of the approximately 40 days scheduled for class discussions (that works out to 4 days) to be in danger of becoming excessive."
            },
            {
                index: "2",
                title: "Homework Policy",
                info: "Homework will consist of problem assignments and in-class exercises. Problems will be posted and collected on the course website. Each homework problem will be graded on a 10-point scale, and your homework will be submitted via the course web. To facilitate this, there is a scanner at the back of the room. While we strongly encourage you to work with one another on the homework assignments, the material you turn in must represent your own work. Late problem assignments will be accepted at my discretion. A significant penalty will be assessed on late problem assignments except in cases of emergency or illness documented by the Health Service or by prior arrangement. In-class exercises cannot be made up except in cases of emergency or illness documented by the Health Service or by prior arrangement. Evidence of copying on homework or evidence that someone else has completed and submitted your homework assignment on your behalf will result in a letter to the Dean of Students, which will trigger the college’s judicial process for academic integrity."
            }
        ],

        /* Course Schedule */
        schedules: [
            {
                index: "0",
                location: "Palenske Hall 205",
                days: [ "Mon", "Tue", "Wed", "Thu" ],
                strTime: "8:00 AM",
                endTime: "9:05 AM",
            }
        ],

        /* Weekly Tasks */
        weeklyTasks: [
            {
                strWeek: todayStrWeek.subtract(8, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(8, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(8, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId001B",
                        task: "Assignment",
                        title: "Assignment #1",
                        date: dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 3: P.33, 35, 37, and 39",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(8, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(7, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(7, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(7, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId002B",
                        task: "Assignment",
                        title: "Assignment #2",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 4: P.12, 18, and 22",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId003B",
                        task: "Quiz",
                        title: "Quiz #1",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 3 and Chapter 4. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(6, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(6, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(6, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId004B",
                        task: "Assignment",
                        title: "Assignment #3",
                        date: dayjs(`${todayStrWeek.subtract(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 5: P.25 - 31",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(5, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(5, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(5, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId005B",
                        task: "Assignment",
                        title: "Assignment #4",
                        date: dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 6: P.03, 05, 08, and 14",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(4, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(4, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(4, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId006B",
                        task: "Assignment",
                        title: "Assignment #5",
                        date: dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 7: P.12, 18, and 22",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId007B",
                        task: "Quiz",
                        title: "Quiz #2",
                        date: dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 5, 6 and Chapter 7. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.subtract(3, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(3, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(3, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId008B",
                        task: "Assignment",
                        title: "Assignment #6",
                        date: dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 8: P.21-26",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.subtract(2, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(2, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(2, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId009B",
                        task: "Assignment",
                        title: "Assignment #7",
                        date: dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 10: P.02, 03, 05, and 08",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.subtract(1, 'week').format("MMMM D"),
                endWeek: todayEndWeek.subtract(1, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.subtract(1, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId010B",
                        task: "Assignment",
                        title: "Assignment #8",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 11: P.22-27",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            /* Upcoming */
            {
                strWeek: todayStrWeek.format("MMMM D"),
                endWeek: todayEndWeek.format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId011B",
                        task: "Assignment",
                        title: "Assignment #9",
                        date: todayStrWeek.add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 12: P.10-14",
                        due: "After Class",
                        iso8601: dayjs(`${todayStrWeek.add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId012B",
                        task: "Exam",
                        title: "Midterm Exam",
                        date: todayStrWeek.add(4, 'day').format("MM/DD/YY"),
                        note: "Exam will cover topics from Chapter 03 up to Chapter 12. No Notes or Books will be allowed",
                        due: "During Class",
                        iso8601: dayjs(`${todayStrWeek.add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(1, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(1, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(1, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId013B",
                        task: "Assignment",
                        title: "Assignment #10",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 13: P.18, 19, and 22",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.add(2, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(2, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(2, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId014B",
                        task: "Assignment",
                        title: "Assignment #11",
                        date: dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 14: P.23, 25, and 30",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId015B",
                        task: "Quiz",
                        title: "Quiz #3",
                        date: dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 13 and Chapter 14. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(3, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(3, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(3, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId016B",
                        task: "Assignment",
                        title: "Assignment #12",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 15: P.01, 11, 13, and 14",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(4, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(4, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(4, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId017B",
                        task: "Assignment",
                        title: "Assignment #13",
                        date: dayjs(`${todayStrWeek.add(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 16: P.10-14",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
            {
                strWeek: todayStrWeek.add(5, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(5, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(5, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId018B",
                        task: "Assignment",
                        title: "Assignment #14",
                        date: dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 17: P.13-16",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId019B",
                        task: "Quiz",
                        title: "Quiz #4",
                        date: dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "This quiz will cover Chapter 15-17. No book or notes allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.add(6, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(6, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(6, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId020B",
                        task: "Assignment",
                        title: "Assignment #15",
                        date: dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 20: P.33, 34, and 38",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                ]
            },
            {
                strWeek: todayStrWeek.add(7, 'week').format("MMMM D"),
                endWeek: todayEndWeek.add(7, 'week').format("MMMM D"),
                iso8601: dayjs(`${todayEndWeek.add(7, 'week').format("MM/DD/YY")}-11:59 PM`,"MM/DD/YY-h:mm A").toISOString(),
                tasks: [
                    {
                        taskId: "taskId021B",
                        task: "Assignment",
                        title: "Assignment #16",
                        date: dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 21: P.23, 25, 27 and 29",
                        due: "After Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        taskId: "taskId022B",
                        task: "Exam",
                        title: "Final Exam",
                        date: dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Exam will cover all topics taught. No Notes or Book allowed",
                        due: "During Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    }
                ]
            },
        ]
    }

    if(course === "math245") {
        return math245;
    } else if(course === "math230") {
        return math230;
    } else {
        throw new Error("Course Not Found");
    }
}

export const math230Roster = [
    {
        name: "Abel Hank",
        gradeLvl: "Freshman",
        attendance: 92,
        grade: 73,
    },
    {
        name: "Abigail Baker",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Adams Hills",
        gradeLvl: "Freshman",
        attendance: 89,
        grade: 73,
    },
    {
        name: "Adams Henry",
        gradeLvl: "Sophomore",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Andrea Sam",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Benjamin Alvarez",
        gradeLvl: "Sophomore",
        attendance: 100,
        grade: 95,
    },
    {
        name: "Brian Clinton",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 95,
    },
    {
        name: "Charlotte Nguyen",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 98,
    },
    {
        name: "Chloe Zackery",
        gradeLvl: "Freshman",
        attendance: 97,
        grade: 73,
    },
    {
        name: "Daniel Brown",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 95,
    },
    {
        name: "Elliot Jim",
        gradeLvl: "Senior",
        attendance: 93,
        grade: 73,
    },
    {
        name: "Emily Gonzalez",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Fiona Smith",
        gradeLvl: "Freshman",
        attendance: 98,
        grade: 73,
    },
    {
        name: "Frank Zack",
        gradeLvl: "Sophomore",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Gabriel Till",
        gradeLvl: "Sophomore",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Gaby Rivera",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Gary Winston",
        gradeLvl: "Freshman",
        attendance: 95,
        grade: 73,
    },
    {
        name: "Hannah Wells",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Irene Zapada",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Isaac Thomas",
        gradeLvl: "Freshman",
        attendance: 95,
        grade: 73,
    },
    {
        name: "Jacob Torres",
        gradeLvl: "Sophomore",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Jasmine Yang",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Jay Sun",
        gradeLvl: "Freshman",
        attendance: 98,
        grade: 73,
    },
    {
        name: "Johnson White",
        gradeLvl: "Freshman",
        attendance: 70,
        grade: 73,
    },
    {
        name: "Maria Flores",
        gradeLvl: "Junior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Martina Lopez",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Maya Jones",
        gradeLvl: "Senior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Michael Smith",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Natalie Scott",
        gradeLvl: "Freshman",
        attendance: 98,
        grade: 73,
    },
    {
        name: "Nate Hills",
        gradeLvl: "Freshman",
        attendance: 98,
        grade: 73,
    },
    {
        name: "Noah Parker",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Olivia Sky",
        gradeLvl: "Sophomore",
        attendance: 92,
        grade: 73,
    },
    {
        name: "Olin Mike",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Pam Harrison",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Paul Carter",
        gradeLvl: "Senior",
        attendance: 88,
        grade: 73,
    },
    {
        name: "Peter Davis",
        gradeLvl: "Senior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Victor Benitez",
        gradeLvl: "Senior",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Victoria Robles",
        gradeLvl: "Freshman",
        attendance: 100,
        grade: 73,
    },
    {
        name: "Zachary Underwood",
        gradeLvl: "Junior",
        attendance: 92,
        grade: 73,
    },
];

