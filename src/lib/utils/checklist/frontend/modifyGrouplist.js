import { nanoid } from "nanoid";

/*******************/
/*Create New Group */
/*******************/
export const createNewGroup = (groups, title) => {
    //Create New Group Object
    const groupId = nanoid(10);
    const group = {
        objectId: '',
        groupId: groupId,
        title: title, 
        checklists: []
    }

    //Add Group to Groups List
    let updatedGroups = [...groups, group];

    return {
        updatedGroups: updatedGroups,
        groupId: groupId,
    }
}

/****************/
/* Delete Group */
/****************/
export const deleteGroup = (groups, groupId) => {
    //Filter Out Group Getting Deleted
    const updatedGroups = groups.filter(group => {
        return group.groupId != groupId;
    })

    return updatedGroups;
}

/***********************************/
/* Add Checklist To Existing Group */
/***********************************/
export const addToExistingGroup = (checklists, groups, listId, groupId) => {
    let mvingList; //Checklist Being Moved

    // Remove Checklist From Non-Group List
    let updatedLists = checklists.filter((checklist) => {
        let isTarget = checklist.listId === listId;
        if(isTarget) {
            mvingList = {...checklist, groupId: groupId};
        }
        return !isTarget;
    });

    //Add Checklist to Group
    let updatedGroups = [...groups];
    updatedGroups.map(group => {
        if(group.groupId === groupId) {
            group.checklists.push(mvingList);
        }
    })
    
    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups
    }
}

/******************************/
/* Add Checklist To New Group */
/******************************/
export const addToNewGroup = (checklists, groups, listId, newTitle) => {
    let mvingList; //Checklist Being Moved
    const groupId = nanoid(10);

    // Remove Checklist From Non-Group List
    let updatedLists = checklists.filter((checklist) => {
        let isTarget = checklist.listId === listId;
        if(isTarget) {
            mvingList = {...checklist, groupId: groupId};
        }
        return !isTarget;
    });

    //New Group
    const newGroup = {
        objectId: '',
        groupId: groupId, 
        title: newTitle,
        checklists: [mvingList] 
    }
    let updatedGroups = [...groups, newGroup];

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        groupId: groupId,
    }
}

/*************************************/
/* Move Checklist To Different Group */
/*************************************/
export const moveListGroupToGroup = (groups, listId, fromGroupId, toGroupId) => {
    let mvingList; //Checklist Being Moved
    let updatedGroups = [...groups];

    //Loop to Remove Checklist From Original Group
    updatedGroups.map(group => {
        let updatedLists;
        if(group.groupId === fromGroupId) {
            updatedLists = group.checklists.filter(checklist => {
                let isTarget = checklist.listId === listId;
                if(isTarget) {
                    mvingList = {...checklist, groupId: toGroupId}
                }
                return !isTarget;
            })
            group.checklists = updatedLists;
        }
    })

    //Loop to Move Checklist To New Group
    updatedGroups.map(group => {
        let updatedLists;
        if(group.groupId === toGroupId) {
            updatedLists = [...group.checklists, mvingList];
            group.checklists = updatedLists;
        }
    })

    return {
        updatedGroups: updatedGroups,
    }
}

/*******************************/
/* Move Checklist To New Group */
/*******************************/
export const moveListGroupToNewGroup = (groups, listId, fromGroupId, newGroupTilte) => {
    const groupId = nanoid(10);
    let mvingList; //Checklist Being Moved
    let updatedGroups = [...groups];

    //Loop to Remove Checklist From Original Group
    updatedGroups.map(group => {
        let updatedLists;
        if(group.groupId === fromGroupId) {
            updatedLists = group.checklists.filter(checklist => {
                let isTarget = checklist.listId === listId;
                if(isTarget) {
                    mvingList = {...checklist, groupId: groupId}
                }
                return !isTarget;
            })
            group.checklists = updatedLists;
        }
    })

    //Temporary Grouplist
    const newGroup = {
        objectId: '',
        groupId: groupId, 
        title: newGroupTilte,
        checklists: [mvingList] 
    }

    //Add New Group to Groups
    updatedGroups.push(newGroup);

    return {
        updatedGroups: updatedGroups,
        groupId: groupId,
    }
}

/***************************************/
/* Remove Checklist From Current Group */
/***************************************/
export const removeListFromGroup = (checklists, groups, listId, groupId) => {
    let mvingList; //Checklist Being Moved

    let updatedGroups = [...groups];
    updatedGroups.map(group => {
        if(group.groupId === groupId) {

            //Filter Out Checklist From Group
            let groupedList = group.checklists.filter(checklist => {
                let isTarget = checklist.listId === listId;
                if(isTarget) {
                    mvingList = {...checklist, groupId: ''};
                }
                return !isTarget;
            })
            group.checklists = groupedList;
        }
    })

    //Add Checklist to Non-Grouped List
    let updatedLists = [...checklists, mvingList];

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
    }
}




