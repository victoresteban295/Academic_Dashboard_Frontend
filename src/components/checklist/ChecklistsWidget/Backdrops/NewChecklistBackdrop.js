import { createChecklist, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { createNewChecklist } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { Box, Button, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewChecklistBackdrop = ({ 
    username,
    open, 
    handleClose, 
    checklists,
    changeChecklists }) => {

    //Title of New Checklist to Create
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Checklist
    const handleNewChecklist = () => {
        handleCloseBackdrop();

        //Create New Checklist
        const { updatedLists, listId } = createNewChecklist(checklists, title);
        //Update State Value
        changeChecklists(updatedLists);

        //Backend API: Update Database
        createChecklist(username, title, listId);
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
                        Create New Checklist
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
                        onClick={handleNewChecklist}
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

export default NewChecklistBackdrop;
