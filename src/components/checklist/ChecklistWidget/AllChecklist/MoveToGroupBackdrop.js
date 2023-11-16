import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createGrouplist, moveChecklistGroupToGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import { moveListGroupToGroup, moveListGroupToNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Divider, FormControl, FormControlLabel, InputBase, Popover, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

const MoveToGroupBackdrop = ({ 
    username, 
    listId, 
    fromGroupId,
    open, 
    handleClose, 
    groups, 
    changeGroups }) => {

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
        //Selected New Group
        if(selectedGroupId === 'new') {
            //Ensure User's Input Isn't Just Empty Spaces
            if(newGroup.trim() != "") {
                const { updatedGroups } = moveListGroupToNewGroup(
                    groups,
                    listId, 
                    fromGroupId, 
                    newGroup);

                //Update State Value
                changeGroups(updatedGroups);

                //Backend API: Update Database
                const { groupId: toGroupId } = await createGrouplist(username, newGroup);
                moveChecklistGroupToGroup(username, listId, fromGroupId, toGroupId); 
                reloadChecklistpage();
            } 
        } else {
            //Move to Different Group
            const { updatedGroups } = moveListGroupToGroup(
                groups, 
                listId, 
                fromGroupId, 
                selectedGroupId); 

            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            moveChecklistGroupToGroup(username, listId, fromGroupId, selectedGroupId); //Move to Different Group
            reloadChecklistpage();
        }

        //Reset Options
        setNewGroup('');
        setSelectedGroupId('');
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
                        Move Checklist to Different Group
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
                                    if(fromGroupId != groupId) {
                                        return (
                                            <FormControlLabel value={groupId} control={<Radio />} label={title} />
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
                    <Box>
                        <Button
                            variant="contained"
                            size='small'
                            disabled={(selectedGroupId === '') || ((selectedGroupId === 'new') && (newGroup === ''))}
                            onClick={MoveToGroup}
                        >
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}
                            >
                                Move 
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Popover>
    )
}

export default MoveToGroupBackdrop;
