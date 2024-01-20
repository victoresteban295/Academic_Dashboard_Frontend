export async function GET(request, { params }) {
    let { username } = params;
    const res = await fetch(`http://localhost:8080/v1.0/auth/username/${username}`, {
        method: "GET"
    });

    return res;
}
