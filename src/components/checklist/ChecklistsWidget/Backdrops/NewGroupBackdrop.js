import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createGrouplist } from "@/lib/utils/checklist/backend/backendGrouplist";
import { createNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewGroupBackdrop = ({ 
    username,
    open, 
    handleClose, 
    groups,
    changeGroups, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //Title of New Group to Create
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Group 
    const handleNewGroup = async () => {
        const outdatedGroups = [...userGroups];
        try {
            handleCloseBackdrop();
            //Create New Group
            const {updatedGroups, groupId } = createNewGroup(groups, title);

            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            await createGrouplist(username, title, groupId);
            reloadChecklistpage();

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
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='New Group Title...'
                    onChange={(event) => setTitle(event.target.value)}
                    inputProps={{maxLength: 20}}
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
                        size='small'
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
