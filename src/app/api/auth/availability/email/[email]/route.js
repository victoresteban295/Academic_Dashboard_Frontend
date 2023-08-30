export async function GET(request, { params }) {
    let { email } = params;
    const res = await fetch(`http://localhost:8080/api/auth/email/taken/${email}`, {
        method: "GET"
    });

    return res;
}
