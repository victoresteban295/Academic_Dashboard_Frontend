import { Add, CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { deleteCheckpoint, markAsCompletePoint, modifyCheckpoint, unmarkAsCompletePoint } from "@/lib/utils/checklist/frontend/modifyCheckpoint";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SubpointsSection from "../SubpointsSection/SubpointsSection";
import UnmarkSubpointsSection from "./UnmarkSubpointsSection";

const CheckpointsSection = ({ 
    activeCheckpoint,
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
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    //Displays Checkpoint's Edit Icon Buttons
    const [showEdit, setShowEdit] = useState(false);

    //Checkpoint's Modified Content
    const [newContent, setNewContent] = useState(content);

    //Checkpoint is Getting Dragged
    const isActivePoint = activeCheckpoint === index;

    /* Display New Subpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    /* const displayNewPoint = () => { */
    /*     setShowNewPoint(true); */
    /* } */
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }

    /* Dnd-kit: Make Component Draggable */
    /* Converts Component into Draggable Item */
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({id: index});

    /* Allows us to pick up draggable componenet */
    const style = {
        transform: CSS.Transform.toString(transform && {...transform, scaleY: 1}),
        transition,
    }

    /* Modify Checkpoint's Content */
    const handleContent = async () => {
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        if(newContent.trim() != '') {
            try {
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
                await modifyCheckpoints(listId, updatedPoints, completedPoints);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeChecklists(outdatedLists);
                changeGroups(outdatedGroups);
            }
        } else {
            setNewContent(content);
        }
    }

    /* Mark Checkpoint as Complete */
    const markAsComplete = async () => {
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        try {
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
            await modifyCheckpoints(listId, updatedPoints, updatedCompletedPoints);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);
            
            //Undo Changes Made
            changeChecklists(outdatedLists);
            changeGroups(outdatedGroups);
        }
    }

    /* Unmark Checkpoint as Complete */
    const unmarkAsComplete = async () => {
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        try {
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
            await modifyCheckpoints(listId, updatedPoints, updatedCompletedPoints);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);
            
            //Undo Changes Made
            changeChecklists(outdatedLists);
            changeGroups(outdatedGroups);
        }
    }

    // Delete Checkpoint & it's Content 
    const handleDeletePoint = async () => {
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        try {
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
            await modifyCheckpoints(listId, updatedPoints, updatedCompletedPoints);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);
            
            //Undo Changes Made
            changeChecklists(outdatedLists);
            changeGroups(outdatedGroups);
        }
    }

    return (
        <Stack
            spacing={0}
            sx={{
                bgcolor: isActivePoint ? '#cecece' : '',
                ...style,
            }}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
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
                        multiline={true}
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
                        inputProps={{maxLength: 200}}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                )}
                {!showAllEdit && (
                    <Box
                        sx={{
                            display: 'flex',
                            width: '60px',
                        }}
                    >
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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                    >
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
            </Box>
            {((subpoints.length > 0) || (completedSubpoints.length > 0)) && !showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            { showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            <Stack
                className='subpoints-section'
                spacing={0}
                sx={{
                    flexGrow: 1,
                    pl: 4,
                    display: isActivePoint ? 'none' : 'block',
                }}
            >
                <UnmarkSubpointsSection 
                    username={username}
                    showAllEdit={showAllEdit} 
                    isParentComplete={isCompleted}
                    listId={listId}
                    groupId={groupId}
                    pointIdx={index}
                    subpoints={subpoints}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    groups={groups}
                    changeGroups={changeGroups}
                    showNewPoint={showNewPoint}
                    hideNewPoint={hideNewPoint}
                    handleOpenAlert={handleOpenAlert}
                />
                {(subpoints.length != 0) && (completedSubpoints.length != 0) &&
                    <Divider 
                        variant='middle' 
                        flexItem 
                    />
                }
                <Stack
                    className='marked-points-section'
                    divider={
                        <Divider 
                            variant='middle' 
                            flexItem 
                        />
                    }
                    spacing={0}
                    sx={{
                        width: '100%',
                    }}
                >
                    {completedSubpoints.map((completedSubpoint) => {
                        const { index: subpointIdx, content } = completedSubpoint;
                        return(
                            <SubpointsSection
                                key={subpointIdx}
                                activeSubpoint={''}
                                username={username}
                                isParentComplete={isCompleted}
                                listId={listId}
                                groupId={groupId}
                                pointIdx={index}
                                groups={groups}
                                changeGroups={changeGroups}
                                checklists={checklists}
                                changeChecklists={changeChecklists}
                                showAllEdit={showAllEdit}
                                subpointIdx={subpointIdx}
                                content={content}
                                isCompleted={true}
                                handleOpenAlert={handleOpenAlert}
                            />
                        )
                    })}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
