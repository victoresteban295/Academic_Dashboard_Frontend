/****************************/
/* Rename Checklist's Title */
/****************************/
export const handleChecklistTitle = (checklists, groups, groupId, listId, newTitle) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];

    //Checklist is Not Grouped
    if(groupId === '') {
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                checklist.title = newTitle;
            }
        })

    //Checklist is Grouped
    } else {
        updatedGroups.map(group => {
            group.checklists.map(checklist => {
                if(checklist.listId === listId) {
                    checklist.title = newTitle;
                }
            })
        })
    }
    
    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
    }
}
