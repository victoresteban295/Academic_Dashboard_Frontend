import { ChecklistTitleSchema } from "@/lib/schemas/checklistSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, MoreVert } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, InputBase, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AddToGroupBackdrop from "./AddToGroupBackdrop";
import MoveToGroupBackdrop from "./MoveToGroupBackdrop";
import { reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/backend/backendChecklist";
import { handleChecklistTitle } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { removeListFromGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { removeChecklistFromGroup } from "@/lib/utils/checklist/backend/backendGrouplist";

const TitleSection = ({ 
    username,
    listId,
    title, 
    groupId,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
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

    /* Options Menu's State Value & Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    /* Backdrop Menu State Value & Function */
    /* Add Checklst to Group */
    const [openAddToGroup, setOpenAddToGroup] = useState(false);
    const handleOpenAddToGroup = () => {
        setOpenAddToGroup(true);
    }
    const handleCloseAddToGroup = () => {
        setOpenAddToGroup(false);
    }

    /* Backdrop Menu State Value & Function */
    /* Move From Group to Group */
    const [openMoveToGroup, setOpenMoveToGroup] = useState(false);
    const handleOpenMoveToGroup = () => {
        setOpenMoveToGroup(true);
    }
    const handleCloseMoveToGroup = () => {
        setOpenMoveToGroup(false);
    }

    //Rename Checklist
    const modifyTitle = (event) => {
        //Modify Checklist's Title
        const newTitle = event.target.value; //New Checklist's Title
        const {updatedLists, updatedGroups} = handleChecklistTitle(
            checklists, 
            groups, 
            groupId, 
            listId, 
            newTitle);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        renameCheclistTitle(username, listId, newTitle);
        reloadChecklistpage();
    }
    
    // Remove Checklist From Current Group
    const removeFromGroup = () => {
        handleClose();
        //Remove (Grouped) Checklist to Non-Grouped Checklists 
        const { updatedLists, updatedGroups } = removeListFromGroup(
            checklists, 
            groups, 
            listId, 
            groupId);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        removeChecklistFromGroup(username, listId, groupId);
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
                groups={groups}
                changeGroups={changeGroups}
                checklists={checklists}
                changeChecklists={changeChecklists}
            />
            <MoveToGroupBackdrop 
                username={username}
                listId={listId}
                fromGroupId={groupId}
                open={openMoveToGroup}
                handleClose={handleCloseMoveToGroup}
                groups={groups}
                changeGroups={changeGroups}
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
                            onBlur={modifyTitle}
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
