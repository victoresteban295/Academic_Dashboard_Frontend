import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { deleteSubpoint, markAsCompleteSubpoint, modifySubpoint, unmarkAsCompleteSubpoint } from "@/lib/utils/checklist/frontend/modifySubpoint";
import { CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, IconButton, InputBase, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const SubpointsSection = ({ 
    username,
    isParentComplete,
    listId,
    groupId,
    pointIdx,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    showAllEdit, 
    subpointIdx,
    content, 
    isCompleted }) => {

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    const [newContent, setNewContent] = useState(content);

    // Modify Subpoint's Content 
    const handleNewSubcontent = () => {
        setUpdating(false);
        const { updatedLists, updatedGroups, updatedPoints, completedPoints } = modifySubpoint(
            checklists, 
            groups, 
            listId,
            groupId,
            pointIdx,
            subpointIdx,
            newContent)

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, completedPoints);
        reloadChecklistpage();
    }

    // Mark Supoint As Complete 
    const markAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = markAsCompleteSubpoint(
            checklists, 
            groups, 
            listId, 
            groupId, 
            pointIdx, 
            subpointIdx);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Unmark Supoint As Complete
    const unmarkAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = unmarkAsCompleteSubpoint(
            checklists, 
            groups, 
            listId, 
            groupId,
            isParentComplete,
            pointIdx,
            subpointIdx);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Delete Subpoint's Content
    const removeSubpoint = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = deleteSubpoint(
            checklists, 
            groups,
            listId,
            groupId,
            isParentComplete,
            isCompleted,
            pointIdx,
            subpointIdx);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    return (
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
                    variant='body2'
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
                    multiline={true}
                    placeholder="Add Subpoint"
                    onChange={(e) => {
                        setUpdating(true);
                        setNewContent(e.target.value)
                    }}
                    onBlur={handleNewSubcontent}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            e.target.blur();
                        }
                    }}
                    inputProps={{maxLength: 200}}
                    sx={{
                        flexGrow: 1,
                    }}
                />
            )}
            {!showAllEdit && (
                <Box
                    sx={{
                        width: '30px',
                    }}
                >
                    {showEdit && (
                        <Tooltip title="Delete Checkpoint">
                            <IconButton 
                                size='small'
                                onClick={removeSubpoint}
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
                {showAllEdit && (
                    <Tooltip title="Delete Checkpoint">
                        <IconButton 
                            size='small'
                            onClick={removeSubpoint}
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
    )
}

export default SubpointsSection;
