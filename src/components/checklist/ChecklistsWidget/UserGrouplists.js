import { Stack, Box, Button } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import NewGroupBackdrop from "./Backdrops/NewGroupBackdrop";

const UserGrouplists = ({ 
    username, 
    groups,
    allChecklists,
    changeGroups,
    activeList, 
    handleActiveList }) => {

    /* Backdrop Menu State Value & Function */
    /* Create New Group */
    const [openNewGroup, setOpenNewGroup] = useState(false);
    const handleOpenNewGroup = () => {
        setOpenNewGroup(true);
    }
    const handleCloseNewGroup = () => {
        setOpenNewGroup(false);
    }

    //Does User Have an Groups
    const hasGroups = groups.length > 0;

    return (
        <>
            {hasGroups ? (
                <Stack
                    className='user-grouplists-section'
                >
                    {groups.map((group) => {
                        const { title, groupId, checklists } = group;
                        return(
                            <GrouplistOption 
                                username={username}
                                activeList={activeList}
                                handleActiveList={handleActiveList}
                                allChecklists={allChecklists}
                                groups={groups}
                                changeGroups={changeGroups}
                                title={title}
                                groupId={groupId}
                                checklists={checklists}
                            />
                        )
                    })}
                </Stack>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        borderWidth: '2px',
                        borderStyle: 'dashed',
                    }}
                >
                    <NewGroupBackdrop
                        username={username}
                        open={openNewGroup} 
                        handleClose={handleCloseNewGroup}
                        groups={groups}
                        changeGroups={changeGroups}
                    />
                    <Button
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={handleOpenNewGroup}
                        sx={{
                            width: '100%',
                            color: '#000',
                        }}
                    >
                        Create New Group 
                    </Button>
                </Box>
            )}
        </>
    )
}

export default UserGrouplists;
