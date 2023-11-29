import { Cancel, Delete, WarningTwoTone } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

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
                spacing={2}
                sx={{
                    display: 'flex',
                    p: 2,
                    maxWidth: '350px',
                }}
            >
                <Box
                    className="warning-message-container"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <WarningTwoTone 
                        color='error'
                        sx={{
                            width: '50px',
                            height: '50px',
                            mb: {xs: 1, sm: 0}
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
                    className="buttons-container"
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

export default WarnDeleteBackdrop;
