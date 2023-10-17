import NoList from "@/components/checklist/NoList";

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
    const { username, role } = params;
    const checklists = await getUserChecklists(username);

    return (
        <NoList 
            username={username}
            role={role}
            checklists={checklists}
        />
    )
}

export default ChecklistPage;
