import { cookies } from "next/dist/client/components/headers";

export async function POST(request) {
    cookies().delete('username');
    cookies().delete('role');
    cookies().delete('accessToken');

    const res = await fetch('http://localhost:8080/api/auth/logout', {
        method: "POST", 
    });

    return res;
} 
