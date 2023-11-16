import { CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, IconButton, InputBase, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const SubpointsSection = ({ 
    showAllEdit, 
    index,
    content, 
    isCompleted, 
    handleSubContent, 
    handleMarkAsCompleteSubpoint,
    handleUnmarkAsCompleteSubpoint,
    handleDeleteSubpoint }) => {

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    const [newContent, setNewContent] = useState(content);

    /* Modify Subpoint's Content */
    const handleNewSubcontent = () => {
        setUpdating(false);
        handleSubContent(index, newContent);
    }

    /* Mark Supoint As Complete */
    const markAsComplete = () => {
        handleMarkAsCompleteSubpoint(index);
    }

    /* Unmark Supoint As Complete */
    const unmarkAsComplete = () => {
        handleUnmarkAsCompleteSubpoint(index);
    }

    /* Delete Subpoint's Content */
    const deleteSubpoint = (isCompleted, index) => {
        handleDeleteSubpoint(isCompleted, index);
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
                    value={isUpdating ? newContent: content}
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
                    sx={{
                        flexGrow: 1,
                    }}
                />
            )}
            {!showAllEdit && (
                <Box>
                    {showEdit && (
                        <Tooltip title="Delete Checkpoint">
                            <IconButton 
                                size='small'
                                onClick={deleteSubpoint}
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
                            onClick={deleteSubpoint}
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
