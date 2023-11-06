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
    addSubpoint }) => {

    //Subpoint's Index in Corresponding Array
    let subIndex = -1;
    let compSubIndex = -1;

    //Displays Checkpoint's Edit Icon Buttons
    const [showEdit, setShowEdit] = useState(false);

    //Checkpoint's Modified Content
    const [newContent, setNewContent] = useState(content);

    //Has Checkpoint Been Completed
    const [isComplete, setComplete] = useState(isCompleted);

    //Used to Simultaneously Mark all Subpoints as Complete or Incomplete
    const [subComplete, setSubComplete] = useState(true);
    const [subIncomplete, setSubIncomplete] = useState(false);

    //Checkpoint's Delete State (Has Been Deleted?)
    const [isDeleted, setDeleted] = useState(false);

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
        setComplete(true); 
        setSubIncomplete(true);
        markAsCompletePoint(index);
    }

    /* Unmark Checkpoint as Complete */
    const unmarkAsComplete = () => {
        setComplete(false);
        setSubComplete(false);
        unmarkAsCompletePoint(index);
    }

    /* Modify Checkpoint's Content */
    const handleContent = () => {
        modifyCheckpoint(index, newContent);
    }


    /* Delete Checkpoint & it's Content */
    const handleDeletePoint = () => {
        setDeleted(true);
        deleteCheckpoint(isCompleted, index);
    }

    /* Modify Subpoint's Content */
    const handleSubContent = (subIndex, subContent) => {
        modifySubpoint(index, subIndex, subContent);
    }

    return (
        <>
            {!isDeleted && (
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
                                value={newContent}
                                placeholder="Add Checkpoint"
                                onChange={(e) => setNewContent(e.target.value)}
                                onBlur={handleContent}
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter') {
                                        e.target.blur();
                                    }
                                }}
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
                            const { content } = subpoint;
                            subIndex += 1;
                            return(
                                <SubpointsSection
                                    showAllEdit={showAllEdit}
                                    index={subIndex}
                                    content={content}
                                    isCompleted={false}
                                    handleSubContent={handleSubContent}
                                />
                            )
                        })}
                        {showNewPoint && (
                            <NewCheckpointSection
                                showNewPoint={showNewPoint}
                                displayNewPoint={displayNewPoint}
                                hideNewPoint={hideNewPoint}
                                createNewCheckpoint={createNewSubpoint}
                            />
                        )}
                        {completedSubpoints.map((completedSubpoint) => {
                            const { content } = completedSubpoint;
                            compSubIndex += 1;
                            return(
                                <SubpointsSection
                                    showAllEdit={showAllEdit}
                                    index={compSubIndex}
                                    content={content}
                                    isCompleted={true}
                                    handleSubContent={handleSubContent}
                                />
                            )
                        })}
                    </Stack>
                </Stack>
            )}
        </>
    )
}

export default CheckpointsSection;
