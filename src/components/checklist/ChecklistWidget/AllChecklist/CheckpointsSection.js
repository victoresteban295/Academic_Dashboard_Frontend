import { Add, CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Tooltip, Typography } from "@mui/material";
import SubpointsSection from "./SubpointsSection";
import { useState } from "react";
import NewCheckpointSection from "./NewCheckpointSection";
import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { deleteCheckpoint, markAsCompletePoint, modifyCheckpoint, unmarkAsCompletePoint } from "@/lib/utils/checklist/frontend/modifyCheckpoint";

const CheckpointsSection = ({ 
    showAllEdit, 
    username,
    listId,
    groupId,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    index,
    content, 
    subpoints, 
    completedSubpoints, 
    isCompleted, 
    modifySubpoint, 
    markAsCompleteSubpoint,
    unmarkAsCompleteSubpoint,
    deleteSubpoint }) => {

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    //Displays Checkpoint's Edit Icon Buttons
    const [showEdit, setShowEdit] = useState(false);

    //Checkpoint's Modified Content
    const [newContent, setNewContent] = useState(content);

    /* Display New Subpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    const displayNewPoint = () => {
        setShowNewPoint(true);
    }
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }

    // Modify Checkpoint's Content
    const handleContent = () => {
        setUpdating(false);
        const { updatedLists, updatedGroups, updatedPoints, completedPoints } = modifyCheckpoint(
            checklists,
            groups,
            listId,
            groupId,
            index, 
            newContent);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, completedPoints);
        reloadChecklistpage();
    }

    // Mark Checkpoint as Complete
    const markAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = markAsCompletePoint(
            checklists,
            groups,
            listId,
            groupId,
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Unmark Checkpoint as Complete 
    const unmarkAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = unmarkAsCompletePoint(
            checklists,
            groups,
            listId,
            groupId,
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Delete Checkpoint & it's Content 
    const handleDeletePoint = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = deleteCheckpoint(
            checklists,
            groups,
            listId,
            groupId,
            isCompleted, 
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    /* Modify Subpoint's Content */
    const handleSubContent = (subpointIdx, subContent) => {
        modifySubpoint(index, subpointIdx, subContent);
    }

    /* Mark Subpoint As Complete */
    const handleMarkAsCompleteSubpoint = (subpointIdx) => {
        markAsCompleteSubpoint(index, subpointIdx);
    }

    const handleUnmarkAsCompleteSubpoint = (subpointIdx) => {
        unmarkAsCompleteSubpoint(isCompleted, index, subpointIdx);
    }

    /* Delete Subpoint */
    const handleDeleteSubpoint = (isSubpointComplete, subpointIdx) => {
        deleteSubpoint(isCompleted, isSubpointComplete, index, subpointIdx);
    }

    return (
        <Stack
            spacing={0}
        >
            <Box
                onMouseOver={() => setShowEdit(true)}
                onMouseOut={() => setShowEdit(false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {isCompleted ? (
                    <IconButton 
                        size='large'
                        onClick={unmarkAsComplete}
                    >
                        <CheckBoxOutlined fontSize='inherit' />
                    </IconButton>
                ) : (
                    <IconButton 
                        size='large'
                        onClick={markAsComplete}
                    >
                        <CheckBoxOutlineBlank fontSize='inherit' />
                    </IconButton>
                )}

                {isCompleted ? (
                    <Typography
                        variant='body1'
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'line-through',
                        }}
                    >
                        {content}
                    </Typography>
                ) : (
                    <InputBase 
                        value={isUpdating ? newContent : content}
                        placeholder="Add Checkpoint"
                        onChange={(e) => {
                            setUpdating(true);
                            setNewContent(e.target.value)
                        }}
                        onBlur={handleContent}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                e.target.blur();
                            }
                        }}
                        inputProps={{maxLength: 50}}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                )}
                {!showAllEdit && (
                    <Box>
                        {(showEdit && !isCompleted) && (
                            <Tooltip title="Add Subpoint">
                                <IconButton 
                                    size='small'
                                    disabled={showNewPoint}
                                    onClick={() => setShowNewPoint(true)}
                                >
                                    <Add fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        )}
                        {showEdit && (
                            <Tooltip title="Delete Checkpoint">
                                <IconButton 
                                    size='small'
                                    onClick={handleDeletePoint}
                                >
                                    <Delete 
                                        fontSize='inherit' 
                                        sx={{
                                            color: '#ef476f',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                )}
                <Box>
                    {(showAllEdit && !isCompleted) && (
                        <Tooltip title="Add Subpoint">
                            <IconButton 
                                size='small'
                                disabled={showNewPoint}
                                onClick={() => setShowNewPoint(true)}
                            >
                                <Add fontSize='inherit' />
                            </IconButton>
                        </Tooltip>
                    )}
                    {showAllEdit && (
                        <Tooltip title="Delete Checkpoint">
                            <IconButton 
                                size='small'
                                onClick={handleDeletePoint}
                            >
                                <Delete 
                                    fontSize='inherit' 
                                    sx={{
                                        color: '#ef476f',
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
            </Box>
            {((subpoints.length > 0) || (completedSubpoints.length > 0)) && !showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            { showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            <Stack
                className='supoints-section'
                divider={<Divider variant='middle' flexItem />}
                spacing={0}
                sx={{
                    flexGrow: 1,
                    pl: 4,
                }}
            >
                {subpoints.map((subpoint) => {
                    const { index, content } = subpoint;
                    return(
                        <SubpointsSection
                            showAllEdit={showAllEdit}
                            index={index}
                            content={content}
                            isCompleted={false}
                            handleSubContent={handleSubContent}
                            handleMarkAsCompleteSubpoint={handleMarkAsCompleteSubpoint}
                            handleUnmarkAsCompleteSubpoint={handleUnmarkAsCompleteSubpoint}
                            handleDeleteSubpoint={handleDeleteSubpoint}
                        />
                    )
                })}
                {showNewPoint && (
                    <NewCheckpointSection
                        username={username}
                        listId={listId}
                        groupId={groupId}
                        index={index}
                        groups={groups}
                        changeGroups={changeGroups}
                        checklists={checklists}
                        changeChecklists={changeChecklists}
                        showNewPoint={showNewPoint}
                        displayNewPoint={displayNewPoint}
                        hideNewPoint={hideNewPoint}
                        isSubpoint={true}
                    />
                )}
                {completedSubpoints.map((completedSubpoint) => {
                    const { index, content } = completedSubpoint;
                    return(
                        <SubpointsSection
                            showAllEdit={showAllEdit}
                            index={index}
                            content={content}
                            isCompleted={true}
                            handleSubContent={handleSubContent}
                            handleMarkAsCompleteSubpoint={handleMarkAsCompleteSubpoint}
                            handleUnmarkAsCompleteSubpoint={handleUnmarkAsCompleteSubpoint}
                            handleDeleteSubpoint={handleDeleteSubpoint}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
