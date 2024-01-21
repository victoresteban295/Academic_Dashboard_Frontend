import { deleteChecklist, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { removeChecklist } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { Cancel, Delete } from "@mui/icons-material";
import { Box, Button, Popover, Stack, Typography } from "@mui/material";

const DeleteListBackdrop = ({
    groupId,
    listId,
    title,
    open,
    handleClose,
    checklists,
    changeChecklists, 
    groups, 
    changeGroups, 
    handleActiveList, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userChecklists = [];
    for(const checklist of checklists) {
        const list = structuredClone(checklist);
        userChecklists.push(list);
    }
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //Close Backdrop
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
    }

    //Delete Current Checklist
    const handleDeleteChecklist = async () => {
        handleClose(); //Close Backdrop
        const outdatedLists = [...userChecklists];
        const outdatedGroups = [...userGroups];
        const outdatedActiveList = localStorage.getItem("currentList");

        try {
            const { updatedLists, updatedGroups, activeList } = removeChecklist(
                checklists, groups, listId, groupId);

            //Set New Active List (if-any)
            if(activeList != '') {
                handleActiveList(activeList);
            } else {
                //Reset Active List
                localStorage.removeItem("currentList");
            }

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            await deleteChecklist(listId);
            reloadChecklistpage();
        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            handleActiveList(outdatedActiveList);
            changeChecklists(outdatedLists);
            changeGroups(outdatedGroups);
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

export default DeleteListBackdrop;
