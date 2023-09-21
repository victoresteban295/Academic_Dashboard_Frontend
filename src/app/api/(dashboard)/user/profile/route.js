import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const username = searchParams.get('username');

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers 
    });

    if(!validationResponse.ok) {
        //Remove Expired Access Token From Header
        const reqHeader = new Headers(request.headers);
        reqHeader.delete('Authorization');
        
        console.log("Before Refresh Token Api Call")
        const refreshTokenResponse = await fetch('http://localhost:8080/api/auth/refresh-token', {
            method: "POST", 
            headers: reqHeader
        });
        console.log("After Refresh Token Api Call")

        if(refreshTokenResponse.ok) {
            console.log("Refresh Token Api Call Was Ok")
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
            console.log("Jwt Extracted:")
            console.log(jwt)
            
            /* const refreshHeader = new Headers(refreshTokenResponse.headers); */
            /* refreshHeader.append('Content-Type', 'application/json'); */
            /* refreshHeader.append('Authorization', jwt); */

            console.log("Before Backend Api Call")
            //Backend Api Endpoint
            const res = await fetch(`http://localhost:8080/api/user/profile/${role}/${username}`, {
                method: "GET", 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                }, 
            });
            console.log("After Backend Api Call")
            console.log("Backend Body: ")
            const user = await res.json();
            console.log(user);


            //Attach New Cookies to Response Header
            const resHeader = new Headers(res.headers);
            resHeader.append('Set-Cookie', setCookies);
            return new Response(JSON.stringify(user), {headers: resHeader});

            /* res.headers.append('Set-Cookie', setCookies); */

            /* return NextResponse.json({ user }); */
            /* const response = res; */
            /* response.headers.append('Set-Cookie', jwtCookie); */
            /* return response; */


        } else {
            return NextResponse.redirect('http://localhost:3000/login');
        }
    } 

    const res = await fetch(`http://localhost:8080/api/user/profile/${role}/${username}`, {
        method: "GET", 
        headers: request.headers, 
    });

    return res;
}
