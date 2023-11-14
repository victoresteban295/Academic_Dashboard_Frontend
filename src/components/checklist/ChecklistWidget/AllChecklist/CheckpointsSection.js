import { Add, CheckBoxOutlineBlank, CheckBoxOutlined, Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Tooltip, Typography } from "@mui/material";
import SubpointsSection from "./SubpointsSection";
import { useState } from "react";
import NewCheckpointSection from "./NewCheckpointSection";

const CheckpointsSection = ({ 
    showAllEdit, 
    index,
    content, 
    subpoints, 
    completedSubpoints, 
    isCompleted, 
    modifyCheckpoint, 
    markAsCompletePoint,
    unmarkAsCompletePoint,
    deleteCheckpoint,
    modifySubpoint, 
    addSubpoint, 
    deleteSubpoint }) => {

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    //Displays Checkpoint's Edit Icon Buttons
    const [showEdit, setShowEdit] = useState(false);

    //Checkpoint's Modified Content
    const [newContent, setNewContent] = useState(content);

    //Has Checkpoint Been Completed
    const [isComplete, setComplete] = useState(isCompleted);

    /* //Used to Simultaneously Mark all Subpoints as Complete or Incomplete */
    /* const [subComplete, setSubComplete] = useState(true); */
    /* const [subIncomplete, setSubIncomplete] = useState(false); */

    /* Display New Subpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    const displayNewPoint = () => {
        setShowNewPoint(true);
    }
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }

    /* Create New Supoint */
    const createNewSubpoint = (subContent) => {
        addSubpoint(index, subContent);
    }

    /* Mark Checkpoint as Complete */
    const markAsComplete = () => {
        /* setComplete(true);  */
        /* setSubIncomplete(true); */
        markAsCompletePoint(index);
    }

    /* Unmark Checkpoint as Complete */
    const unmarkAsComplete = () => {
        /* setComplete(false); */
        /* setSubComplete(false); */
        unmarkAsCompletePoint(index);
    }

    /* Modify Checkpoint's Content */
    const handleContent = () => {
        setUpdating(false);
        modifyCheckpoint(index, newContent);
    }


    /* Delete Checkpoint & it's Content */
    const handleDeletePoint = () => {
        deleteCheckpoint(isComplete, index);
    }

    /* Modify Subpoint's Content */
    const handleSubContent = (subpointIdx, subContent) => {
        modifySubpoint(index, subpointIdx, subContent);
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
                {isComplete ? (
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

                {isComplete ? (
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
                        {(showEdit && !isComplete) && (
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
                    {(showAllEdit && !isComplete) && (
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
                            handleDeleteSubpoint={handleDeleteSubpoint}
                        />
                    )
                })}
                {showNewPoint && (
                    <NewCheckpointSection
                        showNewPoint={showNewPoint}
                        displayNewPoint={displayNewPoint}
                        hideNewPoint={hideNewPoint}
                        isSubpoint={true}
                        createNewCheckpoint={createNewSubpoint}
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
                            handleDeleteSubpoint={handleDeleteSubpoint}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
