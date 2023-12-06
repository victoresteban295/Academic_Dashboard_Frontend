import { NextResponse } from "next/server"

export async function middleware(request) {

    //If Logged-in Users Attempt to Access Login Page
    //Redirects Them To Dashboard Page
    if(request.nextUrl.pathname === '/') {
        const hasCookies = (request.cookies.has('accessToken')) && (request.cookies.has('username')) && (request.cookies.has('role'));
        if(hasCookies) {
            const { value: username } = request.cookies.get('username');
            const { value: cookieRole } = request.cookies.get('role');
            const role = cookieRole.toLowerCase();

            try{
                //Validate Stored Jwt Access Token
                const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
                    method: "POST", 
                    headers: request.headers 
                });

                if(validationResponse.ok) {
                    return NextResponse.redirect(`http://localhost:3000/${role}/${username}`);
                } else {
                    return NextResponse.next();
                }

            } catch(error) {
            }
        } else {
            return NextResponse.next();
        }
    }

    //If Logged-Off Users Attempt to Access Any Page That Requires Login
    //Redirects Them To Login Page
    const hasCookies = (request.cookies.has('accessToken')) && (request.cookies.has('username')) && (request.cookies.has('role'));
    if(!hasCookies) {
        return NextResponse.redirect('http://localhost:3000/');
    } else {
        return NextResponse.next();
    }

}


export const config = {
    matcher: ['/', '/student/:path*', '/professor/:path*']
}
