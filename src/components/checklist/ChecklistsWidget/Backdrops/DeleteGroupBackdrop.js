import { Clear, Delete } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, Typography } from "@mui/material";

const DeleteGroupBackdrop = ({
    title,
    checklists,
    open,
    handleClose,
    handleOpenWarnDelete,
    handleDeleteGroup,
    activeList }) => {
    
    let listIds = [];
    checklists.map(checklist => {
        listIds.push(checklist.listId);
    })

    //Close Backdrop
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    //Delete Group
    const deleteGroup = () => {
        handleClose(); //Close Backdrop
        //Display Warning | Deleting Active Checklist
        if(listIds.includes(activeList)) {
            //Display Warning: Deleting Active List
            handleOpenWarnDelete();
        } else {
            handleDeleteGroup();
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
                spacing={2}
                sx={{
                    p: 2,
                }}
            >
                <Stack
                    spacing={0.5}
                    sx={{
                        p: 0,
                    }}
                >
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {`Delete ${title} Group?`}
                    </Typography>
                    <Box
                        sx={{
                            px: 2,
                        }}
                    >
                        <Typography
                            align="center"
                            variant="body1"
                        >
                            All checklists under this group will be deleted!
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'flex',
                            tablet: 'flex',
                            desktop: 'flex',
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        color="error"
                        onClick={deleteGroup}
                        variant="text"
                        startIcon={<Delete />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'error.light'
                        }}
                    >
                        Delete
                    </Button> 
                    <Button
                        variant="text"
                        onClick={handleCloseBackdrop}
                        startIcon={<Clear />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light'
                        }}
                    >
                        Cancel
                    </Button> 
                </Box>
                <Box
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'none',
                            tablet: 'none',
                            desktop: 'none',
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        size="small"
                        onClick={deleteGroup}
                        color="error"
                        variant="text"
                        startIcon={<Delete />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'error.light'
                        }}
                    >
                        Delete
                    </Button> 
                    <Button
                        onClick={handleCloseBackdrop}
                        size="small"
                        variant="text"
                        startIcon={<Clear />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light'
                        }}
                    >
                        Cancel
                    </Button> 
                </Box>
            </Stack>
        </Dialog>

    )

}

export default DeleteGroupBackdrop;
