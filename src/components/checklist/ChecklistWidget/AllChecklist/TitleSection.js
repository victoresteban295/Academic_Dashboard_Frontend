import { Add, MoreVert } from "@mui/icons-material";
import { Alert, Box, Button, Divider, IconButton, InputBase, Menu, MenuItem, Snackbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import AddToGroupBackdrop from "./AddToGroupBackdrop";
import MoveToGroupBackdrop from "./MoveToGroupBackdrop";
import { reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/backend/backendChecklist";
import { handleChecklistTitle } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { removeListFromGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { removeChecklistFromGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import DeleteListBackdrop from "../../ChecklistsWidget/Backdrops/DeleteListBackdrop";
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
    displayNewPoint }) => {

    /* Checklist Title */
    const [newTitle, setNewTitle] = useState(title);

    //NOTE: Enables To Delete Checklist w/o Bug 
    const [isUpdating, setUpdating] = useState(false);

    /* Error Message Displaying in Alert */
    const [errorMsg, setErrorMsg] = useState('');
    /* Display Alert with Error Message */
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = (msg) => {
        setErrorMsg(msg);
        setOpenAlert(true);
    }
    const handleCloseAlert = () => {
        setErrorMsg('');
        setOpenAlert(false);
    }

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
    const modifyTitle = (event) => {
        if(newTitle.trim() != '') {
            setUpdating(false);
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
        } else {
            setNewTitle(title);
        } 
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
                justifyContent: 'space-between',
            }}
        >
            <Snackbar
                open={openAlert}
                anchorOrigin={{
                    vertical: 'top', 
                    horizontal: 'right',
                }}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity="error"
                    sx={{
                        width: '100%',
                        position: 'relative',
                        top: {xs: '0px', sm: '0px', md: '50px'},
                    }}
                >
                    {errorMsg}
                </Alert>
            </Snackbar> 
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
