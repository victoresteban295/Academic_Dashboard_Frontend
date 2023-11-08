"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ 
    username,
    checklists,
    changeChecklists,
    groups,
    changeGroups,
    activeList, 
    handleActiveList }) => {

    let allChecklists = [...checklists];
    groups.map(group => {
        group.checklists.map(checklist => {
            allChecklists.push(checklist);
        })
    })

    return (
        <>
            {allChecklists.map(checklist => {
                const { listId, title, groupId, checkpoints, completedPoints } = checklist;
                return(
                    <ChecklistContent 
                        username={username}
                        groups={groups}
                        changeGroups={changeGroups}
                        checklists={checklists}
                        changeChecklists={changeChecklists}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        listId={listId}
                        title={title}
                        groupId={groupId}
                        checkpoints={checkpoints}
                        completedPoints={completedPoints}
                    />
                );
            })}
        </>
    )
}

export default AllChecklistContent;
