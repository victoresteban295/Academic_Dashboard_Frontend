import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { addChecklistToGroup, createGrouplist } from "@/lib/utils/checklist/backend/backendGrouplist";
import { addToExistingGroup, addToNewGroup, removeListFromGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Divider, FormControl, FormControlLabel, InputBase, Popover, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

const AddToGroupBackdrop = ({ 
    username,
    listId,
    open, 
    handleClose, 
    groups, 
    changeGroups,
    checklists,
    changeChecklists, 
    handleOpenAlert }) => {

    //GroupId of Selected Group
    const [selectedGroupId, setSelectedGroupId] = useState('');
    //Title of New Group to Create
    const [newGroup, setNewGroup] = useState('');
    //Selected Item in Menu (groupId)
    const handleSelect = (event) => {
        setSelectedGroupId(event.target.value);
    }

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose();
        setSelectedGroupId('');
        setNewGroup('');
    }

    //Add (Non-Grouped) Checklist to Group
    const addToGroup = async () => {
        handleClose(); //Close Backdrop Menu
        let updatedLists;
        let updatedGroups;
        let groupId;

        const outdatedLists = [...checklists];
        const outdatedGroups = [...groups];

        //Selected New Group
        if(selectedGroupId === 'new') { 
            //Ensure User's Input Isn't Just Empty Spaces
            if(newGroup.trim() != "") {
                try {
                    //Add Checklist To New Group
                    const update = addToNewGroup(
                        checklists, 
                        groups, 
                        listId, 
                        newGroup); 
                    
                    updatedLists = update.updatedLists;
                    updatedGroups = update.updatedGroups;
                    groupId = update.groupId;

                    //Update State Value
                    changeChecklists(updatedLists);
                    changeGroups(updatedGroups);

                    //Backend API: Update Database
                    const { groupId: newGroupId } = await createGrouplist(username, newGroup, groupId);
                    await addChecklistToGroup(username, listId, newGroupId);
                    reloadChecklistpage();

                } catch(error) {
                    handleOpenAlert(error.message);

                    //Revert Changes Made
                    changeChecklists(outdatedLists);
                    changeGroups(outdatedGroups);
                }
            //If so, Do Nothing & Reset Input
            } else {
                setNewGroup('');
                setSelectedGroupId('');
            }
        //Selected Existing Group
        } else { 
            try {
                //Add Checklist to Existing Group
                const update = addToExistingGroup(
                    checklists, 
                    groups, 
                    listId, 
                    selectedGroupId);

                updatedLists = update.updatedLists;
                updatedGroups = update.updatedGroups;

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await addChecklistToGroup(username, listId, selectedGroupId);
                reloadChecklistpage();

            } catch(error) {
                handleOpenAlert(error.message);
                
                if(updatedGroups != null) {
                    const { updatedGroups } = removeListFromGroup(
                        checklists, 
                        groups, 
                        listId, 
                        selectedGroupId);

                    //Revert Changes Made
                    changeChecklists(outdatedLists);
                    changeGroups(updatedGroups);
                }
            }
        }
    }

    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{ 
                mt: 10,
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            flexGrow: 1,
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        Add Checklist to Group
                    </Typography>
                </Box>
                <Stack
                    spacing={1}
                    sx={{
                        width: '250px',
                    }}
                >
                    <FormControl>
                        <RadioGroup
                            value={selectedGroupId}
                            onChange={handleSelect}
                        >
                            <Stack
                                spacing={0.25}
                                divider={<Divider variant='middle' />}
                            >
                                {groups.map((group) => {
                                    const { groupId, title } = group;
                                    return (
                                        <FormControlLabel 
                                            key={groupId}
                                            value={groupId} 
                                            control={<Radio />} 
                                            label={title} 
                                        />
                                    )
                                })}
                                <FormControlLabel 
                                    value={'new'} 
                                    control={<Radio />} 
                                    label={
                                        <InputBase  
                                            value={newGroup}
                                            inputProps={{maxLength: 20}}
                                            disabled={!("new" === selectedGroupId)}
                                            placeholder='Create New Group'
                                            onChange={(event) => setNewGroup(event.target.value)}
                                        />
                                    } 
                                />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <Box>
                        <Button
                            variant="contained"
                            size='small'
                            disabled={(selectedGroupId === '') || ((selectedGroupId === 'new') && (newGroup === ''))}
                            onClick={addToGroup}
                        >
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}
                            >
                                Add
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Popover>
    ) 
}

export default AddToGroupBackdrop;
