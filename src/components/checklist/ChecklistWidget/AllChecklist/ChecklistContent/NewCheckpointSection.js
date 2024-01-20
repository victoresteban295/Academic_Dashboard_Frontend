import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createNewCheckpoint } from "@/lib/utils/checklist/frontend/modifyCheckpoint";
import { addSubpoint } from "@/lib/utils/checklist/frontend/modifySubpoint";
import { CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
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
    isSubpoint, 
    handleOpenAlert }) => {

    //New Checkpoint
    const [newPoint, setNewPoint] = useState('');

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //Create New Checkpoint || Subpoint
    const createNewPoint = async () => {
        setNewPoint('');
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
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
                await modifyCheckpoints(listId, updatedPoints, completedPoints);
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeChecklists(outdatedLists);
                changeGroups(outdatedGroups);
                hideNewPoint();
            }
        } else {
            hideNewPoint();
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
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
