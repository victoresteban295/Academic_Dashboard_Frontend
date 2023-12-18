/*
 * NOTE: 
 *        -> createNewCheckpoint() | Line 14
 *        -> modifyCheckpoint() | Line 70
 *        -> markAsCompletePoint() | Line 124
 *        -> unmarkAsCompletePoint() | Line 238
 *        -> deleteCheckpoint() | Line 334
 * */

import { arrayMove } from "@dnd-kit/sortable";


/*************************/
/* Create New Checkpoint */
/*************************/
export const createNewCheckpoint = (checklists, groups, listId, groupId, content) => {
    //Create New Checkpoint Object
    let checkpoint = {
        index: '',
        content: content,
        subpoints: [],
        completedSubpoints: []
    }

    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints; //Checkpoints w/ Added Checkpoint
    let completedPoints; //Completed Checkpoints
    //Checklist is Not Grouped
    if(groupId === '') {
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                //Ensure Checkpoints Limit
                if(checklist.checkpoints.length < 25) {
                    //Update New Checkpoint's Index
                    checkpoint.index = checklist.checkpoints.length;
                    //Updated Checkpoints List
                    updatedPoints = [...checklist.checkpoints, checkpoint]
                    //Add Checkpoint to Checkpoints
                    checklist.checkpoints = updatedPoints;
                    completedPoints = checklist.completedPoints;
                //Checkpoints Limit Exceeded
                } else {
                    throw new Error("Checkpoints Limit Exceeded: 25");
                }
            }
        })
    //Checklist is Grouped
    } else {
        updatedGroups.map(group => {
            if(group.groupId === groupId) {
                group.checklists.map(checklist => {
                    if(checklist.listId === listId) {
                        if(checklist.checkpoints.length < 25) {
                            //Update New Checkpoint's Index
                            checkpoint.index = checklist.checkpoints.length;
                            //Updated Checkpoints List
                            updatedPoints = [...checklist.checkpoints, checkpoint]
                            //Add Checkpoint to Checkpoints
                            checklist.checkpoints = updatedPoints;
                            completedPoints = checklist.completedPoints;
                        } else {
                            throw new Error("Checkpoints Limit Exceeded: 25");
                        }
                    }
                })
            }
        }) 
    }

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
        completedPoints: completedPoints
    }
}

/*****************************/
/* Modify Checkpoint Content */
/*****************************/
export const modifyCheckpoint = (checklists, groups, listId, groupId, index, content) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let newCheckpoints;
    let completedPoints;

    //Delete Checkpoint if Content is Blank
    if(content.trim() === '') {
        //delete checkpoint
    } else {
        //Checklist is Not Grouped
        if(groupId === '') {
            //Iterate to Find Checklist Being Modified
            updatedLists.map(checklist => {
                if(checklist.listId === listId) {
                    //Assign New Checkpoint's Content
                    checklist.checkpoints[index].content = content;
                    //Update Changes
                    newCheckpoints = checklist.checkpoints;
                    completedPoints = checklist.completedPoints;
                }
            })

        //Checklist is Grouped
        } else {
            //Iterate to Find Checklist's Group
            updatedGroups.map(group => {
                if(group.groupId === groupId) {
                    //Iterate to Find Checklist Being Modified
                    group.checklists.map(checklist => {
                        if(checklist.listId === listId) {
                            //Assign New Checkpoint's Content
                            checklist.checkpoints[index].content = content;
                            //Update Changes
                            newCheckpoints = checklist.checkpoints;
                            completedPoints = checklist.completedPoints;
                        }
                    })
                }
            }) 
        }

        return {
            updatedLists: updatedLists,
            updatedGroups: updatedGroups,
            updatedPoints: newCheckpoints,
            completedPoints: completedPoints
        }
    }
}

/*******************************/
/* Mark Checkpoint as Complete */
/*******************************/
export const markAsCompletePoint = (checklists, groups, listId, groupId, index) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;
    
    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                //Completed Checkpoints Limit is 25
                if(checklist.completedPoints.length < 25) {
                    const updates = markAsComplete(checklist, index);
                    updatedPoints = updates.updatedPoints;
                    updatedCompletedPoints = updates.updatedCompletedPoints;

                    checklist.checkpoints = updatedPoints;
                    checklist.completedPoints = updatedCompletedPoints;
                } else {
                    throw new Error("Completed Checkpoints Limit Exceeded: 25 | Delete a Completed Checkpoint");
                }
            }
        })

    //Checklist is Grouped
    } else {
        //Iterate to Find Checklist's Group
        updatedGroups.map(group => {
            if(group.groupId === groupId) {
                //Iterate to Find Checklist Being Modified
                group.checklists.map(checklist => {
                    if(checklist.listId === listId) {
                        //Completed Checkpoints Limit is 25
                        if(checklist.completedPoints.length < 25) {
                            const updates = markAsComplete(checklist, index);
                            updatedPoints = updates.updatedPoints;
                            updatedCompletedPoints = updates.updatedCompletedPoints;

                            checklist.checkpoints = updatedPoints;
                            checklist.completedPoints = updatedCompletedPoints;
                        } else {
                            throw new Error("Completed Checkpoints Limit Exceeded: 25 | Delete a Completed Checkpoint");
                        }
                    }
                })
            }
        }) 
    }

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

