import ChecklistWidget from "@/components/checklist/ChecklistWidget";
import NoList from "@/components/checklist/NoList";
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";

const getUserListIds = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');
    const res = await fetch(`http://localhost:8080/api/${username}/get/listIds`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

const getUserChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');
    const res = await fetch(`http://localhost:8080/api/${username}/get/checklists`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

const ChecklistPage = async ({ params }) => {
    let checklists;
    const { username } = params;
    const listIds = await getUserListIds(username);
    const hasChecklists = (listIds.length > 0);

    if(hasChecklists) {
        checklists = await getUserChecklists(username);
    }

    return (
        <>
            {hasChecklists ? (
                    <ChecklistWidget 
                        checklists={checklists}
                        listIds={listIds}
                    />
                ):(
                    <NoList />
            )}
        </>
    )
}

export default ChecklistPage;
