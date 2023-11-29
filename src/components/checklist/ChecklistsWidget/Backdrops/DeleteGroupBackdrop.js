import { Cancel, Delete } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

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
                <Typography
                    variant='h6'
                    align='center'
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {`Delete ${title} Group?`}
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                >
                    All checklists under this group will be deleted!
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant='contained'
                        startIcon={<Delete sx={{color: '#000'}} />}
                        onClick={deleteGroup}
                        color='error'
                        sx={{
                            mx: 1,
                        }}
                    >
                        <Typography
                            variant='button'
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                        >
                            Delete
                        </Typography>
                    </Button>
                    <Button
                        variant='contained'
                        startIcon={<Cancel sx={{color: '#000'}} />}
                        onClick={handleCloseBackdrop}
                        sx={{
                            mx: 1,
                        }}
                    >
                        <Typography
                            variant='button'
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                        >
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </Stack>
        </Popover>

    )

}

export default DeleteGroupBackdrop;
