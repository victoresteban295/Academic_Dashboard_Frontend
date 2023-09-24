import { NextResponse } from "next/server"

export async function middleware(request) {
    console.log(request.nextUrl.pathname)

    if(request.nextUrl.pathname === '/') {
        const hasCookies = (request.cookies.has('accessToken')) && (request.cookies.has('username')) && (request.cookies.has('role'));
        const { value: username } = request.cookies.get('username');
        const { value: cookieRole } = request.cookies.get('role');
        const role = cookieRole.toLowerCase();
        console.log(role);
        if(hasCookies) {
            const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
                method: "POST", 
                headers: request.headers 
            });

            if(validationResponse.ok) {
                return NextResponse.redirect(`http://localhost:3000/${role}/${username}`);
            } else {
                return NextResponse.redirect('http://localhost:3000/login');
            }

        } else {
            return NextResponse.redirect('http://localhost:3000/login');
        }
    }

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers 
    });
    
    if(validationResponse.ok) { 
        return NextResponse.next();
    } else { 
        //Redirect to Login Page
        return NextResponse.redirect('http://localhost:3000/login');
    }
}

export const config = {
    matcher: ['/', '/student/:path*', '/professor/:path*']
}
