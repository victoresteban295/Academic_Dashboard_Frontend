import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createGrouplist } from "@/lib/utils/checklist/backend/backendGrouplist";
import { createNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewGroupBackdrop = ({ 
    username,
    open, 
    handleClose, 
    groups,
    changeGroups, 
    handleOpenAlert }) => {

    //Title of New Group to Create
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Group 
    const handleNewGroup = () => {
        try {
            handleCloseBackdrop();
            //Create New Group
            const {updatedGroups, groupId } = createNewGroup(groups, title);

            //Update State Value
            changeGroups(updatedGroups);

            //Backend API: Update Database
            createGrouplist(username, title, groupId);
            reloadChecklistpage();

        } catch(error) {
            handleOpenAlert(error.message);
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
                    placeholder='New Group Title'
                    onChange={(event) => setTitle(event.target.value)}
                    inputProps={{maxLength: 20}}
                />
                <Box>
                    <Button
                        variant="contained"
                        size='small'
                        disabled={title === ''}
                        onClick={handleNewGroup}
                    >
                        <Typography
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                        >
                            Create
                        </Typography>
                    </Button>
                </Box>
            </Stack>
        </Popover>
    ) 
}

export default NewGroupBackdrop;