const markAsComplete = (checklist, index) => {
    let completePoint; //Marked Checkpoint
    let updatedPoints; //Updated Checkpoints
    let updatedCompletedPoints; //Updated Completed Checkpoints

    //Extract Checklist's Checkpoints
    let outdatedPoints = checklist.checkpoints;

    //Filter Out The Checkpoint That Was Completed
    updatedPoints = outdatedPoints.filter(checkpoint => {
        if(checkpoint.index === index) {
            //Extract Complete Checkpoint
            completePoint = checkpoint;
            return false;
        } else {
            return true;
        }
    })

    //Re-assign Index for Each Checkpoint (Non-Complete)
    for(let i=0; i < updatedPoints.length; i++) {
        updatedPoints[i].index = i;
    }

    //Extract Recently Completed Checkpoint's Subpoints
    let subpoints = completePoint.subpoints;

    //Extract Recently Completed Checkpoint's Completed Subpoints
    let completedSubpoints = completePoint.completedSubpoints;

    //Completed Subpoint's Original Length
    let compLength = completedSubpoints.length;

    //Updated Subpoint Index & Move to Completed Subpoints
    for(let i=0; i < subpoints.length; i++) {
        let subpoint = subpoints[i];
        subpoint.index = compLength + i;
        completedSubpoints.push(subpoint);
    }

    //Updated Completed Checkpoint's Subpoints
    completePoint.subpoints = [];
    completePoint.completedSubpoints = completedSubpoints;

    //Update Checklist's Completed Checkpoints
    checklist.checkpoints = updatedPoints;
    checklist.completedPoints.push(completePoint);
    updatedCompletedPoints = checklist.completedPoints;

    //Re-assign Index for Each Completed Checkpoint
    for(let i=0; i < updatedCompletedPoints.length; i++) {
        updatedCompletedPoints[i].index = i;
    }

    //Updated Checklist's Completed Checkpoints 
    checklist.completedPoints = updatedCompletedPoints;

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

/*********************************/
/* UnMark Checkpoint as Complete */
/*********************************/
export const unmarkAsCompletePoint = (checklists, groups, listId, groupId, index) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;

    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                if(checklist.checkpoints.length < 25) {
                    const updates = unmarkAsComplete(checklist, index);
                    updatedPoints = updates.updatedPoints;
                    updatedCompletedPoints = updates.updatedCompletedPoints;

                    checklist.checkpoints = updatedPoints;
                    checklist.completedPoints = updatedCompletedPoints;
                } else {
                    throw new Error("Checkpoints Limit Exceeded: 25 | Delete a Checkpoint");
                }
            }
        })

    //Checklist is Grouped
    } else {
        //Iterate to Find Checklist's Group
        updatedGroups.map(group => {
            if(group.groupId === groupId) {
                //Iterate to Find Checklist Being Modified
                group.checklists.map(checklist => {
                    if(checklist.listId === listId) {
                        if(checklist.checkpoints.length < 25) {
                            const updates = unmarkAsComplete(checklist, index);
                            updatedPoints = updates.updatedPoints;
                            updatedCompletedPoints = updates.updatedCompletedPoints;

                            checklist.checkpoints = updatedPoints;
                            checklist.completedPoints = updatedCompletedPoints;
                        } else {
                            throw new Error("Checkpoints Limit Exceeded: 25 | Delete a Checkpoint");
                        }
                    }
                })
            }
        }) 
    }

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints,
    }
}

