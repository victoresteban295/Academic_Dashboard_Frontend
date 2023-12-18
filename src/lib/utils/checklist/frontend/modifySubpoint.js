/*
 * NOTE: 
 *        -> addSubpoint() | Line 14
 *        -> modifySubpoint() | Line 92
 *        -> markAsCompleteSubpoint() | Line 144
 *        -> unmarkAsCompleteSubpoint() | Line 301
 *        -> deleteSubpoint() | Line 419
 * */

import { arrayMove } from "@dnd-kit/sortable";


/******************************************************/
/*********** Add New Subpoint to Checkpoint ***********/
/******************************************************/
export const addSubpoint = (checklists, groups, listId, groupId, pointIdx, subContent) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let newCheckpoints;
    let completedPoints;

    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Benig Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                if(checklist.checkpoints[pointIdx].subpoints.length < 25) {
                    const updates = addNewSubpoint(checklist, pointIdx, subContent);
                    newCheckpoints = updates.newCheckpoints;
                    completedPoints = updates.completedPoints;

                    checklist.checkpoints = newCheckpoints;
                    checklist.completedPoints = completedPoints;
                } else {
                    throw new Error("Subpoints Limit Exceeded: 25");
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
                        if(checklist.checkpoints[pointIdx].subpoints.length < 25) {
                            const updates = addNewSubpoint(checklist, pointIdx, subContent);
                            newCheckpoints = updates.newCheckpoints;
                            completedPoints = updates.completedPoints;

                            checklist.checkpoints = newCheckpoints;
                            checklist.completedPoints = completedPoints;
                        } else {
                            throw new Error("Subpoints Limit Exceeded: 25");
                        }
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

const addNewSubpoint = (checklist, pointIdx, subContent) => {
    if(checklist.checkpoints[pointIdx].subpoints.length < 25) {
        //Create New Subpoint Object
        let subpoint = {
            index: '',
            content: subContent,
            subpoints: [],
            completedSubpoints: []
        }
        let newCheckpoints; //Updated Checkpoints List
        let completedPoints; //Completed Checkpoints List

        //Extract Original Subpoints List
        let subpoints = checklist.checkpoints[pointIdx].subpoints;
        //Updated New Subpoint's Index
        subpoint.index = subpoints.length;
        //Add Subpoint to Subpoints List
        checklist.checkpoints[pointIdx].subpoints.push(subpoint);
        //Update Changes
        newCheckpoints = checklist.checkpoints;
        completedPoints = checklist.completedPoints;

        return {
            newCheckpoints: newCheckpoints,
            completedPoints: completedPoints,
        }
    } else {
        throw new Error("Subpoints Limit Exceeded: 25");
    }
}

/*************************************************/
/*********** Modify Subpoint's Content ***********/
/*************************************************/
export const modifySubpoint = (checklists, groups, listId, groupId, pointIdx, subpointIdx, subContent) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let newCheckpoints;
    let completedPoints;

    //Delete Subpoint If Blank
    if(subContent.trim() === '') {
        //delete subpoint
    } else {
        //Checklist is Not Grouped
        if(groupId === '') {
            //Iterate to Find Checklist Being Modified
            updatedLists.map(checklist => {
                if(checklist.listId === listId) {
                    //Assign New Checkpoint's Content
                    checklist.checkpoints[pointIdx].subpoints[subpointIdx].content = subContent;
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
                            checklist.checkpoints[pointIdx].subpoints[subpointIdx].content = subContent;
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

/*************************************************/
/*********** Mark Subpoint As Complete ***********/
/*************************************************/
export const markAsCompleteSubpoint = (checklists, groups, listId, groupId, pointIdx, subpointIdx) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;
    
    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                if(checklist.checkpoints[pointIdx].completedSubpoints.length < 25) {
                    const updates = markAsComplete(checklist, pointIdx, subpointIdx);
                    updatedPoints = updates.updatedPoints;
                    updatedCompletedPoints = updates.updatedCompletedPoints;

                    checklist.checkpoints = updatedPoints;
                    checklist.completedPoints = updatedCompletedPoints;
                } else {
                    throw new Error("Completed Subpoints Limit Exceeded: 25 | Delete a Completed Subpoint");
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
                        if(checklist.checkpoints[pointIdx].completedSubpoints.length < 25) {
                            const updates = markAsComplete(checklist, pointIdx, subpointIdx);
                            updatedPoints = updates.updatedPoints;
                            updatedCompletedPoints = updates.updatedCompletedPoints;

                            checklist.checkpoints = updatedPoints;
                            checklist.completedPoints = updatedCompletedPoints;
                        } else {
                            throw new Error("Completed Subpoints Limit Exceeded: 25 | Delete a Completed Subpoint");
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

const markAsComplete = (checklist, pointIdx, subpointIdx) => {
    let updatedPoints;
    let updatedCompletedPoints;

    /* If It Is The Last Subpoint to Complete 
     * Then Mark Parent Checkpoint as Complete */
    if(checklist.checkpoints[pointIdx].subpoints.length === 1) {
        if(checklist.completedPoints.length < 25) {
            //Completed Checkpoint
            let completePoint;

            //Extract Checklist's Checkpoints
            let outdatedPoints = checklist.checkpoints;
            
            //Filter Out The Checkpoint That Was Completed
            updatedPoints = outdatedPoints.filter(checkpoint => {
                if(checkpoint.index === pointIdx) {
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
        } else {
            throw new Error('Completed Checkpoints Limit Exceeded: 25 | Delete a Completed Checkpoint');
        }

    /* If Not Last Subpoint to Complete, 
     * Then Just Mark Subpoint as Complete */
    } else {
        //Parent Checkpoint
        let checkpoint = checklist.checkpoints[pointIdx];
        let compSubpoint; //Subpoint Marked As Complete

        //Filter out Completed Subpoint 
        let outdatedSubpoints = checkpoint.subpoints;
        let updatedSubpoints = outdatedSubpoints.filter(subpoint => {
            if(subpoint.index === subpointIdx) {
                //Extract Completed Subpoint
                compSubpoint = subpoint;
                return false;
            } else {
                return true;
            }
        })

        //Re-assign Index for Each Subpoint (Non-Complete)
        for(let i=0; i < updatedSubpoints.length; i++) {
            updatedSubpoints[i].index = i;
        }

        //Updated Subpoints in Parent Checkpoint
        checklist.checkpoints[pointIdx].subpoints = updatedSubpoints;

        //Update Completed Subpoint's Index
        compSubpoint.index = checkpoint.completedSubpoints.length;

        //Updated Completed Subpoints in Parent Checkpoint
        checklist.checkpoints[pointIdx].completedSubpoints.push(compSubpoint)

        //Update Checkpoints & Completed Checkpoints
        updatedPoints = checklist.checkpoints;
        updatedCompletedPoints = checklist.completedPoints;
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints,
    }
}

/***************************************************/
/*********** Unmark Subpoint As Complete ***********/
/***************************************************/
export const unmarkAsCompleteSubpoint = (checklists, groups, listId, groupId, isPointComplete, pointIdx, subpointIdx) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;
    
    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                if(checklist.checkpoints[pointIdx].subpoints.length < 25) {
                    const updates = unmarkAsComplete(checklist, isPointComplete, pointIdx, subpointIdx);
                    updatedPoints = updates.updatedPoints;
                    updatedCompletedPoints = updates.updatedCompletedPoints;

                    checklist.checkpoints = updatedPoints;
                    checklist.completedPoints = updatedCompletedPoints;
                } else {
                    throw new Error("Subpoints Limit Exceeded: 25 | Delete a Subpoint");
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
                        if(checklist.checkpoints[pointIdx].subpoints.length < 25) {
                            const updates = unmarkAsComplete(checklist, isPointComplete, pointIdx, subpointIdx);
                            updatedPoints = updates.updatedPoints;
                            updatedCompletedPoints = updates.updatedCompletedPoints;

                            checklist.checkpoints = updatedPoints;
                            checklist.completedPoints = updatedCompletedPoints;
                        } else {
                            throw new Error("Subpoints Limit Exceeded: 25 | Delete a Subpoint");
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

const unmarkAsComplete = (checklist, isPointComplete, pointIdx, subpointIdx) => {
    let updatedPoints; //Updated Checkpoints List
    let updatedCompletedPoints; //Updated Completed Checkpoints List

    //Checkpoint that contains subpoint being unmarked
    let parentCheckpoint = isPointComplete ? (
        checklist.completedPoints[pointIdx]
    ) : (
        checklist.checkpoints[pointIdx]);
    let unmarkSubpoint; //Subpoint Being Unmarked

    /* Remove Subpoint From Completed Subpoints List */
    let completedSubpoints = parentCheckpoint.completedSubpoints.filter(subpoint => {
        if(subpoint.index === subpointIdx) {
            unmarkSubpoint = subpoint;
            return false;
        } else {
            return true;
        }
    })
    //Re-assign Index for Each Completed Subpoint 
    for(let i=0; i < completedSubpoints.length; i++) {
        completedSubpoints[i].index = i;
    }

    //Update Completed Subpoints List in Parent Checkpoint
    parentCheckpoint.completedSubpoints = completedSubpoints;

    /* Add Subpoint to (Non-Completed) Subpoints List */
    let subpoints = parentCheckpoint.subpoints;
    unmarkSubpoint.index = subpoints.length;
    subpoints.push(unmarkSubpoint); //Add to subpoints List

    //Updated Subpoints List in Parent Checkpoint
    parentCheckpoint.subpoints = subpoints;

    //If Marked As Complete, Unmark Parent Checkpoint
    if(isPointComplete) {
        if(checklist.checkpoints.length < 25) {
            /* Remove Parent Checkpoint From Completed Checkpoints List */
            updatedCompletedPoints = checklist.completedPoints.filter(checkpoint => {
                return checkpoint.index != pointIdx;
            })
            /* Re-assign Index for Each Completed Checkpoint */
            for(let i=0; i < updatedCompletedPoints.length; i++) {
                updatedCompletedPoints[i].index = i;
            }
            /* Add Parent Checkpoint To (Non-Completed) Checkpoints List */
            updatedPoints = checklist.checkpoints; //Extract Checkpoints List
            parentCheckpoint.index = updatedPoints.length; //Update Parent Checkpoint's Index
            updatedPoints.push(parentCheckpoint); //Add Parent Checkpoint to New List
        } else {
            throw new Error("Checkpoints Limit Exceeded: 25 | Delete a Checkpoint");
        }

    //Parent Checkpoint Isn't Completed
    } else {
        //Updated Modified Checkpoint
        updatedPoints = checklist.checkpoints;
        updatedPoints[pointIdx] = parentCheckpoint;

        //Extract Original Completed Checkpoints List
        updatedCompletedPoints = checklist.completedPoints;
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

/***************************************/
/*********** Delete Subpoint ***********/
/***************************************/
export const deleteSubpoint = (
    checklists,
    groups,
    listId,
    groupId,
    isPointComplete, 
    isSubpointComplete, 
    pointIdx, 
    subpointIdx) => {

    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let updatedCompletedPoints;

    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Being Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                const updates = removeSubpoint(checklist, isPointComplete, isSubpointComplete, pointIdx, subpointIdx);
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
                        const updates = removeSubpoint(checklist, isPointComplete, isSubpointComplete, pointIdx, subpointIdx);
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
        updatedCompletedPoints: updatedCompletedPoints
    }

}

const removeSubpoint = (checklist, isPointComplete, isSubpointComplete, pointIdx, subpointIdx) => {
    let updatedPoints = checklist.checkpoints; //Updated Checkpoints List
    let updatedCompletedPoints = checklist.completedPoints; //Updated Completed Checkpoints List

    //Parent Checkpoint
    const checkpoint = isPointComplete ? (
        checklist.completedPoints[pointIdx]
    ) : (
        checklist.checkpoints[pointIdx]);

    //Delete Subpoint From Subpoints List
    const subpoints = isSubpointComplete ? (
        checkpoint.completedSubpoints.filter(subpoint => {
            return subpoint.index != subpointIdx;
        })
    ) : (
        checkpoint.subpoints.filter(subpoint => {
            return subpoint.index != subpointIdx;
        }));

    //Re-assign Subpoint's Index
    for(let i=0; i < subpoints.length; i++) {
        subpoints[i].index = i;
    }

    //Parent Checkpoint is Completed
    if(isPointComplete) {
        updatedCompletedPoints[pointIdx].completedSubpoints = subpoints;
    //Parent Checkpoint is Not Completed
    } else {
        if(isSubpointComplete) {
            updatedPoints[pointIdx].completedSubpoints = subpoints;
        } else {
            updatedPoints[pointIdx].subpoints = subpoints;
        }
    }
    
    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    } 
}

export const reorderSubpoints = (
    checklists, 
    groups, 
    listId, 
    groupId, 
    pointIdx, 
    activeIdx, 
    overIdx) => {

    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let updatedPoints;
    let completedPoints;

    //Checklist is Not Grouped
    if(groupId === '') {
        for(const checklist of updatedLists) {
            //Find Checklist
            if(checklist.listId === listId) {
                for(const checkpoint of checklist.checkpoints) {
                    //Find Checkpoint
                    if(checkpoint.index === pointIdx) {
                        //Re-order Subpoints
                        const reorderSubpoints = arrayMove(
                            checkpoint.subpoints, 
                            activeIdx, 
                            overIdx);
                        //Re-assign Indices 
                        for(let i=0; i < reorderSubpoints.length; i++) {
                            reorderSubpoints[i].index = i.toString();
                        }
                        //Assign Reorder Subpoints to Checkpoint
                        checkpoint.subpoints = reorderSubpoints;
                    }
                }
                updatedPoints = checklist.checkpoints;
                completedPoints = checklist.completedPoints;
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
                        for(const checkpoint of checklist.checkpoints) {
                            //Find Checkpoint
                            if(checkpoint.index === pointIdx) {
                                //Re-order Subpoints
                                const reorderSubpoints = arrayMove(
                                    checkpoint.subpoints, 
                                    activeIdx, 
                                    overIdx);
                                //Re-assign Indices 
                                for(let i=0; i < reorderSubpoints.length; i++) {
                                    reorderSubpoints[i].index = i.toString();
                                }
                                //Assign Reorder Subpoints to Checkpoint
                                checkpoint.subpoints = reorderSubpoints;
                            }
                        }
                        updatedPoints = checklist.checkpoints;
                        completedPoints = checklist.completedPoints;
                    }
                }
            } 
        }

    }

    return {
        updatedLists: updatedLists,
        updatedGroups: updatedGroups,
        updatedPoints: updatedPoints,
        completedPoints: completedPoints,
    }

}
