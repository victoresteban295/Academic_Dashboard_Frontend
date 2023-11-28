import { Cancel, Delete, Warning } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

const WarnDeleteBackdrop = ({
    username, 
    groupId,
    open,
    handleClose,
    groups, 
    changeGroups, 
    handleActiveList }) => {

    //Close Backdrop
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    //Delete Current Checklist
    const handleDeleteChecklist = () => {
        handleClose(); //Close Backdrop

        //Update State Value

        //Backend API: Update Database
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
                    className="warning-message-container"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Warning 
                        color='error'
                        fontSize='large'
                    />
                    <Typography
                        variant='body2'
                        align='center'
                    >
                        {`The current checklist you're viewing will be deleted if ${title} 
                        group is delted!`}
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
                        onClick={handleDeleteChecklist}
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
