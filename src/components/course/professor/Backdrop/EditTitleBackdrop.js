import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

const EditTitleBackdrop = ({
    open,
    handleClose,
    title,
    changeTitle
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
    }

    /* New Title of Course */
    const [rename, setRename] = useState(title);

    /* Rename Course */
    const handleRenameCourse = () => {
        changeTitle(rename);
        handleCloseBackdrop();
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
                        Rename Course
                    </Typography>
                </Box>
                <FilledInput
                    value={rename}
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='New Course Title'
                    onChange={(event) => setRename(event.target.value)}
                    inputProps={{maxLength: 100}}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        variant="text"
                        disabled={rename.trim() === ''}
                        onClick={handleRenameCourse}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        {"Rename"}
                    </Button>
                </Box>
            </Stack>
        </Dialog>
    )
}

export default EditTitleBackdrop;
