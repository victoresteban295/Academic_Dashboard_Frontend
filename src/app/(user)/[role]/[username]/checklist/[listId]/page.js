import ChecklistContent from "@/components/checklist/ChecklistContent";

const ChecklistContentPage = ({ params }) => {
    const { username, listId } = params;
    return (
        <ChecklistContent 
            username={username}
            listId={listId}
        />
    )
}

export default ChecklistContentPage;
