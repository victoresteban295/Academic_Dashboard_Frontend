import { CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, IconButton, InputBase, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const SubpointsSection = ({ 
    showAllEdit, 
    index,
    content, 
    isCompleted, 
    handleSubContent }) => {

    const [showEdit, setShowEdit] = useState(false);
    const [newContent, setNewContent] = useState(content);

    const handleNewSubcontent = () => {
        handleSubContent(index, newContent);
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
                <IconButton size='large'>
                    <CheckBoxOutlined fontSize='inherit' />
                </IconButton>
            ) : (
                <IconButton size='large'>
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
                    value={newContent}
                    placeholder="Add Subpoint"
                    onChange={(e) => setNewContent(e.target.value)}
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
                            <IconButton size='small'>
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
                        <IconButton size='small'>
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
