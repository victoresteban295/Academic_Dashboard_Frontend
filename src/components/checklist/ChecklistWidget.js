import getAllChecklists from "@/lib/utils/checklist/getAllChecklists";
import NoList from "./ChecklistWidget/NoList";
import AllChecklistContent from "./ChecklistWidget/AllChecklistContent";

const ChecklistWidget = ({ 
    username, 
    grouplists,
    groupedListIds, 
    activeList, 
    handleActiveList, 
    allChecklists }) => {

    const hasChecklists = allChecklists.length > 0;
    
    return (
        <>
            {hasChecklists ? (
                <AllChecklistContent 
                    username={username}
                    allChecklists={allChecklists}
                    grouplists={grouplists}
                    groupedListIds={groupedListIds}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                />
            ) : (
                <NoList 
                />
            )}
        </>
    )
}

export default ChecklistWidget;
