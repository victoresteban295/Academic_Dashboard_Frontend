export const course = {

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
            section: "This course is “hands-on” and class participation at every class and lab is very important to learn the material. Excessive unexcused attendance and/or tardiness will result in some reduction of the final grade, in addition to the no-credit policy toward in-class homework (see “Homework” below). I regard more than 10% of the approximately 40 days scheduled for class discussions (that works out to 4 days) to be in danger of becoming excessive."
        },
        {
            title: "Homework Policy",
            info: "Homework will consist of problem assignments and in-class exercises. Problems will be posted and collected on the course website. Each homework problem will be graded on a 10-point scale, and your homework will be submitted via the course web. To facilitate this, there is a scanner at the back of the room. While we strongly encourage you to work with one another on the homework assignments, the material you turn in must represent your own work. Late problem assignments will be accepted at my discretion. A significant penalty will be assessed on late problem assignments except in cases of emergency or illness documented by the Health Service or by prior arrangement. In-class exercises cannot be made up except in cases of emergency or illness documented by the Health Service or by prior arrangement. Evidence of copying on homework or evidence that someone else has completed and submitted your homework assignment on your behalf will result in a letter to the Dean of Students, which will trigger the college’s judicial process for academic integrity."
        }
    ],

    /* Course Schedule */
    schedule: [
        {
            location: "Palenske Hall 230",
            days: [ "Mon", "Thu", "Fri" ],
            strTime: "9:15 AM",
            endTime: "10:20 PM",
        },
        {
            location: "Norris Center 100",
            days: [ "Tue" ],
            strTime: "1:00 PM",
            endTime: "2:00 PM",
        }
    ],

    /* Tasks */
    upcoming: [
        {
            task: "Assignment",
            title: "Homework #11: Ch.27 to Ch.28",
            date: "02/20/24",
            note: "",
            due: "Before Class",
        },
        {
            task: "Exam",
            title: "Midterm Exam",
            date: "02/23/24",
            note: "",
            due: "End of Day",
        }
    ], 
    past: [
        {
            task: "Assignment",
            title: "Homework #11: Ch.27 to Ch.28",
            date: "02/20/24",
            note: "",
            due: "5:00 PM",
        },
        {
            task: "Exam",
            title: "Midterm Exam",
            date: "02/23/24",
            note: "",
            due: "During Class",
        }
    ]
}
