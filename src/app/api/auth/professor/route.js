export async function POST(request) {

    const { value: username } = request.cookies.get('username');
    const { value: jwt} = request.cookies.get('accessToken');

    //Validate Current Access Token
    const validationResponse = await fetch('http://localhost:8080/api/auth/valid/access-token', {
        method: "POST", 
        headers: request.headers
    });

    const body = await request.json();



    const res = await fetch('http://localhost:8080/api/auth/institution/verify', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return res;
}
