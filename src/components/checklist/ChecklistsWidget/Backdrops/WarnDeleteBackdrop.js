import { Clear, Delete, WarningTwoTone } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, Typography } from "@mui/material";

const WarnDeleteBackdrop = ({
    title,
    open,
    handleClose,
    handleDeleteGroup }) => {

    //Close Backdrop
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    //Delete Group 
    const deleteGroup = () => {
        handleClose(); //Close Backdrop
        handleDeleteGroup(); 
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
                    display: 'flex',
                    p: 2,
                }}
            >
                <Box
                    className="warning-message-container"
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            fold: 'column',
                            mobile: 'column',
                            tablet: 'row',
                            desktop: 'row',
                        },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <WarningTwoTone 
                        color='error'
                        sx={{
                            width: '50px',
                            height: '50px',
                            mb: {
                                fold: 1,
                                mobile: 1,
                                tablet: 0,
                                desktop: 0,
                            }
                        }}
                    />
                    <Typography
                        variant='body1'
                        align='center'
                        sx={{
                            mx: 1,
                        }}
                    >
                        {`The current checklist you're viewing will be deleted if ${title} 
                        group is deleted!`}
                    </Typography>
                </Box>
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

export default WarnDeleteBackdrop;
