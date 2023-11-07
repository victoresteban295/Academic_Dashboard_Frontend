import NoList from "./ChecklistWidget/NoList";
import AllChecklistContent from "./ChecklistWidget/AllChecklistContent";

const ChecklistWidget = ({ 
    username, 
    checklists,
    changeChecklists,
    groups,
    changeGroups,
    activeList, 
    handleActiveList }) => {

    //Determine If User has Checklist
    const hasChecklists = (checklists.length > 0) || (groups.length > 0);
    
    return (
        <>
            {hasChecklists ? (
                <AllChecklistContent 
                    username={username}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    groups={groups}
                    changeGroups={changeGroups}
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
