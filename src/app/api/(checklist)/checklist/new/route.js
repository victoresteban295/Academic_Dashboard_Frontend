export async function POST(request) {
    const { value: username } = request.cookies.get('username');
    const { value: jwt} = request.cookies.get('accessToken');

    const body = await request.json();
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
