import { Add, CheckBoxOutlineBlank, CheckBoxOutlined, Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Tooltip, Typography } from "@mui/material";
import SubpointsSection from "./SubpointsSection";
import { useState } from "react";

const CheckpointsSection = ({ 
    showAllEdit, 
    content, 
    subpoints, 
    completedSubpoints, 
    isCompleted, 
    isSubpoint }) => {

    const [showEdit, setShowEdit] = useState(false);
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
                            textDecoration: 'line-through',
                        }}
                    >
                        {content}
                    </Typography>
                ) : (
                    <InputBase 
                        value={content}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                )}
                {!showAllEdit && (
                    <Box>
                        {showEdit && (
                            <Tooltip title="Add Subpoint">
                                <IconButton size='small'>
                                    <Add fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        )}
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
                        <Tooltip title="Add Subpoint">
                            <IconButton size='small'>
                                <Add fontSize='inherit' />
                            </IconButton>
                        </Tooltip>
                    )}
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
            {subpoints.length > 0 ? <Divider variant='middle' flexItem/> : <Box></Box>}
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
                    return(
                        <SubpointsSection
                            content={content}
                            isCompleted={false}
                        />
                    )
                })}
                {completedSubpoints.map((completedSubpoint) => {
                    const { content } = completedSubpoint;
                    return(
                        <SubpointsSection
                            content={content}
                            isCompleted={true}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default CheckpointsSection;
