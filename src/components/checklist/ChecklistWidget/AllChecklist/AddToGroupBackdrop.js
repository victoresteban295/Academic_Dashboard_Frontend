import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { addChecklistToGroup, createGrouplist } from "@/lib/utils/checklist/backend/backendGrouplist";
import { addToExistingGroup, addToNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
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
    changeChecklists }) => {

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
        //Selected New Group
        if(selectedGroupId === 'new') { 
            //Ensure User's Input Isn't Just Empty Spaces
            if(newGroup.trim() != "") {
                //Add Checklist To New Group
                const { updatedLists, updatedGroups, groupId } = addToNewGroup(
                    checklists, 
                    groups, 
                    listId, 
                    newGroup); 

                //Update State Value
                changeChecklists(updatedLists);
                changeGroups(updatedGroups);

                //Backend API: Update Database
                const { groupId: newGroupId } = await createGrouplist(username, newGroup, groupId);
                addChecklistToGroup(username, listId, newGroupId);
                reloadChecklistpage();
            //If so, Do Nothing & Reset Input
            } else {
                setNewGroup('');
                setSelectedGroupId('');
            }
        //Selected Existing Group
        } else { 
            //Add Checklist to Existing Group
            const { updatedLists, updatedGroups } = addToExistingGroup(
                checklists, 
                groups, 
                listId, 
                selectedGroupId);

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            addChecklistToGroup(username, listId, selectedGroupId);
            reloadChecklistpage();
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
                                        <FormControlLabel value={groupId} control={<Radio />} label={title} />
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
