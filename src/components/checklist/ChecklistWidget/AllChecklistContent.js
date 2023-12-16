"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ 
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

    return (
        <>
            {allChecklists.map(checklist => {
                const { listId, title, groupId, checkpoints, completedPoints } = checklist;
                return(
                    <ChecklistContent 
                        key={listId}
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
                        handleOpenAlert={handleOpenAlert}
                    />
                );
            })}
        </>
    )
}

export default AllChecklistContent;
