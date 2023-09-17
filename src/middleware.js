import { NextResponse } from "next/server"

export async function middleware(request) {

    //Extract Username & Role From Requested Path
    const credentials = request.nextUrl.pathname.split('/'); 
    const reqRole = credentials[1];
    const reqUsername = credentials[2];

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers
    });
    
    if(validationResponse.ok) { 
        const authorize = await validationResponse.json();
        const isAuthorized = (reqRole === authorize.role) && (reqUsername === authorize.username);

        if(isAuthorized) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect('http://localhost:3000/unauthorized'); //Redirect to Login Page
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
                return NextResponse.next({
                    headers: refreshTokenResponse.headers
                });
            } else {
                //Unauthorzed Page
                return NextResponse.redirect('http://localhost:3000/unauthorized'); //Redirect to Login Page
            }
        } else { //Invalid Refresh Token
            //Redirect to Login Page
            return NextResponse.redirect('http://localhost:3000/login');
        }
    }

}

export const config = {
    matcher: ['/us/:path*', '/nyu/:path*']
}
