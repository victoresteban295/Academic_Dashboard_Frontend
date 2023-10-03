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

