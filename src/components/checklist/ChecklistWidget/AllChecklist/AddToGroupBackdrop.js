import { Box, Button, Divider, FormControl, FormControlLabel, InputBase, Popover, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

const AddToGroupBackdrop = ({ 
    username,
    listId,
    open, 
    handleClose, 
    groups, 
    addToExistingGroup, 
    addToNewGroup }) => {

    const [selectedGroupId, setSelectedGroupId] = useState('');
    const [newGroup, setNewGroup] = useState('');
    const handleSelect = (event) => {
        setSelectedGroupId(event.target.value);
    }

    const handleCloseBackdrop = () => {
        handleClose();
        setSelectedGroupId('');
        setNewGroup('');
    }

    const addToGroup = () => {
        handleClose(); //Close Backdrop Menu
        //Selected New Group
        if(selectedGroupId === 'new') { 
            //Ensure User's Input Isn't Just Empty Spaces
            if(newGroup.trim() != "") {
                addToNewGroup(listId, newGroup); 
            //If so, Do Nothing & Reset Input
            } else {
                setNewGroup('');
                setSelectedGroupId('');
            }
        //Selected Existing Group
        } else { 
            addToExistingGroup(listId, selectedGroupId);
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
