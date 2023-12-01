import { Box, Button, Stack } from "@mui/material";
import ChecklistOption from "./Options/ChecklistOption";
import { AddCircleOutline } from "@mui/icons-material";
import NewChecklistBackdrop from "./Backdrops/NewChecklistBackdrop";
import { useState } from "react";

const UserChecklists = ({ 
    username, 
    checklists,
    changeChecklists,
    activeList, 
    handleActiveList}) => {
    //Determine If User has Checklist
    const hasChecklists = checklists.length > 0;

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
        <>
            {hasChecklists ? (
                <Stack
                    className='user-checklists-section'
                    spacing={0.5}
                >
                    {checklists.map((checklist) => {
                        const { title, listId } = checklist;
                        return(
                            <ChecklistOption 
                                username={username}
                                activeList={activeList}
                                handleActiveList={handleActiveList}
                                title={title}
                                listId={listId}
                            />
                        )
                    })}
                </Stack>
            ) : (
                <Box
                    className='checklist-option' 
                    sx={{
                        display: 'flex',
                        borderWidth: '2px',
                        borderStyle: 'dashed',
                        borderRadius: '10px',
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
                            width: '100%',
                            color: '#000',
                        }}
                    >
                        Create New Checklist
                    </Button>
                </Box>
            )}
        </>
    )
}

export default UserChecklists;
