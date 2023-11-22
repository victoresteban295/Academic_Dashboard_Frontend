import { nanoid } from "nanoid";

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

export const createNewChecklist = (checklists, title) => {
    const listId = nanoid(10);
    //New Checklist
    const checklist = {
        objectId: '', 
        listId: listId,
        title: title,
        groupId: '',
        checkpoints : [],
        completedPoints: []
    }

    //Add Newly Create Checklist to Lists
    let updatedLists = [...checklists];
    updatedLists.push(checklist);
    return {
        updatedLists: updatedLists,
        listId: listId
    }
    
}
