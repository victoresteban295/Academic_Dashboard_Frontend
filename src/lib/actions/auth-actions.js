"use server"

export const validateInstitution = async (data) => {
    //Backend REST API
    const res = await fetch('http://localhost:8080/api/auth/institution/verify', {
        cache: "no-cache",
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            profile: data.profileType,
            codeId: data.schoolId
        })
    });

    const body = await res.json();

    if(res.ok) {
        return {
            success: true,
            ...body,
        }
    } else {
        return {
            success: false
        }
    }
    
}


export const registerUser = async (
    profileType, 
    institution, 
    idCode, 
    firstname,
    middlename,
    lastname,
    birthMonth,
    birthDay,
    birthYear,
    email,
    phone,
    username,
    password,
    academicRole,
    apptYear,
    department,
    officeBuilding,
    officeRoom,
    academicYear,
    major,
    minor,
    concentration) => {

    const res = await fetch('http://localhost:8080/api/auth/register', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            profileType: profileType,
            schoolName: institution,
            schoolid: idCode,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            birthMonth: birthMonth,
            birthDay: birthDay,
            birthYear: birthYear,
            email: email,
            phone: phone,
            username: username,
            password: password,
            academicRole: academicRole,
            apptYear: apptYear,
            department: department,
            officeBuilding: officeBuilding,
            officeRoom: officeRoom,
            gradeLvl: academicYear,
            major: major,
            minor: minor,
            concentration: concentration,
        })
    });

    if(res.ok) {
        return {
            success: true,
        }
    } else {
        return {
            success: false
        }
    }
}
