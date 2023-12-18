import ChecklistsWidget from "@/components/checklist/ChecklistsWidget";
import { MenuOpen } from "@mui/icons-material";
import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

const MyChecklistMenu = ({
    username,
    checklists,
    changeChecklists,
    groups,
    changeGroups,
    activeList,
    handleActiveList, 
    handleOpenAlert }) => {

    /* Options Menu's State Value & Functions */
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Tooltip 
                title="My Checklists"
                sx={{
                    display: {sm: 'flex', md: 'none'}
                }}
            >
                <IconButton
                    onClick={handleClick}
                    size='small'
                >
                    <MenuOpen fontSize='inherit' />
                </IconButton>
            </Tooltip>
            <Drawer
                anchor='right'
                open={open}
                onClose={handleClose}
            >
                <Box
                    className='lists-widget-container'
                    sx={{
                        width: '250px',
                        p: 1,
                    }}
                >
                    <ChecklistsWidget
                        username={username}
                        checklists={checklists}
                        changeChecklists={changeChecklists}
                        groups={groups}
                        changeGroups={changeGroups}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Box>
            </Drawer>
        </>
    )
}

export default MyChecklistMenu;
