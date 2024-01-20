export async function GET(request, { params }) {
    let { email } = params;
    const res = await fetch(`http://localhost:8080/v1.0/auth/email/${email}`, {
        method: "GET"
    });

    return res;
}
