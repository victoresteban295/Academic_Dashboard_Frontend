"use client"
import { Box, Divider, InputBase, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import CheckpointsSection from "./CheckpointsSection";
import { modifyCheckpoints, reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/modifyChecklist";
import { useState } from "react";
import NewCheckpointSection from "./NewCheckpointSection";
import { addChecklistToGroup, createGrouplist, moveChecklistGroupToGroup, removeChecklistFromGroup } from "@/lib/utils/checklist/modifyGrouplist";

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

    let pointIndex = -1;
    let compIndex = -1;

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

    /****************************/
    /* Rename Checklist's Title */
    /****************************/
    const handleChecklistTitle = (newTitle) => {
        let updatedLists = [...checklists];
        let updatedGroups = [...groups];
        if(groupId === '') {
            updatedLists.map(checklist => {
                if(checklist.listId === listId) {
                    checklist.title = newTitle;
                }
            })
        } else {
            updatedGroups.map(group => {
                group.checklists.map(checklist => {
                    if(checklist.listId === listId) {
                        checklist.title = newTitle;
                    }
                })
            })
        }

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        renameCheclistTitle(username, listId, newTitle);
        reloadChecklistpage();
    }

    /***********************************/
    /* Add Checklist To Existing Group */
    /***********************************/
    const addToExistingGroup = (listId, groupId) => {
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

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        addChecklistToGroup(username, listId, groupId);
        reloadChecklistpage();
    }

    /******************************/
    /* Add Checklist To New Group */
    /******************************/
    const addToNewGroup = async ( listId, newTitle) => {
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

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        const { groupId } = await createGrouplist(username, newTitle);
        addChecklistToGroup(username, listId, groupId); //Backend Call
        reloadChecklistpage();
    }

    /*************************************/
    /* Move Checklist To Different Group */
    /*************************************/
    const moveListGroupToGroup = (listId, fromGroupId, toGroupId) => {
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

        //Update State Value
        changeGroups(updatedGroups);

        //Backend API: Update Database
        moveChecklistGroupToGroup(username, listId, fromGroupId, toGroupId); //Move to Different Group
        reloadChecklistpage();
    }

    /*******************************/
    /* Move Checklist To New Group */
    /*******************************/
    const moveListGroupToNewGroup = async (listId, fromGroupId, newGroupTilte) => {
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

        //Update State Value
        changeGroups(updatedGroups);

        //Backend API: Update Database
        const { groupId: toGroupId } = await createGrouplist(username, newGroupTilte);
        moveChecklistGroupToGroup(username, listId, fromGroupId, toGroupId); 
        reloadChecklistpage();
    }

    /***************************************/
    /* Remove Checklist From Current Group */
    /***************************************/
    const removeListFromGroup = (listId, groupId) => {
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

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        removeChecklistFromGroup(username, listId, groupId);
        reloadChecklistpage();
    }

    /*************************/
    /* Create New Checkpoint */
    /*************************/
    const createNewCheckpoint = (content) => {
        //Create New Checkpoint Object
        const checkpoint = {
            content: content,
            subpoints: [],
            completedSubpoints: []
        }
        checkpoints.push(checkpoint); //Add New Checkpoint
        modifyCheckpoints(username, listId, checkpoints, completedPoints);
        reloadChecklistpage();
    }


    /* Mark Checkpoint as Complete */
    const markAsCompletePoint = (index) => {
        /* //Mark all subpoints as Complete */
        /* const subpoints = checkpoints[index].subpoints; */
        /* subpoints.map(subpoint => { */
        /*     //Move All Elements in subpoints to completedSubpoints */
        /*     checkpoints[index].completedSubpoints.push(subpoint); */
        /* }) */
        /* checkpoints[index].subpoints = []; //Empty out subpoints */

        //Push Completed Checkpoint to CompletedPoints List
        completedPoints.push(checkpoints[index]);
        //Remove Completed Checkpoint from Checkpoints List
        checkpoints.splice(index, 1); 
        //Update Changes
        modifyCheckpoints(
            username, 
            listId, 
            checkpoints, 
            completedPoints); 
        reloadChecklistpage();
    }

    /* UnMark Checkpoint as Complete */
    const unmarkAsCompletePoint = (index) => {
        /* //Mark all completedSubpoints as Incomplete */
        /* const completedSubpoints = checkpoints[index].completedSubpoints; */
        /* completedSubpoints.map(subpoint => { */
        /*     //Move All Elements in completedSubpoints to subpoints */
        /*     checkpoints[index].subpoints.push(subpoint); */
        /* }) */
        /* checkpoints[index].completedSubpoints = []; //Empty out completedSubpoints */

        //Push Checkpoint to Checkpoint List
        checkpoints.push(completedPoints[index]);
        //Remove Checkpoint from Completed Checkpoints List
        completedPoints.splice(index, 1); 
        //Update Changes
        modifyCheckpoints(
            username, 
            listId, 
            checkpoints, 
            completedPoints); 
        reloadChecklistpage();
    }

    /* Modify Checkpoint Content */
    const modifyCheckpoint = (index, content) => {
        if(content.trim() === '') {
            //delete checkpoint
        } else {
            checkpoints[index].content = content; //Modify Checkpoint's Content
            modifyCheckpoints(username, listId, checkpoints, completedPoints);
        }
        reloadChecklistpage();
    }

    /* Delete Checkpoint & it's Subpoints */
    const deleteCheckpoint = (isComplete, index) => {
        if(isComplete) {
            completedPoints.splice(index, 1);
        } else {
            checkpoints.splice(index, 1);
        }
        modifyCheckpoints(username, listId, checkpoints, completedPoints);
        reloadChecklistpage();
    }

    /* Add New Subpoint to Checkpoint */
    const addSubpoint = (index, subContent) => {
        //Create New Checkpoint Object
        const subpoint = {
            content: subContent,
            subpoints: [],
            completedSubpoints: []
        }
        checkpoints[index].subpoints.push(subpoint); //Add New Subpoint
        modifyCheckpoints(username, listId, checkpoints, completedPoints);
    }

    /* Modify Subpoint's Content */
    const modifySubpoint = (index, subIndex, subContent) => {
        if(subContent.trim() === '') {
            //delete subpoint
        } else {
            //Modify Subpoint's Content
            checkpoints[index].subpoints[subIndex].content = subContent;
            modifyCheckpoints(username, listId, checkpoints, completedPoints);
        }
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
                            groups={groups}
                            groupId={groupId}
                            handleChecklistTitle={handleChecklistTitle}
                            addToExistingGroup={addToExistingGroup}
                            addToNewGroup={addToNewGroup}
                            moveListGroupToGroup={moveListGroupToGroup}
                            moveListGroupToNewGroup={moveListGroupToNewGroup}
                            removeListFromGroup={removeListFromGroup}
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
                                const { content, subpoints, completedSubpoints } = checkpoint;
                                pointIndex += 1;
                                return(
                                    <CheckpointsSection 
                                        showAllEdit={showAllEdit}
                                        index={pointIndex}
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={false}
                                        modifyCheckpoint={modifyCheckpoint}
                                        markAsCompletePoint={markAsCompletePoint}
                                        unmarkAsCompletePoint={unmarkAsCompletePoint}
                                        deleteCheckpoint={deleteCheckpoint}
                                        modifySubpoint={modifySubpoint}
                                        addSubpoint={addSubpoint}
                                    />
                                )
                            })}
                            {showNewPoint && (
                                <NewCheckpointSection 
                                    showNewPoint={showNewPoint}
                                    displayNewPoint={displayNewPoint}
                                    hideNewPoint={hideNewPoint}
                                    createNewCheckpoint={createNewCheckpoint}
                                />
                            )}
                            {completedPoints.map((completedPoint) => {
                                const { content, subpoints, completedSubpoints, isSubpoint } = completedPoint;
                                compIndex += 1;
                                return(
                                    <CheckpointsSection 
                                        showAllEdit={showAllEdit}
                                        index={compIndex}
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={true}
                                        modifyCheckpoint={modifyCheckpoint}
                                        markAsCompletePoint={markAsCompletePoint}
                                        unmarkAsCompletePoint={unmarkAsCompletePoint}
                                        deleteCheckpoint={deleteCheckpoint}
                                        modifySubpoint={modifySubpoint}
                                        addSubpoint={addSubpoint}
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
