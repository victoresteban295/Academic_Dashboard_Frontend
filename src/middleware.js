import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server"

export async function middleware(request) {
    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers 
    });
    
    if(validationResponse.ok) { 
        return NextResponse.next({
            headers: request.headers
        });
    } else { 
        //Remove Expired Access Token From Header
        const reqHeader = new Headers(request.headers);
        reqHeader.delete('Authorization');

        //Use Refresh Token to Get New Access Token
        const refreshTokenResponse = await fetch('http://localhost:8080/api/auth/refresh-token', {
            method: "POST", 
            headers: reqHeader
        });
        
        if(refreshTokenResponse.ok) { //Valid Refresh Token
            const setCookies = refreshTokenResponse.headers.get('Set-Cookie');
            const cookies = setCookies.split(" ");
            
            let jwtCookie;
            for(const cookie of cookies) {
                if(cookie.includes("accessToken=")) {
                    jwtCookie = cookie;
                    break;
                }
            }
            const jwt = jwtCookie.substring(12, jwtCookie.length - 1);
            
            const refreshHeader = new Headers(refreshTokenResponse.headers);
            /* refreshHeader.append('Content-Type', 'application/json'); */
            /* refreshHeader.append('Authorization', jwt); */

            return NextResponse.next({
                headers: refreshHeader 
            })

        } else { //Invalid Refresh Token
            //Redirect to Login Page
            return NextResponse.redirect('http://localhost:3000/login');
        }
    }

}

export const config = {
    matcher: ['/stud/:path*', '/api/usr/:path*']
}
