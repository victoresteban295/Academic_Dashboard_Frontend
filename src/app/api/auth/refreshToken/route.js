export async function POST(request) {
    const { value: username } = request.cookies.get('username');
    console.log(username);
    const res = await fetch('http://localhost:8080/api/auth/refresh-token', {
        method: "POST", 
        headers: request.headers 
    });

    return res;
}
