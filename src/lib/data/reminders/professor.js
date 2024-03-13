import dayjs from "dayjs"

export const getProfessorReminders = (today) => {
    const todayDate = today.format("MM/DD/YY");
    const groupIds = ['aaaauuiuiui', 'btrep8765k', '873uiu1234', 'nnroei1234', 'today', 'upcoming'];

    const todayReminders = [
        {
            group: 'Math 230',
            groupId: '873uiu1234',
            remindId: 'p0toom1234',
            title: 'Send Out Study Guide for Next Midterm',
            description: "",
            startDate: today.subtract(1, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math Department',
            groupId: 'nnroei1234',
            remindId: '34as3-abcd',
            title: 'Email Academic Report to Staff',
            description: "Include a copy of student roster",
            startDate: todayDate,
            time: "8:00 AM",
            iso8601: dayjs(`${todayDate}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math Department',
            groupId: 'nnroei1234',
            remindId: 'nhtrerer87',
            title: 'Approve Key-Card Access to Lab',
            description: "Notify students after approval",
            startDate: todayDate,
            time: "5:00 PM",
            iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math 230',
            groupId: '873uiu1234',
            remindId: 'kiwqjdrd9',
            title: 'Reserve Room 215 for Study Session',
            description: "Remind students about the study session",
            startDate: todayDate,
            time: "11:00 PM",
            iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        }
    ]

    const upcomingReminders = [
        {
            group: 'Math 230',
            groupId: '873uiu1234',
            remindId: 'p0toom1234',
            title: 'Send Out Study Guide for Next Midterm',
            description: "",
            startDate: today.subtract(1, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math Department',
            groupId: 'nnroei1234',
            remindId: '34as3-abcd',
            title: 'Email Academic Report to Staff',
            description: "Include a copy of student roster",
            startDate: todayDate,
            time: "8:00 AM",
            iso8601: dayjs(`${todayDate}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math Department',
            groupId: 'nnroei1234',
            remindId: 'nhtrerer87',
            title: 'Approve Key-Card Access to Lab',
            description: "Notify students after approval",
            startDate: todayDate,
            time: "5:00 PM",
            iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math 230',
            groupId: '873uiu1234',
            remindId: 'kiwqjdrd9',
            title: 'Reserve Room 215 for Study Session',
            description: "Remind students about the study session",
            startDate: todayDate,
            time: "11:00 PM",
            iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math 245',
            groupId: 'btrep8765k',
            remindId: '763dv-12345',
            title: 'Email Grades for Quiz',
            description: "",
            startDate: today.add(15, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math 230',
            groupId: '873uiu1234',
            remindId: 'qawsqw213e',
            title: 'Upload New Homework Assignment',
            description: "Chapter 14: P.35-P.41",
            startDate: today.add(25, 'day').format("MM/DD/YY"),
            time: "5:00 PM",
            iso8601: dayjs(`${today.add(25, 'day').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Math 245',
            groupId: 'btrep8765k',
            remindId: 'cell-12345',
            title: 'Add New Date for Next Exam',
            description: "",
            startDate: today.add(2, 'month').format("MM/DD/YY"),
            time: "5:00 PM",
            iso8601: dayjs(`${today.add(2, 'month').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        }
    ]

    const groups = [
        {
            groupId: 'nnroei1234',
            title: 'Math Department',
            reminders: [
                {
                    group: 'Math Department',
                    groupId: 'nnroei1234',
                    remindId: '34as3-abcd',
                    title: 'Email Academic Report to Staff',
                    description: "Include a copy of student roster",
                    startDate: todayDate,
                    time: "8:00 AM",
                    iso8601: dayjs(`${todayDate}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Math Department',
                    groupId: 'nnroei1234',
                    remindId: 'nhtrerer87',
                    title: 'Approve Key-Card Access to Lab',
                    description: "Notify students after approval",
                    startDate: todayDate,
                    time: "5:00 PM",
                    iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                }
            ]
        },
        {
            groupId: '873uiu1234',
            title: 'Math 230',
            reminders: [
                {
                    group: 'Math 230',
                    groupId: '873uiu1234',
                    remindId: 'p0toom1234',
                    title: 'Send Out Study Guide for Next Midterm',
                    description: "",
                    startDate: today.subtract(1, 'day').format("MM/DD/YY"),
                    time: "12:00 PM",
                    iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Math 230',
                    groupId: '873uiu1234',
                    remindId: 'kiwqjdrd9',
                    title: 'Reserve Room 215 for Study Session',
                    description: "Remind students about the study session",
                    startDate: todayDate,
                    time: "11:00 PM",
                    iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Math 230',
                    groupId: '873uiu1234',
                    remindId: 'qawsqw213e',
                    title: 'Upload New Homework Assignment',
                    description: "Chapter 14: P.35-P.41",
                    startDate: today.add(25, 'day').format("MM/DD/YY"),
                    time: "5:00 PM",
                    iso8601: dayjs(`${today.add(25, 'day').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                }
            ],
        },
        {
            groupId: 'btrep8765k',
            title: 'Math 245',
            reminders: [
                {
                    group: 'Math 245',
                    groupId: 'btrep8765k',
                    remindId: '763dv-12345',
                    title: 'Email Grades for Quiz',
                    description: "",
                    startDate: today.add(15, 'day').format("MM/DD/YY"),
                    time: "12:00 PM",
                    iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Math 245',
                    groupId: 'btrep8765k',
                    remindId: 'cell-12345',
                    title: 'Add New Date for Next Exam',
                    description: "",
                    startDate: today.add(2, 'month').format("MM/DD/YY"),
                    time: "5:00 PM",
                    iso8601: dayjs(`${today.add(2, 'month').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                }
            ]
        }
    ]

    return {
        allGroupIds: groupIds,
        todayReminders: todayReminders,
        upcomingReminders: upcomingReminders,
        groups: groups
    }
}
