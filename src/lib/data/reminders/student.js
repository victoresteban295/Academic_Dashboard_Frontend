import dayjs from "dayjs";

export const getStudentReminders = (today) => {
    const todayDate = today.format("MM/DD/YY");
    const groupIds = ['nnroeiwa86', 'xv45uuiuiui', '873uiuiuia', 'today', 'upcoming'];

    const todayReminders = [
        {
            group: 'Personal',
            groupId: '873uiuiuia',
            remindId: 'p0toomdrdy',
            title: 'Pick Up Package At Post Office',
            description: "",
            startDate: today.subtract(1, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'School',
            groupId: 'nnroeiwa86',
            remindId: '34as3-en23',
            title: 'Enroll to Next Semester Classes',
            description: "First enroll to Math 430 and CS 423",
            startDate: todayDate,
            time: "10:00 AM",
            iso8601: dayjs(`${todayDate}-10:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Personal',
            groupId: '873uiuiuia',
            remindId: 'ndjeujdrd9',
            title: 'Meeting with Dr.Wilson',
            description: "Ask about extra credit for midterm project",
            startDate: todayDate,
            time: "5:00 PM",
            iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Bills',
            groupId: 'xv45uuiuiui',
            remindId: 'p0o3kjjdrd',
            title: 'Pay Rent',
            description: "Ask Roomates for their corresponding amount",
            startDate: todayDate,
            time: "11:00 PM",
            iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        }
    ]

    const upcomingReminders = [
        {
            group: 'Personal',
            groupId: '873uiuiuia',
            remindId: 'p0toomdrdy',
            title: 'Pick Up Package At Post Office',
            description: "",
            startDate: today.subtract(1, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'School',
            groupId: 'nnroeiwa86',
            remindId: '34as3-en23',
            title: 'Enroll to Next Semester Classes',
            description: "First enroll to Math 430 and CS 423",
            startDate: todayDate,
            time: "10:00 AM",
            iso8601: dayjs(`${todayDate}-10:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Personal',
            groupId: '873uiuiuia',
            remindId: 'ndjeujdrd9',
            title: 'Meeting with Dr.Wilson',
            description: "Ask about extra credit for midterm project",
            startDate: todayDate,
            time: "5:00 PM",
            iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Bills',
            groupId: 'xv45uuiuiui',
            remindId: 'p0o3kjjdrd',
            title: 'Pay Rent',
            description: "Ask Roomates for their corresponding amount",
            startDate: todayDate,
            time: "11:00 PM",
            iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Bills',
            groupId: 'xv45uuiuiui',
            remindId: 'cell-one34',
            title: 'Pay Cellphone Bill',
            description: "",
            startDate: today.add(15, 'day').format("MM/DD/YY"),
            time: "8:00 AM",
            iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Bills',
            groupId: 'xv45uuiuiui',
            remindId: '34interyrd',
            title: 'Pay Internet Bill',
            description: "",
            startDate: today.add(15, 'day').format("MM/DD/YY"),
            time: "8:00 AM",
            iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'School',
            groupId: 'nnroeiwa86',
            remindId: 'no8th2esyu',
            title: 'Submit Houseing Form For Next Semester',
            description: "",
            startDate: today.add(15, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Bills',
            groupId: 'xv45uuiuiui',
            remindId: 'no8t-984yu',
            title: 'Pay Northeast Bank Credit Card',
            description: "Only pay the minimum payment of $40",
            startDate: today.add(25, 'day').format("MM/DD/YY"),
            time: "12:00 PM",
            iso8601: dayjs(`${today.add(25, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        },
        {
            group: 'Personal',
            groupId: '873uiuiuia',
            remindId: 'grads-hool',
            title: 'Submit Insurance Renewal Application',
            description: "Upload needed documents to dashboard",
            startDate: today.add(2, 'month').format("MM/DD/YY"),
            time: "5:00 PM",
            iso8601: dayjs(`${today.add(2, 'month').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
        }
    ]

    const groups = [
        {
            groupId: '873uiuiuia',
            title: 'Personal',
            reminders: [
                {
                    group: 'Personal',
                    groupId: '873uiuiuia',
                    remindId: 'p0toomdrdy',
                    title: 'Pick Up Package At Post Office',
                    description: "",
                    startDate: today.subtract(1, 'day').format("MM/DD/YY"),
                    time: "12:00 PM",
                    iso8601: dayjs(`${today.subtract(1, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Personal',
                    groupId: '873uiuiuia',
                    remindId: 'ndjeujdrd9',
                    title: 'Meeting with Dr.Wilson',
                    description: "Ask about extra credit for midterm project",
                    startDate: todayDate,
                    time: "5:00 PM",
                    iso8601: dayjs(`${todayDate}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Personal',
                    groupId: '873uiuiuia',
                    remindId: 'grads-hool',
                    title: 'Submit Insurance Renewal Application',
                    description: "Upload needed documents to dashboard",
                    startDate: today.add(2, 'month').format("MM/DD/YY"),
                    time: "5:00 PM",
                    iso8601: dayjs(`${today.add(2, 'month').format("MM/DD/YY")}-5:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                }
            ]
        },
        {
            groupId: 'xv45uuiuiui',
            title: 'Bills',
            reminders: [
                {
                    group: 'Bills',
                    groupId: 'xv45uuiuiui',
                    remindId: 'p0o3kjjdrd',
                    title: 'Pay Rent',
                    description: "Ask Roomates for their corresponding amount",
                    startDate: todayDate,
                    time: "11:00 PM",
                    iso8601: dayjs(`${todayDate}-11:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Bills',
                    groupId: 'xv45uuiuiui',
                    remindId: 'cell-one34',
                    title: 'Pay Cellphone Bill',
                    description: "",
                    startDate: today.add(15, 'day').format("MM/DD/YY"),
                    time: "8:00 AM",
                    iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Bills',
                    groupId: 'xv45uuiuiui',
                    remindId: '34interyrd',
                    title: 'Pay Internet Bill',
                    description: "",
                    startDate: today.add(15, 'day').format("MM/DD/YY"),
                    time: "8:00 AM",
                    iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-8:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'Bills',
                    groupId: 'xv45uuiuiui',
                    remindId: 'no8t-984yu',
                    title: 'Pay Northeast Bank Credit Card',
                    description: "Only pay the minimum payment of $40",
                    startDate: today.add(25, 'day').format("MM/DD/YY"),
                    time: "12:00 PM",
                    iso8601: dayjs(`${today.add(25, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
                }
            ],
        },
        {
            groupId: 'nnroeiwa86',
            title: 'School',
            reminders: [
                {
                    group: 'School',
                    groupId: 'nnroeiwa86',
                    remindId: '34as3-en23',
                    title: 'Enroll to Next Semester Classes',
                    description: "First enroll to Math 430 and CS 423",
                    startDate: todayDate,
                    time: "10:00 AM",
                    iso8601: dayjs(`${todayDate}-10:00 AM`,"MM/DD/YY-h:mm A").toISOString()
                },
                {
                    group: 'School',
                    groupId: 'nnroeiwa86',
                    remindId: 'no8th2esyu',
                    title: 'Submit Houseing Form For Next Semester',
                    description: "",
                    startDate: today.add(15, 'day').format("MM/DD/YY"),
                    time: "12:00 PM",
                    iso8601: dayjs(`${today.add(15, 'day').format("MM/DD/YY")}-12:00 PM`,"MM/DD/YY-h:mm A").toISOString()
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
