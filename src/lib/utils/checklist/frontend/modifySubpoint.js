/*
 * NOTE: 
 *        -> addSubpoint() | Line 
 *        -> modifySubpoint() | Line 
 *        -> markAsCompleteSubpoint() | Line 
 *        -> unmarkAsCompleteSubpoint() | Line 
 *        -> deleteSubpoint() | Line 
 * */


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
                const updates = addNewSubpoint(checklist, pointIdx, subContent);
                newCheckpoints = updates.newCheckpoints;
                completedPoints = updates.completedPoints;
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
                        const updates = addNewSubpoint(checklist, pointIdx, subContent);
                        newCheckpoints = updates.newCheckpoints;
                        completedPoints = updates.completedPoints;
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
                const updates = markAsComplete(checklist, pointIdx, subpointIdx);
                updatedPoints = updates.updatedPoints;
                updatedCompletedPoints = updates.updatedCompletedPoints;
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
                        const updates = markAsComplete(checklist, pointIdx, subpointIdx);
                        updatedPoints = updates.updatedPoints;
                        updatedCompletedPoints = updates.updatedCompletedPoints;
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
                const updates = unmarkAsComplete(checklist, isPointComplete, pointIdx, subpointIdx);
                updatedPoints = updates.updatedPoints;
                updatedCompletedPoints = updates.updatedCompletedPoints;
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
                        const updates = unmarkAsComplete(checklist, isPointComplete, pointIdx, subpointIdx);
                        updatedPoints = updates.updatedPoints;
                        updatedCompletedPoints = updates.updatedCompletedPoints;
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
    /* If Parent Checkpoint is Marked as Complete 
     * Then Mark Parent Checkpoint as Incomplete */
    if(isPointComplete) {
        //Parent Checkpoint
        let incompPoint;

        //Extract Checklist's Completed Checkpoints 
        let outdatedCompPoints = checklist.completedPoints;

        //Filter Out The Checkpoint Marked As Incomplete
        updatedCompletedPoints = outdatedCompPoints.filter(checkpoint => {
            if(checkpoint.index === pointIdx) {
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

        //Subpoint Marked as Incomplete
        let incompSubpoint;

        //Filter Out Subpoint from Completed Subpoint List
        let outdatedCompSubpoints = incompPoint.completedSubpoints;
        let updatedCompSubpoints = outdatedCompSubpoints.filter(subpoint => {
            if(subpoint.index === subpointIdx) {
                incompSubpoint = subpoint;
                return false;
            } else {
                return true;
            }
        })

        //Re-assign Index for Each Completed Subpoint 
        for(let i=0; i < updatedCompSubpoints.length; i++) {
            updatedCompSubpoints[i].index = i;
        }

        //Update Parent Checkpoint's Completed Subpoints List
        incompPoint.completedSubpoints = updatedCompSubpoints;

        incompSubpoint.index = 1; //Update Subpoint's Index

        //Update Parent Checkpoint's Subpoints List
        incompPoint.subpoints.push(incompSubpoint);

        //Extract Checklist's Checkpoints List
        let outdatedPoints = checklist.checkpoints;

        //Update Unmarked Checkpoint's Index
        incompPoint.index = outdatedPoints.length;

        //Push Unmarked Checkpoint to Checkpoints List
        outdatedPoints.push(incompPoint);

        //Updated Checkpoints
        updatedPoints = outdatedPoints;
          
    //Parent Checkpoint is Incomplete
    } else {
        let incompSubpoint; //Subpoint Being Unmarked

        //Extract Checkpoint's Completed Subpoints List
        let outdatedCompSubpoints = checklist.checkpoints[pointIdx].completedSubpoints;

        //Filter out Subpoint from Marked Subpoints List
        let updatedCompSubpoints = outdatedCompSubpoints.filter(subpoint => {
            if(subpoint.index === subpointIdx) {
                incompSubpoint = subpoint;
                return false;
            } else {
                return true;
            }
        })

        //Re-assign Index for Each Completed Subpoint
        for(let i=0; i < updatedCompSubpoints; i++) {
            updatedCompSubpoints[i].index = i;
        }

        //Update Parent Checkpoint's Completed Subpoints List
        checklist.checkpoints[pointIdx].completedSubpoints = updatedCompSubpoints;

        //Extract Checkpoint's Subpoints List
        let outdatedSubpoints = checklist.checkpoints[pointIdx].subpoints;
        //Update Subpoint's Index
        incompSubpoint.index = outdatedSubpoints.length;

        //Add Subpoint Being Unmarked to Subpoints List
        outdatedSubpoints.push(incompSubpoint);
        //Updated Parent Checkpoint's Subpoints List
        checklist.checkpoints[pointIdx].subpoints = outdatedSubpoints;

        //Updated Checkpoints & Completed Checkpoints
        updatedPoints = checklist.checkpoints;
        updatedCompletedPoints = checklist.completedSubpoints;
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

const unmarkAsComplete02 = (checklist, isPointComplete, pointIdx, subpointIdx) => {
    let updatedPoints; //Updated Checkpoints List
    let updatedCompletedPoints; //Updated Completed Checkpoints List

    //If Marked As Complete, Unmark Parent Checkpoint
    if(isPointComplete) {
        let unmarkCheckpoint; //Parent Checkpoint Being Unmarked

        /***********************************************/
        /****** Update Completed Checkpoints List ******/
        /***********************************************/
        //Filter Out Checkpoint Being Unmarked
        updatedCompletedPoints = checklist.completedPoints.filter(checkpoint => {
            if(checkpoint.index === pointIdx) {
                //Extract Unmarked Checkpoint
                unmarkCheckpoint = checkpoint;
                return false;
            } else {
                return true;
            }
        })

        //Re-assign Index for Each Completed Checkpoint
        for(let i=0; i < updatedCompletedPoints.length; i++) {
            updatedCompletedPoints[i].index = i;
        }

        /***********************************************/
        /****** Update Unmarked Parent Checkpoint ******/
        /***********************************************/
        let unmarkSubpoint; //Subpoint Being Unmarked
        //Filter Out Subpoint Being Umarked From Completed Subpoints List
        let completedSubpoints = unmarkCheckpoint.completedSubpoints.filter(subpoint => {
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
        unmarkCheckpoint.completedSubpoints = completedSubpoints;

        //Update (Non-Completed) Subpoints List in Parent Checkpoint
        unmarkSubpoint.index = 0; //Update Index
        let subpoints = unmarkCheckpoint.subpoints;
        subpoints.push(unmarkSubpoint); //Add unmark subpoint
        unmarkCheckpoint.subpoints = subpoints; //Update Subpoints List

        /*****************************************************/
        /****** Update (Non-Completed) Checkpoints List ******/
        /*****************************************************/
        updatedPoints = checklist.checkpoints;
        updatedPoints.push(unmarkCheckpoint);


    //Parent Checkpoint Isn't Completed
    } else {
        let unmarkSubpoint; //Subpoint Being Unmarked

        //Filter Out Subpoint Being Umarked From Completed Subpoints List
        let completedSubpoints = unmarkCheckpoint.completedSubpoints.filter(subpoint => {
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
        unmarkCheckpoint.completedSubpoints = completedSubpoints;

        //Update (Non-Completed) Subpoints List in Parent Checkpoint
        unmarkSubpoint.index = 0; //Update Index
        let subpoints = unmarkCheckpoint.subpoints;
        subpoints.push(unmarkSubpoint); //Add unmark subpoint
        unmarkCheckpoint.subpoints = subpoints; //Update Subpoints List

        /*****************************************************/
        /****** Update (Non-Completed) Checkpoints List ******/
        /*****************************************************/
        updatedPoints = checklist.checkpoints;
        updatedPoints.push(unmarkCheckpoint);

        
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}

const unmarkAsComplete03 = (checklist, isPointComplete, pointIdx, subpointIdx) => {
    let updatedPoints; //Updated Checkpoints List
    let updatedCompletedPoints; //Updated Completed Checkpoints List
    let checkpoint; //Parent Checkpoint Being Unmarked

    //If Marked As Complete, Unmark Parent Checkpoint
    if(isPointComplete) {

        /***********************************************/
        /****** Update Completed Checkpoints List ******/
        /***********************************************/
        //Filter Out Checkpoint Being Unmarked
        updatedCompletedPoints = checklist.completedPoints.filter(checkpoint => {
            if(checkpoint.index === pointIdx) {
                //Extract Unmarked Checkpoint
                checkpoint = checkpoint;
                return false;
            } else {
                return true;
            }
        })

        //Re-assign Index for Each Completed Checkpoint
        for(let i=0; i < updatedCompletedPoints.length; i++) {
            updatedCompletedPoints[i].index = i;
        }

        /***********************************************/
        /****** Update Unmarked Parent Checkpoint ******/
        /***********************************************/
        let unmarkSubpoint; //Subpoint Being Unmarked
        //Filter Out Subpoint Being Umarked From Completed Subpoints List
        let completedSubpoints = unmarkCheckpoint.completedSubpoints.filter(subpoint => {
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
        unmarkCheckpoint.completedSubpoints = completedSubpoints;

        //Update (Non-Completed) Subpoints List in Parent Checkpoint
        unmarkSubpoint.index = 0; //Update Index
        let subpoints = unmarkCheckpoint.subpoints;
        subpoints.push(unmarkSubpoint); //Add unmark subpoint
        unmarkCheckpoint.subpoints = subpoints; //Update Subpoints List

        /*****************************************************/
        /****** Update (Non-Completed) Checkpoints List ******/
        /*****************************************************/
        updatedPoints = checklist.checkpoints;
        updatedPoints.push(unmarkCheckpoint);


    //Parent Checkpoint Isn't Completed
    } else {
        let unmarkSubpoint; //Subpoint Being Unmarked

        //Filter Out Subpoint Being Umarked From Completed Subpoints List
        let completedSubpoints = unmarkCheckpoint.completedSubpoints.filter(subpoint => {
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
        unmarkCheckpoint.completedSubpoints = completedSubpoints;

        //Update (Non-Completed) Subpoints List in Parent Checkpoint
        unmarkSubpoint.index = 0; //Update Index
        let subpoints = unmarkCheckpoint.subpoints;
        subpoints.push(unmarkSubpoint); //Add unmark subpoint
        unmarkCheckpoint.subpoints = subpoints; //Update Subpoints List

        /*****************************************************/
        /****** Update (Non-Completed) Checkpoints List ******/
        /*****************************************************/
        updatedPoints = checklist.checkpoints;
        updatedPoints.push(unmarkCheckpoint);

        
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
    /*********************************************************************/
    /****** Move Subpoint From Completed List to Non-Completed List ******/
    /*********************************************************************/
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
                const updates = removeSubpoint(isPointComplete, isSubpointComplete, pointIdx, subpointIdx);
                updatedPoints = updates.updatedPoints;
                updatedCompletedPoints = updates.updatedCompletedPoints;
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
                        const updates = removeSubpoint(isPointComplete, isSubpointComplete, pointIdx, subpointIdx);
                        updatedPoints = updates.updatedPoints;
                        updatedCompletedPoints = updates.updatedCompletedPoints;
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

const removeSubpoint = (isPointComplete, isSubpointComplete, pointIdx, subpointIdx) => {
    let updatedPoints;
    let updatedCompletedPoints;
    //Checklist is Completed
    if(isPointComplete) {
        //Extract Checklist's Completed Points
        updatedCompletedPoints = checklist.completedPoints;
        //Extract Checkpoint's Completed Subpoints
        let outdatedSubpoints = updatedCompletedPoints[pointIdx].completedSubpoints;

        //Filter Out Subpoint Being Deleted
        let updatedSubpoints = outdatedSubpoints.filter(subpoint => {
            return subpoint.index != subpointIdx;
        })

        //Re-assign Index for Each Subpoint
        for(let i=0; i < updatedSubpoints.length; i++) {
            updatedSubpoints[i].index = i;
        }

        //Updated Checkpoint's Completed Subpoints
        updatedCompletedPoints[pointIdx].completedSubpoints = updatedSubpoints;
        updatedPoints = checklist.checkpoints;

    //Checklist is Not Completed
    } else {
        //Subpoint Being Deleted is Completed
        if(isSubpointComplete) {
            //Extract Checklist's Checkpoints
            updatedPoints = checklist.checkpoints;

            //Extract Checkpoint's Completed Subpoints
            let outdatedSubpoints = updatedPoints[pointIdx].completedSubpoints;

            //Filter Out Subpoint Being Deleted
            let updatedSubpoints = outdatedSubpoints.filter(subpoint => {
                return subpoint.index != subpointIdx;
            })

            //Re-assign Index for Each Subpoint
            for(let i=0; i < updatedSubpoints.length; i++) {
                updatedSubpoints[i].index = i;
            }

            //Updated Checkpoint's Completed Subpoints
            updatedPoints[pointIdx].completedSubpoints = updatedSubpoints;
            updatedCompletedPoints = checklist.completedPoints;

        //Subpoint Being Deleted is Not Completed
        } else {
            //Extract Checklist's Checkpoints
            updatedPoints = checklist.checkpoints;

            //Extract Checkpoint's Subpoints
            let outdatedSubpoints = updatedPoints[pointIdx].subpoints;

            //Filter Out Subpoint Being Deleted
            let updatedSubpoints = outdatedSubpoints.filter(subpoint => {
                return subpoint.index != subpointIdx;
            })

            //Re-assign Index for Each Subpoint
            for(let i=0; i < updatedSubpoints.length; i++) {
                updatedSubpoints[i].index = i;
            }

            //Updated Checkpoint's Completed Subpoints
            updatedPoints[pointIdx].subpoints = updatedSubpoints;
            updatedCompletedPoints = checklist.completedPoints;

        }
    }

    return {
        updatedPoints: updatedPoints,
        updatedCompletedPoints: updatedCompletedPoints
    }
}
