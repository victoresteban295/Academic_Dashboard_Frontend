import { Clear, Delete } from "@mui/icons-material";
import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

const FinalDeleteCourseBackdrop = ({ 
    open, 
    handleClose, 
    title,
    handleOpenAlert 
}) => {
    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        setDeleteTitle("");
    }

    const [deleteTitle, setDeleteTitle] = useState("");

    /* Warn Demo Backdrop */
    const [openWarnDemo, setOpenWarnDemo] = useState(false);
    const handleOpenWarnDemo = () => {
        setOpenWarnDemo(true);
        setTimeout(() => {
            handleCloseWarnDemo();
            handleCloseBackdrop();
        }, "5000");
    }
    const handleCloseWarnDemo = () => {
        setOpenWarnDemo(false);
    }


    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Dialog
                fullWidth={true}
                maxWidth="mobile"
                open={openWarnDemo}
            >
                <Box
                    sx={{
                        p: 2,
                    }}
                >
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Deleting a Course Feature is not available for Demo!"}
                    </Typography>
                </Box>
            </Dialog>
            <Stack
                spacing={2}
                sx={{
                    p: 2,
                }}
            >
                <Stack
                    spacing={2}
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
                        {"Type the Course's Title as it Appears Below to Delete"}
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
                            {title}
                        </Typography>
                    </Box>
                    <FilledInput
                        value={deleteTitle}
                        fullWidth
                        hiddenLabel
                        disableUnderline
                        placeholder='Type Here to Delete....'
                        onChange={(event) => setDeleteTitle(event.target.value)}
                    />
                </Stack>


                <Box
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'flex',
                            tablet: 'flex',
                            desktop: 'flex',
                        },
                        justifyContent: deleteTitle != title ? 'flex-end' : 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {deleteTitle === title && (
                        <Button
                            color="error"
                            onClick={handleOpenWarnDemo}
                            variant="text"
                            disabled={deleteTitle != title}
                            startIcon={<Delete />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'error.light'
                            }}
                        >
                            Delete
                        </Button> 
                    )}
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
                        justifyContent: deleteTitle != title ? 'flex-end' : 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {deleteTitle === title && (
                        <Button
                            size="small"
                            onClick={handleOpenWarnDemo}
                            disabled={deleteTitle != title}
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
                    )}
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

export default FinalDeleteCourseBackdrop;
