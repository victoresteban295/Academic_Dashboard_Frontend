import { createNewGroup } from "@/lib/utils/reminders/frontend/modifyGroups";
import { Box, Button, Dialog, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewGroupBackdrop = ({
    open,
    handleClose,
    groups,
    changeGroups,
    handleCurrentReminders,
    handleOpenAlert
}) => { 

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    /* Close Menu & Reset Options */
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    /* Title of New Group to Create */
    const [title, setTitle] = useState('');

    /* Create New Group */
    const handleNewGroup = () => {
        const outdatedGroups = [...userGroups];
        try {
            handleCloseBackdrop(); //Close & Reset Backdrop
            //Frontend: Create New Group
            const { updatedGroups, groupId } = createNewGroup(groups, title);
            
            //Update State Value
            changeGroups(updatedGroups);

            //Display New Group
            handleCurrentReminders(groupId);

            //Backend API: Update Database
            
        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(outdatedGroups); 
        }
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={1}
                sx={{
                    display: 'flex',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            flexGrow: 1,
                            align: 'center',
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        Create New Group 
                    </Typography>
                </Box>
                <FilledInput
                    value={title}
                    autoFocus={true}
                    hiddenLabel
                    disableUnderline
                    placeholder='Create Title...'
                    onChange={(event) => setTitle(event.target.value)}
                    inputProps={{maxLength: 25}}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        variant="text"
                        disabled={title.trim() === ''}
                        onClick={handleNewGroup}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        {"Create"}
                    </Button>
                </Box>
            </Stack>
        </Dialog>
    )
}

export default NewGroupBackdrop;
