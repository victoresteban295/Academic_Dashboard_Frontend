import { Cancel, Clear, Delete } from "@mui/icons-material";
import { Box, Button, Dialog, Popover, Stack, Typography } from "@mui/material";

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
                <Typography
                    variant='body1'
                    align='center'
                    sx={{
                    }}
                >
                    {`Are You Sure You Want to Delete?`}
                </Typography>
                <Typography
                    variant='h6'
                    align='center'
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {`${title}`}
                </Typography>
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
