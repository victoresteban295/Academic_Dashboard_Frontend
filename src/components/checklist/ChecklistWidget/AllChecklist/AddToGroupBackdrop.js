import { reloadChecklistpage } from "@/lib/utils/checklist/modifyChecklist";
import { addChecklistToGroup } from "@/lib/utils/checklist/modifyGrouplist";
import { Close } from "@mui/icons-material";
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, IconButton, InputBase, Popover, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddToGroupBackdrop = ({ 
    username,
    listId,
    open, 
    handleOpen, 
    handleClose, 
    grouplists }) => {

    const [selectedGroupId, setSelectedGroupId] = useState('');
    const [newGroup, setNewGroup] = useState('');
    const handleChange = (event) => {
        setSelectedGroupId(event.target.value);
    }
    const addToGroup = () => {
        if(selectedGroupId === 'new') {
            //Call Create New Group & Get it's GroupId
            setSelectedGroupId(newGroup);
        }
        console.log(selectedGroupId);
        /* addChecklistToGroup(username, listId, selectedGroupId); */
        handleClose();
        reloadChecklistpage();
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
            onClose={handleClose}
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
                            onChange={handleChange}
                        >
                            <Stack
                                spacing={0.25}
                                divider={<Divider variant='middle' />}
                            >
                                {grouplists.map((grouplist) => {
                                    const { groupId, title } = grouplist;
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
                            disabled={(selectedGroupId === '')}
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
