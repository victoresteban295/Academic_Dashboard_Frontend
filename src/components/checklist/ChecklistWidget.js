import NoList from "./ChecklistWidget/NoList";
import AllChecklistContent from "./ChecklistWidget/AllChecklistContent";

const ChecklistWidget = ({ 
    username, 
    checklists,
    changeChecklists,
    groups,
    changeGroups,
    activeList, 
    handleActiveList, 
    handleOpenAlert }) => {

    let allChecklists = [...checklists];
    groups.map(group => {
        group.checklists.map(checklist => {
            allChecklists.push(checklist);
        })
    })

    //Determine If User has Checklist
    const hasChecklists = allChecklists.length > 0; 
    
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
                    handleOpenAlert={handleOpenAlert}
                />
            ) : (
                <NoList 
                    username={username}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    handleActiveList={handleActiveList}
                    handleOpenAlert={handleOpenAlert}
                />
            )}
        </>
    )
}

export default ChecklistWidget;
