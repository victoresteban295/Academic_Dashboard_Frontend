export async function POST(request) {
    const { value: username } = request.cookies.get('username');
    const { value: jwt} = request.cookies.get('accessToken');
    const body = await request.json();

    //Cookies Sent to Validation & Refresh's Backend Api Calls
    const reqHeaders = new Headers(request.headers)
    const reqCookies = reqHeaders.get('Cookie');

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: {
            "Cookie": reqCookies
        } 
    });

    if(!validationResponse.ok) {
        const refreshTokenResponse = await fetch('http://localhost:8080/api/auth/refresh-token', {
            method: "POST", 
            headers: {
                "Cookie": reqCookies
            } 
        });

        if(refreshTokenResponse.ok) {
            const setCookies = refreshTokenResponse.headers.get('Set-Cookie');
            const cookies = setCookies.split(" ");
            
            let jwtCookie;
            for(const cookie of cookies) {
                if(cookie.includes("accessToken=")) {
                    jwtCookie = cookie;
                    break;
                }
            }
            const updatedJwt = jwtCookie.substring(12, jwtCookie.length - 1);

            //Backend Api Endpoint
            const res = await fetch(`http://localhost:8080/api/stud/checklist/${username}/new`, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${updatedJwt}`
                },
                body: JSON.stringify(body)

            });

            const checklist = await res.json();

            //Attach New Cookies to Response Header
            const resHeader = new Headers(res.headers);
            resHeader.append('Set-Cookie', setCookies);
            return new Response(JSON.stringify(checklist), {headers: resHeader});

        } else {
            return new Response(null, { status: 401});
        }
    } 

    const res = await fetch(`http://localhost:8080/api/stud/checklist/${username}/new`, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify(body)

    });

    return res;

}
