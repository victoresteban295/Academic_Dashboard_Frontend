import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { addNewChecklistToGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import { newChecklistToGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Dialog, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ListInGroupBackdrop = ({ 
    group,
    groupId,
    open, 
    handleClose, 
    groups,
    changeGroups, 
    handleActiveList, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //Title of New Checklist to Create Under Group
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Checklist Under Group 
    const handleNewListToGroup = async () => {
        const outdatedGroups = [...userGroups];
        const outdatedActiveList = localStorage.getItem("currentList");
        try {
            handleCloseBackdrop();
            //Create New Checklist Under Group
            const { updatedGroups, listId } = newChecklistToGroup(
                groups, 
                title, 
                groupId);

            //Set to Last Visited Checklist
            handleActiveList(listId);

            //Update State Value
            changeGroups(updatedGroups); 

            //Backend API: Update Database
            await addNewChecklistToGroup(listId, title, groupId);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(outdatedGroups);
            handleActiveList(outdatedActiveList);
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
                        align='center'
                        sx={{
                            flexGrow: 1,
                            align: 'center',
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        
                        {`Create New Checklist Under ${group} Group`}
                    </Typography>
                </Box>
                <FilledInput 
                    value={title}
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='New Checklist Title'
                    onChange={(event) => setTitle(event.target.value)}
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
                        disabled={title === ''}
                        onClick={handleNewListToGroup}
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

export default ListInGroupBackdrop;
