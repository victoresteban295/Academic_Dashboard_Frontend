import { Delete } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

const DeleteListBackdrop = ({
    username, 
    title,
    open,
    handleClose,
    checklists,
    changechecklists, 
    groups, 
    changeGroups }) => {

    //Close Backdrop
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    //Delete Current Checklist
    const handleDeleteChecklist = () => {

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
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {`Delete ${title} Checklist?`}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant='contained'
                        startIcon={<Delete />}
                        color='#ef476f'
                    >
                        Delete
                    </Button>
                    <Button
                        variant='contained'
                    >
                        Cancel
                    </Button>
                </Box>
            </Stack>
        </Popover>

    )

}

export default DeleteListBackdrop;
