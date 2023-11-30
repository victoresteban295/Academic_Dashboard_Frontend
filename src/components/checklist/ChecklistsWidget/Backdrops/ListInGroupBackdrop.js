import { reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { addNewChecklistToGroup } from "@/lib/utils/checklist/backend/backendGrouplist";
import { newChecklistToGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ListInGroupBackdrop = ({ 
    username,
    group,
    groupId,
    open, 
    handleClose, 
    groups,
    changeGroups }) => {

    //Title of New Checklist to Create Under Group
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Checklist Under Group 
    const handleNewGroup = () => {
        handleCloseBackdrop();

        //Create New Checklist Under Group
        const { updatedGroups, listId } = newChecklistToGroup(
            groups, 
            title, 
            groupId);

        //Update State Value
        changeGroups(updatedGroups); 

        //Backend API: Update Database
        addNewChecklistToGroup(username, listId, title, groupId);
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
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={1}
                sx={{
                    display: 'flex',
                    p: 2,
                    maxWidth:'300px'
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

export default ListInGroupBackdrop;
