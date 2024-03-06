import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createGrouplist, moveChecklistGroupToGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import { deleteGroup, moveListGroupToGroup, moveListGroupToNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Dialog, Divider, FormControl, FormControlLabel, InputBase, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MoveToGroupBackdrop = ({ 
    username, 
    listId, 
    fromGroupId,
    open, 
    handleClose, 
    groups, 
    changeGroups, 
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

    //Move (Grouped) Checklist to Different Group
    const MoveToGroup = async () => {
        handleClose(); //Close Menu
        let updatedGroups;
        let groupId;

        //Selected New Group
        if(selectedGroupId === 'new') {
            //Ensure User's Input Isn't Just Empty Spaces
            if(newGroup.trim() != "") {
                try {
                    const update = moveListGroupToNewGroup(
                        groups,
                        listId, 
                        fromGroupId, 
                        newGroup);

                    updatedGroups = update.updatedGroups;
                    groupId = update.groupId;

                    //Update State Value
                    changeGroups(updatedGroups);

                    //Backend API: Update Database
                    const { groupId: toGroupId } = await createGrouplist(username, newGroup, groupId);
                    await moveChecklistGroupToGroup(listId, toGroupId); 
                    reloadChecklistpage();

                } catch(error) {
                    handleOpenAlert(error.message);
                    
                    //Move Checklist Back to Old Group
                    const update = moveListGroupToGroup(
                        updatedGroups, 
                        listId, 
                        groupId, 
                        fromGroupId);

                    //Delete Newly Created Group
                    const outdatedGroups = deleteGroup(update.updatedGroups, groupId);

                    //Revert Changes Made
                    changeGroups(outdatedGroups);
                }
            } 
        } else {
            try{
                //Move to Different Group
                const update = moveListGroupToGroup(
                    groups, 
                    listId, 
                    fromGroupId, 
                    selectedGroupId); 
                
                updatedGroups = update.updatedGroups;

                //Update State Value
                changeGroups(updatedGroups);

                //Backend API: Update Database
                await moveChecklistGroupToGroup(listId, selectedGroupId); //Move to Different Group
                reloadChecklistpage();
            } catch(error) {
                handleOpenAlert(error.message);

                if(updatedGroups != null) {
                    const reverse = moveListGroupToGroup(
                        updatedGroups, 
                        listId, 
                        selectedGroupId, 
                        fromGroupId);

                    changeGroups(reverse.updatedGroups);
                }
            }
        }

        //Reset Options
        setNewGroup('');
        setSelectedGroupId('');
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={2}
                sx={{
                    p: 2,
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
                    Move Checklist to Different Group
                </Typography>
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
                                if(fromGroupId != groupId) {
                                    return (
                                        <FormControlLabel 
                                            key={groupId}
                                            value={groupId} 
                                            control={<Radio />} 
                                            label={title} 
                                        />
                                    )
                                }
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="text"
                        size='small'
                        disabled={(selectedGroupId === '') || ((selectedGroupId === 'new') && (newGroup.trim() === ''))}
                        onClick={MoveToGroup}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        {"Move"}
                    </Button>
                </Box>
            </Stack>
        </Dialog>
    )
}

export default MoveToGroupBackdrop;
