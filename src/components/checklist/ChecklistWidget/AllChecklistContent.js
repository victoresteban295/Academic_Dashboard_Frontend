"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ allChecklists, activeList, handleActiveList }) => {

    return (
        <>
            {allChecklists.map((checklist) => {
                const { listId, title, checkpoints } = checklist;
                return(
                    <ChecklistContent 
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        listId={listId}
                        title={title}
                        checkpoints={checkpoints}
                    />
                );
            })}
        </>
    )
}

export default AllChecklistContent;
