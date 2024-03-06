import { createChecklist, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createNewChecklist } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewChecklistBackdrop = ({ 
    username,
    open, 
    handleClose, 
    checklists,
    changeChecklists, 
    handleActiveList, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }

    //Title of New Checklist to Create
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Checklist
    const handleNewChecklist = async () => {
        //Outdated Data to Revert Changes
        const outdatedLists = [...userChecklists];
        const outdatedListId = localStorage.getItem("currentList");

        try{
            handleCloseBackdrop();
            //Create New Checklist
            const { updatedLists, listId } = createNewChecklist(checklists, title);
            //Update State Value
            changeChecklists(updatedLists);
            //Set Checklist as Last Visited
            handleActiveList(listId);

            //Backend API: Update Database
            await createChecklist(username, title, listId);
            reloadChecklistpage();

        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeChecklists(outdatedLists);
            if(outdatedListId != null) {
                handleActiveList(outdatedListId);
            }
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
                        align='center'
                        sx={{
                            flexGrow: 1,
                            align: 'center',
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        Create New Checklist
                    </Typography>
                </Box>
                <FilledInput 
                    value={title}
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='New Checklist Title...'
                    onChange={(event) => setTitle(event.target.value)}
                    inputProps={{maxLength: 50}}
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
                        onClick={handleNewChecklist}
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

export default NewChecklistBackdrop;
