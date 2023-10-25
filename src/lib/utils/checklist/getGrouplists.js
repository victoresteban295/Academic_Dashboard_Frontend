import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

const getGrouplists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/${username}/get/grouplists`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        //NOTE: throw Error instead
        notFound();
    }

    return res.json();
}

export default getGrouplists;
