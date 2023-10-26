"use client"
import ChecklistContent from "./AllChecklist/ChecklistContent";

const AllChecklistContent = ({ checklists, reloadPage }) => {

    if(localStorage.getItem("currentList") === null) {
        const { listId } = checklists[0];
        localStorage.setItem("currentList", listId)
    } 

    return (
        <>
            {checklists.map((checklist) => {
                const { listId, title, checkpoints } = checklist;
                return(
                    <ChecklistContent 
                        reloadPage={reloadPage}
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
