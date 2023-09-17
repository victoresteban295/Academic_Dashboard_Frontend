export async function POST(request) {
    const body = await request.json(); //Username & Password
    const res = await fetch('http://localhost:8080/api/auth/authenticate', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return res;
}
