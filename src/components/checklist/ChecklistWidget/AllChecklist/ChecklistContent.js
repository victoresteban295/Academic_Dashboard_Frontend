"use client"
import { Box, Divider, InputBase, Stack } from "@mui/material";
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

    /* Rename Checklist's Title */
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
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);
        renameCheclistTitle(username, listId, newTitle);
    }

    /* Create New Checkpoint */
    const createNewCheckpoint = (newPoint) => {
        //Create New Checkpoint Object
        const checkpoint = {
            content: newPoint,
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
