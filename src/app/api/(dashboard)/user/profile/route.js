export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const username = searchParams.get('username');

    const { value: jwt} = request.cookies.get('accessToken');
    console.log(jwt);

    const res = await fetch(`http://localhost:8080/api/user/profile/${role}/${username}`, {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
    });

    return res;
}
