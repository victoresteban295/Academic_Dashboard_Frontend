import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { modifyGroupTitle } from "@/lib/utils/checklist/backend/backendGrouplist";
import { renameGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

const RenameGroupBackdrop = ({ 
    title,
    groupId,
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

    //New Title of Group Being Renamed
    const [rename, setRename] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setRename('');
    }

    /* Rename Group */
    const handleRenameGroup = async () => {
        handleCloseBackdrop();
        const outdatedGroups = [...userGroups];

        try {
            //Rename Group
            const updatedGroups = renameGroup(groups, rename, groupId);

            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            await modifyGroupTitle(groupId, rename);
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
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        {`Rename ${title} Group`}
                    </Typography>
                </Box>
                <FilledInput 
                    value={rename}
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='Rename Group Title...'
                    onChange={(event) => setRename(event.target.value)}
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
                        disabled={rename.trim() === ''}
                        onClick={handleRenameGroup}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        {"Rename"}
                    </Button>
                </Box>
            </Stack>
        </Dialog>
    ) 
}

export default RenameGroupBackdrop;
