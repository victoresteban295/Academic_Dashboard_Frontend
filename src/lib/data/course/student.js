import dayjs from "dayjs";

export const getCourse = (course, today) => {

    /* Current Week */
    const todayDate = today.format("MM/DD/YY");
    const todayStrWeek = dayjs(todayDate, "MM/DD/YY").startOf('week');
    const todayEndWeek = dayjs(todayDate, "MM/DD/YY").endOf('week');

        
    const math245 = {

        /* Professor Information */
        school: "Academic College",
        instructor: "Dr.Seely",
        office: "Palenske Hall 330",
        phone: "323 233-3221",
        email: "dseely@college.edu",

        /* Course Information */
        course: "Math 245",
        dept: "Mathematics",
        title: "Math 245: Differental Equations",
        section: "1A",
        semester: "Spring 2024",
        strDate: "01/16/24",
        endDate: "04/26/24",

        /* Syllabus Information */
        description: "The use of linear and integrated circuits, discrete devices, amplifiers, power supplies, oscillators and digital logic in experimental design and data acquisition. Applications of measurement instrumentation. Upon completion of the course, students should have an understanding of electronic circuits and devices appropriate to the level of the course. Students should demonstrate inductive and deductive problem solving skills using methods that are conceptual and analytical (theoretical/mathematical), numerical (computer simulation), and practical (construct/ operate/ troubleshoot). Students will develop these competencies thorough the study of in topics covered in the course including: digital devices and circuits, passive analog circuits (R/L/C), discrete semiconductor devices (diodes, transistors, and other semiconductor devices), integrated circuit logic devices, integrated linear circuits (operational amplifiers), active circuits (feedback) complex voltages and impedance, Thévenin and Norton equivalent circuits, filters and transfer functions, and be able to apply Kirchoff’s Laws to circuits with either DC and AC sources. Assessment of student achievement will be accomplished through assigned homework, laboratory exercises, projects, and exams.",
        infoSections: [
            {
                title: "Attendance Policy",
                info: "This course is “hands-on” and class participation at every class and lab is very important to learn the material. Excessive unexcused attendance and/or tardiness will result in some reduction of the final grade, in addition to the no-credit policy toward in-class homework (see “Homework” below). I regard more than 10% of the approximately 40 days scheduled for class discussions (that works out to 4 days) to be in danger of becoming excessive."
            },
            {
                title: "Homework Policy",
                info: "Homework will consist of problem assignments and in-class exercises. Problems will be posted and collected on the course website. Each homework problem will be graded on a 10-point scale, and your homework will be submitted via the course web. To facilitate this, there is a scanner at the back of the room. While we strongly encourage you to work with one another on the homework assignments, the material you turn in must represent your own work. Late problem assignments will be accepted at my discretion. A significant penalty will be assessed on late problem assignments except in cases of emergency or illness documented by the Health Service or by prior arrangement. In-class exercises cannot be made up except in cases of emergency or illness documented by the Health Service or by prior arrangement. Evidence of copying on homework or evidence that someone else has completed and submitted your homework assignment on your behalf will result in a letter to the Dean of Students, which will trigger the college’s judicial process for academic integrity."
            }
        ],

        /* Course Schedule */
        schedules: [
            {
                location: "Palenske Hall 230",
                days: [ "Mon", "Thu", "Fri" ],
                strTime: "9:15 AM",
                endTime: "10:20 PM",
            },
            {
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
                        task: "Assignment",
                        title: "Homework #1",
                        date: "01/17/24",
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
                        task: "Assignment",
                        title: "Homework #2",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY"),
                        note: "Chapter 2: P.12 - P.15",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(1, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        task: "Assignment",
                        title: "Homework #3",
                        date: dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 3: P.14 - P.23",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(7, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #5",
                        date: dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 5: P.3 - P.6",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #7",
                        date: dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 7: P.2 - P.5",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(4, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #8",
                        date: dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 8: P.30 - P.33",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #10",
                        date: dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 10: P.45",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #12",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 12: P.3 - P.6",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        task: "Assignment",
                        title: "Homework #13",
                        date: dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 13: P.10 - P.13",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.subtract(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #15",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 15: P.15 - P.19",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        task: "Assignment",
                        title: "Homework #16",
                        date: dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 16: P.29 - P.34",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(1, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #17",
                        date: dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 17: P.3 - P.7",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(2, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #19",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 19: P.44 - P.48",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
                        task: "Assignment",
                        title: "Homework #20",
                        date: dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY"),
                        note: "Chapter 20: P.16 - P.23",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(3, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(4, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #22",
                        date: dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 22: P.44 - P.48",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(5, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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
                        task: "Assignment",
                        title: "Homework #24",
                        date: "04/23/24",
                        date: dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY"),
                        note: "Chapter 24: P.32 - P.37",
                        due: "Before Class",
                        iso8601: dayjs(`${dayjs(`${todayStrWeek.add(6, 'week').format("MM/DD/YY")}`, "MM/DD/YY").add(2, 'day').format("MM/DD/YY")}-12:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                    },
                    {
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


    if(course === "math245") {
        return math245;
    }
}



