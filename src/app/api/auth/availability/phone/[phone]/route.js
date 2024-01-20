export async function GET(request, { params }) {
    let { phone } = params;
    const res = await fetch(`http://localhost:8080/v1.0/auth/phone/${phone}`, {
        method: "GET"
    });

    return res;
}