const unmarkAsComplete = (checklist, index) => {
    let incompPoint; //Unmarked Checkpoint
    let updatedPoints; //Updated Checkpoints
    let updatedCompletedPoints; //Updated Completed Checkpoints

    //Extract Checklist's Completed Checkpoints 
    let outdatedCompPoints = checklist.completedPoints;

    //Filter Out The Checkpoint Marked As Incomplete
    updatedCompletedPoints = outdatedCompPoints.filter(checkpoint => {
        if(checkpoint.index === index) {
            //Extract Incomplete Checkpoint
            incompPoint = checkpoint;
            return false;
        } else {
            return true;
        }
    })

    //Re-assign Index for Each Checkpoint (Completed)
    for(let i=0; i < updatedCompletedPoints.length; i++) {
        updatedCompletedPoints[i].index = i;
    }

    //Mark Subpoints as Incomplete (if-any)
    if(incompPoint.completedSubpoints.length > 0) {
        //Extract Recently Incompleted Checkpoint's Completed Subpoints
        let compSubpoints = incompPoint.completedSubpoints;

        //Move Them to Subpoints (Incomplete)
        incompPoint.subpoints = compSubpoints;

        //Empty Out The Completed Subpoints
        incompPoint.completedSubpoints = [];
    }

    //Update Checklist's Checkpoints
    checklist.completedPoints = updatedCompletedPoints;
    checklist.checkpoints.push(incompPoint);
    updatedPoints = checklist.checkpoints;

    //Re-assign Index for Each Incomplete Checkpoint
    for(let i=0; i < updatedPoints.length; i++) {
        updatedPoints[i].index = i;
    }

    //Update Checklist's Completed Checkpoints
    checklist.checkpoints = updatedPoints;

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

/**************************************/
/* Delete Checkpoint & it's Subpoints */
/**************************************/
export const deleteCheckpoint = (checklists, groups, listId, groupId, isComplete, index) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;

    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                const updates = removeCheckpoint(checklist, isComplete, index);
                updatedPoints = updates.updatedPoints;
                updatedCompletedPoints = updates.updatedCompletedPoints;

                checklist.checkpoints = updatedPoints;
                checklist.completedPoints = updatedCompletedPoints;
            }
        })

    //Checklist is Grouped
    } else {
        //Iterate to Find Checklist's Group
        updatedGroups.map(group => {
            if(group.groupId === groupId) {
                //Iterate to Find Checklist Being Modified
                group.checklists.map(checklist => {
                    if(checklist.listId === listId) {
                        const updates = removeCheckpoint(checklist, isComplete, index);
                        updatedPoints = updates.updatedPoints;
                        updatedCompletedPoints = updates.updatedCompletedPoints;

                        checklist.checkpoints = updatedPoints;
                        checklist.completedPoints = updatedCompletedPoints;
                    }
                })
            }
        }) 
    }
    
    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints,
    }
}

const removeCheckpoint = (checklist, isComplete, index) => {
    let updatedPoints; //Updated Checkpoints
    let updatedCompletedPoints; //Updated Completed Checkpoints

    //Delete From Completed Checkpoints
    if(isComplete) {
        //Deleteing Checkpoint From Checkpoints
        let outdatedPoints = checklist.completedPoints;
        updatedCompletedPoints = outdatedPoints.filter(checkpoint => {
            return checkpoint.index != index;
        })
        updatedPoints = checklist.checkpoints;

        //Re-assign Index for Each Checkpoint
        for(let i=0; i < updatedCompletedPoints.length; i++) {
            updatedCompletedPoints[i].index = i;
        }

        //Update Checkpoints
        checklist.completedPoints = updatedCompletedPoints;

    //Delete From Non-Completed Checkpoints
    } else {
        //Deleteing Checkpoint From Checkpoints
        let outdatedPoints = checklist.checkpoints;
        updatedPoints = outdatedPoints.filter(checkpoint => {
            return checkpoint.index != index;
        })
        updatedCompletedPoints = checklist.completedPoints;

        //Re-assign Index for Each Checkpoint
        for(let i=0; i < updatedPoints.length; i++) {
            updatedPoints[i].index = i;
        }

        //Update Checkpoints
        checklist.checkpoints = updatedPoints;
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

export const reorderCheckpoints = (
    checklists, 
    groups, 
    listId, 
    groupId, 
    activeIdx, 
    overIdx) => {

    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;

    
    //Checklist is Not Grouped
    if(groupId === '') {
        for(const checklist of updatedLists) {
            //Find Checklist
            if(checklist.listId === listId) {
                //Re-order Checkpoints
                const reorderPoints = arrayMove(
                    checklist.checkpoints, 
                    activeIdx, 
                    overIdx);
                //Re-assign Indices
                for(let i = 0; i < reorderPoints.length; i++) {
                    reorderPoints[i].index = i.toString();
                }
                updatedPoints = reorderPoints;
                //Assign Reorder Checkpoints
                checklist.checkpoints = reorderPoints;
            }  
        }

    //Checklist is Grouped
    } else {
        for(const group of updatedGroups) {
            //Find Group
            if(group.groupId === groupId) {
                for(const checklist of group.checklists) {
                    //Find Checklist
                    if(checklist.listId === listId) {
                        //Re-order Checkpoints
                        const reorderPoints = arrayMove(
                            checklist.checkpoints, 
                            activeIdx, 
                            overIdx);
                        //Re-assign Indices
                        for(let i = 0; i < reorderPoints.length; i++) {
                            reorderPoints[i].index = i.toString();
                        }
                        updatedPoints = reorderPoints;
                        //Assign Reorder Checkpoints
                        checklist.checkpoints = reorderPoints;
                    }  
                }
            }
        }
    }

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
    }
}
