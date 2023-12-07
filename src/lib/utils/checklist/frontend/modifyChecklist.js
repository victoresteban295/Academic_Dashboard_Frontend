import { arrayMove } from "@dnd-kit/sortable";
import { nanoid } from "nanoid";

/******************************************************/
/* Create a New Checklist in (Non-Grouped) Checklists */
/******************************************************/
export const createNewChecklist = (checklists, title) => {
    //User's Non-Grouped Checklist Limit is 20 
    if(checklists.length < 20) {
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
    //User Reached Checklist Limit
    } else {
        throw new Error("Checklist Limit Exceeded: 20");
    }
}

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

/*****************************************/
/* Reorder User's Non-Grouped Checklists */
/*****************************************/
export const reorderChecklists = (checklists, activeId, overId) => {
    let activeIdx; //Index of Active Checklist
    let overIdx; //Index of Over Checklist
    let outdatedLists = [...checklists];

    outdatedLists.map(checklist => {
        if(activeId === checklist.listId) {
            activeIdx = checklists.indexOf(checklist);
        } else if(overId === checklist.listId) {
            overIdx = checklists.indexOf(checklist);
        }
    });

    return arrayMove(checklists, activeIdx, overIdx);
}

/********************/
/* Delete Checklist */
/********************/
export const removeChecklist = (checklists, groups, listId, groupId) => {
    let allChecklists; //All Checklists
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let activeList = ''; //Checklist to Display After Deletion

    //Checklist is Not Grouped
    if(groupId === '') {
        //Filter out deleted checklist
        updatedLists = checklists.filter(checklist => {
            return checklist.listId != listId;
        })

        //All Available Checklists (Grouped & Non-Grouped)
        allChecklists = [...updatedLists];
        groups.map(group => {
            group.checklists.map(checklist => {
                allChecklists.push(checklist);
            })
        })

        //Set New Active List (if-exists)
        if(allChecklists.length > 0) {
            activeList = allChecklists[0].listId;
        } 
    //Checklist is Grouped
    } else {
        //Look For Group w/ Checklist Getting Deleted
        updatedGroups.map(group => {
            //Find Group that Contains Checklist
            if(group.groupId === groupId) {
                //Filter Out Deleted Checklist
                let outdatedLists = group.checklists; 
                group.checklists = outdatedLists.filter(checklist => {
                    return checklist.listId != listId;
                })  

                //Set New Active List to 1st Checklist in Group
                if(group.checklists.length > 0) {
                    activeList = group.checklists[0].listId;
                } 
            }
        })

        //If Group Had No More Checklists
        if(activeList === '') {
            //All Available Checklists (Grouped & Non-Grouped)
            allChecklists = [...updatedLists];
            groups.map(group => {
                group.checklists.map(checklist => {
                    allChecklists.push(checklist);
                })
            })

            //Set New Active List (if-exists)
            if(allChecklists.length > 0) {
                activeList = allChecklists[0].listId;
            } 
        }
    }
     
    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        activeList: activeList
    }
}


