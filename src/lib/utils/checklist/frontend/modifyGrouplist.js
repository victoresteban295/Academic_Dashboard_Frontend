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

    // Remove Checklist From Non-Group List
    let updatedLists = checklists.filter((checklist) => {
        let isTarget = checklist.listId === listId;
        if(isTarget) {
            mvingList = {...checklist, groupId: 'temp'};
        }
        return !isTarget;
    });

    //Temporary Grouplist
    const newGroup = {
        objectId: '',
        groupId: 'temp', 
        title: newTitle,
        checklists: [mvingList] 
    }
    let updatedGroups = [...groups, newGroup];

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups
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
    let mvingList; //Checklist Being Moved
    let updatedGroups = [...groups];

    //Loop to Remove Checklist From Original Group
    updatedGroups.map(group => {
        let updatedLists;
        if(group.groupId === fromGroupId) {
            updatedLists = group.checklists.filter(checklist => {
                let isTarget = checklist.listId === listId;
                if(isTarget) {
                    mvingList = {...checklist, groupId: 'temp'}
                }
                return !isTarget;
            })
            group.checklists = updatedLists;
        }
    })

    //Temporary Grouplist
    const newGroup = {
        objectId: '',
        groupId: 'temp', 
        title: newGroupTilte,
        checklists: [mvingList] 
    }

    //Add New Group to Groups
    updatedGroups.push(newGroup);

    return {
        updatedGroups: updatedGroups
    }
}
