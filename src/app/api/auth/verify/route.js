export async function POST(request) {
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
