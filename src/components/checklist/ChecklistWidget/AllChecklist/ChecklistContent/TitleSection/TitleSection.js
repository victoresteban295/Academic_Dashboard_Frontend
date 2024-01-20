import { Add, MoreVert } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, InputBase, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/backend/backendChecklist";
import { handleChecklistTitle } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { addToExistingGroup, removeListFromGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { removeChecklistFromGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import AddToGroupBackdrop from "../Backdrop/AddToGroupBackdrop";
import MoveToGroupBackdrop from "../Backdrop/MoveToGroupBackdrop";
import DeleteListBackdrop from "@/components/checklist/ChecklistsWidget/Backdrops/DeleteListBackdrop";
import MyChecklistMenu from "./MyChecklistMenu";

const TitleSection = ({ 
    username,
    listId,
    title, 
    groupId,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    activeList,
    handleActiveList,
    showAllEdit,
    showAllEditButtons, 
    unshowAllEditButtons, 
    showNewPoint, 
    displayNewPoint, 
    handleOpenAlert }) => {

    /* Checklist Title */
    const [newTitle, setNewTitle] = useState(title);

    //NOTE: Enables To Delete Checklist w/o Bug 
    const [isUpdating, setUpdating] = useState(false);

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

    /* Backdrop Menu State Value & Function */
    /* Create New Checklist */
    const [openDeleteList, setOpenDeleteList] = useState(false);
    const handleOpenDeleteList = () => {
        setOpenDeleteList(true);
    }
    const handleCloseDeleteList = () => {
        setOpenDeleteList(false);
    }

    //Rename Checklist
    const modifyTitle = async (event) => {
        const oldTitle = title;
        try {
            if(newTitle.trim() != '') {
                setUpdating(false);
                //Modify Checklist's Title
                const newTitle = event.target.value; //New Checklist's Title
                const { updatedLists, updatedGroups} = handleChecklistTitle(
                    checklists, 
                    groups, 
                    groupId, 
                    listId, 
                    newTitle);

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await renameCheclistTitle(listId, newTitle);
                reloadChecklistpage();
            } else {
                setNewTitle(title);
            } 
        } catch(error) {
            handleOpenAlert(error.message);

            //Revert Changes Made
            const { updatedLists, updatedGroups} = handleChecklistTitle(
                checklists, 
                groups, 
                groupId, 
                listId, 
                oldTitle);
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);
        }
    }
    
    // Remove Checklist From Current Group
    const removeFromGroup = async () => {
        handleClose();
        let updatedLists;
        let updatedGroups;

        try{
            //Remove (Grouped) Checklist to Non-Grouped Checklists 
            const update = removeListFromGroup(
                checklists, 
                groups, 
                listId, 
                groupId);

            updatedLists = update.updatedLists;
            updatedGroups = update.updatedGroups;

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            await removeChecklistFromGroup(username, listId, groupId);
            reloadChecklistpage();

        } catch(error) {
            handleOpenAlert(error.message); 

            if(updatedLists != null) {
                //Revert Changes Made
                const revert = addToExistingGroup(
                    updatedLists, 
                    updatedGroups, 
                    listId, 
                    groupId);

                changeChecklists(revert.updatedLists);
                changeGroups(revert.updatedGroups);
            }
        }
    }

    return (
        <Box
            className="checklist-title-section"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
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
                handleOpenAlert={handleOpenAlert}
            />
            <MoveToGroupBackdrop 
                username={username}
                listId={listId}
                fromGroupId={groupId}
                open={openMoveToGroup}
                handleClose={handleCloseMoveToGroup}
                groups={groups}
                changeGroups={changeGroups}
                handleOpenAlert={handleOpenAlert}
            />
            <DeleteListBackdrop 
                username={username}
                groupId={groupId}
                listId={listId}
                title={title}
                open={openDeleteList}
                handleClose={handleCloseDeleteList}
                checklists={checklists}
                changeChecklists={changeChecklists}
                groups={groups}
                changeGroups={changeGroups}
                handleActiveList={handleActiveList}
                handleOpenAlert={handleOpenAlert}
            />
            <InputBase
                value={isUpdating ? newTitle : title}
                placeholder="Add Checklist Title"
                onChange={(e) =>{
                    setUpdating(true);
                    setNewTitle(e.target.value)
                }}
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
            {(!showAllEdit) && (
                <Box
                    className="title-icons"
                    sx={{
                        display: 'flex',
                        ml: 2,
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
                    <MyChecklistMenu 
                        username={username}
                        checklists={checklists}
                        changeChecklists={changeChecklists}
                        groups={groups}
                        changeGroups={changeGroups}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        handleOpenAlert={handleOpenAlert}
                    />
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
                            Edit Checkpoints
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
                            onClick={handleOpenDeleteList}
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
