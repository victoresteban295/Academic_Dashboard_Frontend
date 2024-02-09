import { Cancel, Delete } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

const DeleteGroupBackdrop = ({
    title,
    reminders,
    open,
    handleClose,
    handleOpenWarnDelete,
    handleDeleteGroup
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    /* Delete Current Group */
    const deleteGroup = () => {
        handleClose(); //Close Backdrop

        //Delete if Group has No Reminders
        if(reminders.length === 0 ) {
            handleDeleteGroup(); //Delete Group
        //Display Warning if Group Has Reminders to Complete
        } else {
            //Display Warning Backdrop
            handleOpenWarnDelete();
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
                    width: '250px',
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant='contained'
                        onClick={deleteGroup}
                        startIcon={<Delete sx={{color: '#000'}} />}
                        color='error'
                        sx={{
                            px: 1,
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
                            px: 1,
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
