"use client"
import { Box, Divider, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import CheckpointsSection from "./CheckpointsSection";
import { modifyCheckpoints, reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/modifyChecklist";
import { useState } from "react";
import NewCheckpointSection from "./NewCheckpointSection";

const ChecklistContent = ({ 
    username,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    activeList, 
    handleActiveList, 
    listId, 
    title, 
    groupId,
    checkpoints, 
    completedPoints }) => {

    //Displays Edit Buttons
    const [showAllEdit, setShowAllEdit] = useState(false);
    const showAllEditButtons = () => {
        setShowAllEdit(true);
    }
    const unshowAllEditButtons = () => {
        setShowAllEdit(false);
    }

    /* Display New Chekpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    const displayNewPoint = () => {
        setShowNewPoint(true);
    }
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }


    /*****************************/
    /* Mark Subpoint As Complete */
    /*****************************/
    const markAsCompleteSubpoint = (pointIdx, subpointIdx) => {
        let updatedLists = [...checklists];
        let updatedGroups = [...groups];
        let updatedPoints;
        let updatedCompletedPoints;
        
        //Checklist is Not Grouped
        if(groupId === '') {
            //Iterate to Find Checklist Being Modified
            updatedLists.map(checklist => {
                if(checklist.listId === listId) {
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
                        }
                    })
                }
            }) 
        }

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    /* Unmark Subpoint As Complete */
    const unmarkAsCompleteSubpoint = (isPointComplete, pointIdx, subpointIdx) => {
        let updatedLists = [...checklists];
        let updatedGroups = [...groups];
        let updatedPoints;
        let updatedCompletedPoints;
        
        //Checklist is Not Grouped
        if(groupId === '') {
            //Iterate to Find Checklist Being Modified
            updatedLists.map(checklist => {
                if(checklist.listId === listId) {
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
                        }
                    })
                }
            }) 
        }

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    /*****************************/
    /* Modify Subpoint's Content */
    /*****************************/
    const modifySubpoint = (pointIdx, subpointIdx, subContent) => {
        let updatedLists = [...checklists];
        let updatedGroups = [...groups];
        let newCheckpoints;

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
                        newCheckpoints = checklist.checkpoints
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
                                newCheckpoints = checklist.checkpoints
                            }
                        })
                    }
                }) 
            }

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            modifyCheckpoints(username, listId, newCheckpoints, completedPoints);
        }
        reloadChecklistpage();
    }

    /* Delete Subpoint */
    const deleteSubpoint = (
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
                        }
                    })
                }
            }) 
        }

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    return (
        <>
            {(activeList === listId) && (
                <Box
                    className="checklist-widget"
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box
                        className="checklist-title-section"
                        sx={{
                            width: '100%',
                            p: 1,
                        }}
                    >
                        <TitleSection
                            username={username}
                            listId={listId}
                            title={title}
                            groupId={groupId}
                            groups={groups}
                            changeGroups={changeGroups}
                            checklists={checklists}
                            changeChecklists={changeChecklists}
                            showAllEdit={showAllEdit}
                            showAllEditButtons={showAllEditButtons}
                            unshowAllEditButtons={unshowAllEditButtons}
                            showNewPoint={showNewPoint}
                            displayNewPoint={displayNewPoint}
                        /> 
                    </Box>
                    <Box
                        className="checklist-content-section"
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                        <Stack
                            className='checkpoints-section'
                            divider={<Divider variant='middle' flexItem />}
                            spacing={0}
                            sx={{
                                width: '100%',
                            }}
                        >
                            {checkpoints.map((checkpoint) => {
                                const { index, content, subpoints, completedSubpoints } = checkpoint;
                                return(
                                    <CheckpointsSection 
                                        showAllEdit={showAllEdit}
                                        username={username}
                                        listId={listId}
                                        groupId={groupId}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        checklists={checklists}
                                        changeChecklists={changeChecklists}
                                        index={index}
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={false}
                                        modifySubpoint={modifySubpoint}
                                        markAsCompleteSubpoint={markAsCompleteSubpoint}
                                        unmarkAsCompleteSubpoint={unmarkAsCompleteSubpoint}
                                        deleteSubpoint={deleteSubpoint}
                                    />
                                )
                            })}
                            {showNewPoint && (
                                <NewCheckpointSection 
                                    username={username}
                                    listId={listId}
                                    groupId={groupId}
                                    groups={groups}
                                    changeGroups={changeGroups}
                                    checklists={checklists}
                                    changeChecklists={changeChecklists}
                                    hideNewPoint={hideNewPoint}
                                    isSubpoint={false}
                                />
                            )}
                            {completedPoints.map((completedPoint) => {
                                const { index, content, subpoints, completedSubpoints } = completedPoint;
                                return(
                                    <CheckpointsSection 
                                        showAllEdit={showAllEdit}
                                        username={username}
                                        listId={listId}
                                        groupId={groupId}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        checklists={checklists}
                                        changeChecklists={changeChecklists}
                                        index={index}
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={true}
                                        modifySubpoint={modifySubpoint}
                                        markAsCompleteSubpoint={markAsCompleteSubpoint}
                                        unmarkAsCompleteSubpoint={unmarkAsCompleteSubpoint}
                                        deleteSubpoint={deleteSubpoint}
                                    />
                                )
                            })}
                        </Stack>
                    </Box>
                </Box> 
            )}
        </>
    )
}

export default ChecklistContent;
