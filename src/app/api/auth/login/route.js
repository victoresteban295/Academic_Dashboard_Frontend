import { cookies } from 'next/headers'

export async function POST(request) {
    const body = await request.json(); //Username & Password
    const res = await fetch('http://localhost:8080/api/auth/authenticate', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if(res.ok) {
        const data = await res.json(); //Authentication Response
        
        //Extract Data From Authentication Response
        const username = data.username;
        const refreshToken = data.refreshToken;
        const accessToken = data.accessToken;

        //Set Cookies
        cookies().set('username', username); 
        cookies().set('refreshToken', refreshToken); 
        cookies().set('accessToken', accessToken); 
    } 
    return res;
}
