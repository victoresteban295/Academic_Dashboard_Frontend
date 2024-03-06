import { deleteChecklist, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { removeChecklist } from "@/lib/utils/checklist/frontend/modifyChecklist";
import { Clear, Delete } from "@mui/icons-material";
import { Box, Button, Dialog, Stack, Typography } from "@mui/material";

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
                        onClick={handleDeleteChecklist}
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
                        onClick={handleDeleteChecklist}
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

export default DeleteListBackdrop;
