export async function GET(request, { params }) {
    let { username } = params;
    const res = await fetch(`http://localhost:8080/api/auth/username/taken/${username}`, {
        method: "GET"
    });

    return res;
}
