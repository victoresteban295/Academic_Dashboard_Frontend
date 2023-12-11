import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createNewCheckpoint } from "@/lib/utils/checklist/frontend/modifyCheckpoint";
import { addSubpoint } from "@/lib/utils/checklist/frontend/modifySubpoint";
import { CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import { Alert, Box, IconButton, InputBase, Snackbar } from "@mui/material";
import { useState } from "react";

const NewCheckpointSection = ({ 
    username,
    listId,
    groupId,
    index,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    hideNewPoint, 
    isSubpoint }) => {

    //New Checkpoint
    const [newPoint, setNewPoint] = useState('');

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

    //Create New Checkpoint || Subpoint
    const createNewPoint = () => {
        let updatedLists, updatedGroups, updatedPoints, completedPoints;
        //Ensure User Input Isn't Blank
        const checkpoint = newPoint.trim();
        if(checkpoint != '') {
            try {
                //Creating a New Checkpoint 
                if(!isSubpoint) {
                    //Create New Checkpoint 
                    const updates = createNewCheckpoint(
                            checklists, 
                            groups, 
                            listId, 
                            groupId, 
                            checkpoint);

                    updatedLists = updates.updatedLists;
                    updatedGroups = updates.updatedGroups;
                    updatedPoints = updates.updatedPoints;
                    completedPoints = updates.completedPoints;

                //Creating a New Subpoint
                } else {
                    //Create New Subpoint
                    const updates = addSubpoint(
                        checklists, 
                        groups, 
                        listId, 
                        groupId, 
                        index, 
                        checkpoint);

                    updatedLists = updates.updatedLists;
                    updatedGroups = updates.updatedGroups;
                    updatedPoints = updates.updatedPoints;
                    completedPoints = updates.completedPoints;

                }

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Updated Database
                modifyCheckpoints(username, listId, updatedPoints, completedPoints);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);
            }
        } else {
            hideNewPoint();
        }
        setNewPoint('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
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
            <IconButton size='large'>
                <CheckBoxOutlineBlank fontSize='inherit' />
            </IconButton>
            <InputBase
                value={newPoint}
                autoFocus={true}
                placeholder={isSubpoint ? "Create New Subpoint" : "Create New Checkpoint"}
                onChange={(e) => setNewPoint(e.target.value)}
                onBlur={() => {
                    createNewPoint();
                    hideNewPoint();
                }}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        createNewPoint();
                    }
                }}
                inputProps={{maxLength: 200}}
                sx={{
                    flexGrow: 1,
                }}
            />
            {newPoint.trim() === '' && (
                <IconButton 
                    onClick={hideNewPoint}
                    size='small'
                >
                    <Close fontSize='inherit' />
                </IconButton>
            )}
        </Box>
    )
}

export default NewCheckpointSection;
