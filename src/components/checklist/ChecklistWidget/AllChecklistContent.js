"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ 
    username,
    allChecklists, 
    grouplists,
    activeList, 
    handleActiveList }) => {

    return (
        <>
            {allChecklists.map((checklist) => {
                const { listId, title, groupId, checkpoints, completedPoints } = checklist;
                return(
                    <ChecklistContent 
                        username={username}
                        grouplists={grouplists}
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
