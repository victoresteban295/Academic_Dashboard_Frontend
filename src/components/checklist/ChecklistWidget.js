import getAllChecklists from "@/lib/utils/checklist/getAllChecklists";
import NoList from "./ChecklistWidget/NoList";
import AllChecklistContent from "./ChecklistWidget/AllChecklistContent";

const ChecklistWidget = async ({ username }) => {
    const checklists = await getAllChecklists(username);
    const hasChecklists = checklists.length > 0;
    
    return (
        <>
            {hasChecklists ? (
                <AllChecklistContent 
                    checklists={checklists}
                />
            ) : (
                <NoList 
                />
            )}
        </>
    )
}

export default ChecklistWidget;
