/**********************************/
/* Add New Subpoint to Checkpoint */
/**********************************/
export const addSubpoint = (checklists, groups, listId, groupId, pointIdx, subContent) => {
    let updatedLists = [...checklists];
    let updatedGroups = [...groups];
    let newCheckpoints;
    let completedPoints;

    //Create New Subpoint Object
    let subpoint = {
        index: '',
        content: subContent,
        subpoints: [],
        completedSubpoints: []
    }

    //Checklist is Not Grouped
    if(groupId === '') {
        //Iterate to Find Checklist Benig Modified
        updatedLists.map(checklist => {
            if(checklist.listId === listId) {
                //Extract Original Subpoints List
                let subpoints = checklist.checkpoints[pointIdx].subpoints;
                //Updated New Subpoint's Index
                subpoint.index = subpoints.length;
                //Add Subpoint to Subpoints List
                checklist.checkpoints[pointIdx].subpoints.push(subpoint);
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
                        //Extract Original Subpoints List
                        let subpoints = checklist.checkpoints[pointIdx].subpoints;
                        //Updated New Subpoint's Index
                        subpoint.index = subpoints.length;
                        //Add Subpoint to Subpoints List
                        checklist.checkpoints[pointIdx].subpoints.push(subpoint);
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
