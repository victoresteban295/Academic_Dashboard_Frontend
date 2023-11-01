"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ 
    username,
    allChecklists, 
    grouplists,
    groupedListIds, 
    activeList, 
    handleActiveList }) => {

    return (
        <>
            {allChecklists.map((checklist) => {
                const { listId, title, checkpoints, completedPoints } = checklist;
                const isGrouped = groupedListIds.includes(listId);
                return(
                    <ChecklistContent 
                        username={username}
                        isGrouped={isGrouped}
                        grouplists={grouplists}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        listId={listId}
                        title={title}
                        checkpoints={checkpoints}
                        completedPoints={completedPoints}
                    />
                );
            })}
        </>
    )
}

export default AllChecklistContent;
