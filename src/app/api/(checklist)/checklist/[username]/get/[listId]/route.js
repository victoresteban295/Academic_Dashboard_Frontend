export async function GET(request, {params}) {
    const {value: jwt} = request.cookies.get('accessToken'); 

    const { username, listId } = params;
    const res = await fetch(`http://localhost:8080/api/checklist/${username}/get/${listId}`, {
        cache: 'no-cache',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
    });

    return res;
}
