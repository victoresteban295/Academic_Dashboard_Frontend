import { AddCircleOutline, BallotTwoTone } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import NewChecklistBackdrop from "../ChecklistsWidget/Backdrops/NewChecklistBackdrop";

const NoList = ({ username, checklists, changeChecklists, handleActiveList }) => {
    /* Backdrop Menu State Value & Function */
    /* Create New Checklist */
    const [openNewList, setOpenNewList] = useState(false);
    const handleOpenNewList = () => {
        setOpenNewList(true);
    }
    const handleCloseNewList = () => {
        setOpenNewList(false);
    }

    return (
        <Stack
            spacing={2}
            alignItems='center'
            sx={{
                width: '100%',
                mt: {xs: 2, sm: 4}
            }}
        >
            <Stack
                spacing={0}
            >
                <BallotTwoTone 
                    sx={{
                        alignSelf: 'center',
                        width: '50px',
                        height: '50px',
                    }}
                />
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    No Tasks Left To Complete 
                </Typography>
            </Stack>
            <Box
                className='checklist-option' 
                sx={{
                    display: {sm: 'flex', md: 'none'},
                    borderWidth: '2px',
                    borderStyle: 'dashed',
                    borderRadius: '10px',
                    maxWidth: '250px',
                }}
            >
                <NewChecklistBackdrop 
                    username={username}
                    open={openNewList}
                    handleClose={handleCloseNewList}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    handleActiveList={handleActiveList}
                />
                <Button
                    startIcon={<AddCircleOutline />}
                    variant="text"
                    onClick={handleOpenNewList}
                    sx={{
                        color: '#000',
                        width: '100%',
                    }}
                >
                    Create New Checklist
                </Button>
            </Box>
        </Stack>
    ) 
}

export default NoList;
