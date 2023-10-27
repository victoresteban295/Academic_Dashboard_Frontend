"use client"
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChecklistOption from "./ChecklistOption";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";
import { useState } from "react";

const GrouplistOption = ({ username, activeList, handleActiveList, title, groupId, checklists }) => {
    const [isExpanded, setExpanded] = useState(false);
    const handleOpen = () => {
        setExpanded(true);
    }
    const handleClose = () => {
        setExpanded(false);
    }

    return (
        <Stack
            id={groupId}
            className="grouplist-container"
            spacing={1}
            sx={{
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#cecece',
                my: isExpanded ? 1 : 0,
                py: isExpanded ? 1 : 0,
            }}
        >
            <Box
                className="grouplist-title-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    {isExpanded ? (
                        <IconButton size='small' onClick={handleClose}>
                            <ExpandLess fontSize='inherit' />
                        </IconButton>
                    ) : (
                        <IconButton size='small' onClick={handleOpen}>
                            <ExpandMore fontSize='inherit' />
                        </IconButton>
                    )}
                    <Typography
                        variant="button"
                    >
                        {title}
                    </Typography>
                </Box>
                <IconButton size='small'>
                    <MoreVert fontSize='inherit' />
                </IconButton>
            </Box>
            <Stack
                className='grouplist-checklists-section'
                spacing={0.5}
                sx={{
                    display: isExpanded ? 'inline' : 'none',
                    px: 1,
                }}
            >
                {checklists.map((checklist) => {
                    const { title, listId } = checklist;
                    return(
                        <ChecklistOption
                            username={username}
                            activeList={activeList}
                            handleActiveList={handleActiveList}
                            title={title}
                            listId={listId}
                        />
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default GrouplistOption;
