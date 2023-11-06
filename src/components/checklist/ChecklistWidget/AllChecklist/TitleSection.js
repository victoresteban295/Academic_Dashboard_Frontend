import { ChecklistTitleSchema } from "@/lib/schemas/checklistSchema";
import { reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/modifyChecklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, MoreVert } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, InputBase, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AddToGroupBackdrop from "./AddToGroupBackdrop";
import { removeChecklistFromGroup } from "@/lib/utils/checklist/modifyGrouplist";
import MoveToGroupBackdrop from "./MoveToGroupBackdrop";

const TitleSection = ({ 
    username,
    listId,
    title, 
    grouplists,
    groupId,
    handleChecklistTitle, 
    showAllEdit,
    showAllEditButtons, 
    unshowAllEditButtons, 
    showNewPoint, 
    displayNewPoint }) => {

    /* React Hook From */
    const { control } = useForm({
        mode: 'onBlur', 
        defaultValues: {
            checklistTitle: title,
        },
        resolver: zodResolver(ChecklistTitleSchema), //Zod Validation Schema
    });

    //Options Menu's State Value & Functions
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    /* Backdrop State Value & Function */
    /* Add Checklst to Group */
    const [openAddToGroup, setOpenAddToGroup] = useState(false);
    const handleOpenAddToGroup = () => {
        setOpenAddToGroup(true);
    }
    const handleCloseAddToGroup = () => {
        setOpenAddToGroup(false);
    }

    /* Backdrop State Value & Function */
    /* Move From Group to Group */
    const [openMoveToGroup, setOpenMoveToGroup] = useState(false);
    const handleOpenMoveToGroup = () => {
        setOpenMoveToGroup(true);
    }
    const handleCloseMoveToGroup = () => {
        setOpenMoveToGroup(false);
    }

    /* Change Title Method */
    const handleTitleChange = (event) => {
        handleChecklistTitle(event.target.value);
        reloadChecklistpage();
    }
    
    /* Remove Checklist From Current Group */
    const removeFromGroup = () => {
        removeChecklistFromGroup(username, listId, groupId);
        handleClose();
        reloadChecklistpage();
    }

    return (
        <Box
            className="checklist-title-section"
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <AddToGroupBackdrop 
                username={username}
                listId={listId}
                open={openAddToGroup}
                handleClose={handleCloseAddToGroup}
                grouplists={grouplists}
            />
            <MoveToGroupBackdrop 
                username={username}
                listId={listId}
                fromGroupId={groupId}
                open={openMoveToGroup}
                handleClose={handleCloseMoveToGroup}
                grouplists={grouplists}
            />
            <Controller 
                name="checklistTitle"
                control={control}
                render={({field: { onChange, value}}) => {
                    return (
                        <InputBase
                            value={value}
                            placeholder="Add Checklist Title"
                            onChange={onChange}
                            onBlur={handleTitleChange}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    e.target.blur();
                                }
                            }}
                            inputProps={{maxLength: 50}}
                            sx={{
                                fontSize: '20px',
                                fontWeight: '700',
                                flexGrow: 4,
                            }}
                        />
                    )
                }}
            />
            {(!showAllEdit) && (
                <Box
                    className="title-icons"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Tooltip title="Add Checkpoint">
                        <IconButton 
                            size='small'
                            disabled={showNewPoint}
                            onClick={displayNewPoint}
                        >
                            <Add fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Options">
                        <IconButton 
                            onClick={handleClick}
                            size='small'
                        >
                            <MoreVert fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="checklist-options-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={showAllEditButtons} >
                            Edit Checklist
                        </MenuItem>
                        <MenuItem 
                            onClick={handleOpenAddToGroup}
                            sx={{
                                display: (groupId === '') ? 'block' : 'none'
                            }}
                        >
                            Add to Group
                        </MenuItem>
                        <MenuItem 
                            onClick={handleOpenMoveToGroup}
                            sx={{
                                display: (groupId === '') ? 'none' : 'block'
                            }}
                        >
                            Move to Different Group
                        </MenuItem>
                        <MenuItem
                            onClick={removeFromGroup}
                            sx={{
                                display: (groupId === '') ? 'none' : 'block'
                            }}
                        >
                            Remove From Group
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            sx={{
                                color: '#ef476f',
                            }}
                        >
                            Delete Checklist
                        </MenuItem>
                    </Menu>
                </Box>
            )}
            {showAllEdit && (
                <Button
                    size='small'
                    variant="contained"
                    onClick={unshowAllEditButtons}
                >
                    <Typography
                        variant='button'
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Finish 
                    </Typography>
                </Button>
            )}
        </Box>
    )
}

export default TitleSection;
