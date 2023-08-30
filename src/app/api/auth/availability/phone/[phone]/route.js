export async function GET(request, { params }) {
    let { phone } = params;
    const res = await fetch(`http://localhost:8080/api/auth/phone/taken/${phone}`, {
        method: "GET"
    });

    return res;
}
