import { NextResponse } from "next/server"

export async function POST(request) {
    const credentials = await request.json();
    const reqRole = credentials.role;
    const reqUsername = credentials.username;

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers
    });
    
    if(validationResponse.ok) { 
        const authorize = await validationResponse.json();
        const isAuthorized = (reqRole === authorize.role) && (reqUsername === authorize.username);

        if(isAuthorized) {
            return validationResponse;
        } else {
            return new NextResponse(null, {status: 401, statusText: 'unauthorized error'});
        }
    } else { 
        //Use Refresh Token to Get New Access Token
        const refreshTokenResponse = await fetch('http://localhost:8080/api/auth/refresh-token', {
            method: "POST", 
            headers: request.headers
        });

        if(refreshTokenResponse.ok) { //Valid Refresh Token
            const authorize = await refreshTokenResponse.json();
            const isAuthorized = (reqRole === authorize.role) && (reqUsername === authorize.username);

            if(isAuthorized) {
                return new NextResponse(authorize, {headers: refreshTokenResponse.headers, status: 200})
            } else {
                return new NextResponse(null, {status: 401, statusText: 'unauthorized error'});
            }
        } else { //Invalid Refresh Token
            //Redirect to Login Page
            return NextResponse.redirect('http://localhost:3000/login');
        }
    }
}
