import { arrayMove } from "@dnd-kit/sortable";
import { nanoid } from "nanoid";

/*******************/
/*Create New Group */
/*******************/
export const createNewGroup = (groups, title) => {
    //User's Groups Limit is 20
    if(groups.length < 20) {
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
    //User Reached Groups Limit
    } else {
        throw new Error("Group Limit Exceeded: 20");
    }
}

/****************/
/* Rename Group */
/****************/
export const renameGroup = (groups, newTitle, groupId) => {
    const updatedGroups = groups.map(group => {
        if(group.groupId === groupId) {
            group.title = newTitle;
        }
        return group;
    })

    return updatedGroups;
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


/*************************/
/* Reorder User's Groups */
/*************************/
export const reorderGroups = (groups, activeId, overId) => {
    let activeIdx; //Index of Active Group 
    let overIdx; //Index of Over Group
    let outdatedGroups = [...groups];

    outdatedGroups.map(group => {
        if(activeId === group.groupId) {
            activeIdx = groups.indexOf(group);
        } else if(overId === group.groupId) {
            overIdx = groups.indexOf(group);
        }
    });

    return arrayMove(groups, activeIdx, overIdx);
}

/*********************************/
/* Reorder Grouplist's Checlists */
/*********************************/
export const reorderGroupChecklist = (groups, groupId, activeId, overId) => {
    let activeIdx; //Index of Active Group 
    let overIdx; //Index of Over Group
    let updatedGroups = [...groups];
    let modifiedGroup;
    
    for(const group of updatedGroups) {
        //Find Group w/ Re-ordered Checklist
        if(group.groupId === groupId) {
            //Extract Group's Checklist
            const checklists = group.checklists;

            //Loop to Get Index of Active and Over Checklist
            for(const checklist of checklists) {
                if(activeId === checklist.listId) {
                    activeIdx = checklists.indexOf(checklist);
                } else if(overId === checklist.listId) {
                    overIdx = checklists.indexOf(checklist)
                }
            } 

            //Re-order Group's Checklists
            group.checklists = arrayMove(checklists, activeIdx, overIdx);
            modifiedGroup = group;
        } 
    }

    return {
        updatedGroups: updatedGroups, 
        reorderChecklists: modifiedGroup.checklists
    } 
}

/*********************************************/
/* Create New Checklist Under Existing Group */
/*********************************************/
export const newChecklistToGroup = (groups, title, groupId) => {
    //Create New Checklist
    const listId = nanoid(10);
    const checklist = {
        objectId: '',
        listId: listId,
        title: title, 
        groupId: groupId,
        checkpoints: [],
        completedPoints: []
    }

    //Add New Checklist to Group
    const updatedGroups = groups.map(group => {
        if(group.groupId === groupId) {
            if(group.checklists.length < 20) {
                group.checklists.push(checklist);
            } else {
                throw new Error("Checklist Under Group Limit Exceeded: 20");
            }
        }
        return group;
    })

    return {
        updatedGroups: updatedGroups,
        listId: listId
    }
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
            //Ensure Checklist Under Group Limit
            if(group.checklists.length < 20) {
                group.checklists.push(mvingList);
            //Checklist Under Group Limit Exceeded
            } else {
                throw new Error("Checklists Under Group Limit Exceeded: 20");
            }
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

    //Each Group is Limited to 20 Checklists
    let limitReached;
    for(const group of updatedGroups) {
        if(group.groupId === toGroupId) {
            limitReached = group.checklists.length >= 20; 
        }
    }

    if(!limitReached) {
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
    } else {
        throw new Error("Checklist Under Group Limit Exceeded: 20");
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
    //User's Non-Grouped Checklist Limit is 20
    if(checklists.length < 20) {
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
    //User Reached (Non-Grouped) Checklist Limit
    } else {
        throw new Error("Checklist Limit Exceeded: 20");
    }
}




