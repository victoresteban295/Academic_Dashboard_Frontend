import { NextResponse } from "next/server"

export async function middleware(request) {
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
    matcher: ['/student/:path*', '/professor/:path*']
}
