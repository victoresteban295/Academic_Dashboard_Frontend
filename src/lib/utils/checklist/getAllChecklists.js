import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

const getAllChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/${username}/get/all/checklists`, {
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

export default getAllChecklists;
