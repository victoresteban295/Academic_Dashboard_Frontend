import { NextResponse } from "next/server"

export async function middleware(request) {

    if(request.nextUrl.pathname === '/') {
        const hasCookies = (request.cookies.has('accessToken')) && (request.cookies.has('username')) && (request.cookies.has('role'));
        if(hasCookies) {
            const { value: username } = request.cookies.get('username');
            const { value: cookieRole } = request.cookies.get('role');
            const role = cookieRole.toLowerCase();
            const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
                method: "POST", 
                headers: request.headers 
            });

            if(validationResponse.ok) {
                return NextResponse.redirect(`http://localhost:3000/${role}/${username}`);
            } else {
                return NextResponse.next();
            }
        } else {
            return NextResponse.next();
        }
    }

}


export const config = {
    matcher: '/:path'
}
