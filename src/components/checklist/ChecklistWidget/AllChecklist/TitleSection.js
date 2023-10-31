import { ChecklistTitleSchema } from "@/lib/schemas/checklistSchema";
import { reloadChecklistpage, renameCheclistTitle } from "@/lib/utils/checklist/modifyChecklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, MoreVert } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, InputBase, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TitleSection = ({ 
    title, 
    isGrouped, 
    handleChecklistTitle, 
    showAllEdit,
    showAllEditButtons, 
    unshowAllEditButtons }) => {

    /* React Hook From */
    const { control } = useForm({
        mode: 'onBlur', 
        defaultValues: {
            checklistTitle: title,
        },
        resolver: zodResolver(ChecklistTitleSchema), //Zod Validation Schema
    });

    //Menu's State Value & Functions
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    /* Change Title Method */
    const handleTitleChange = (event) => {
        handleChecklistTitle(event.target.value);
        reloadChecklistpage();
    }


    return (
        <Box
            className="checklist-title-section"
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Controller 
                name="checklistTitle"
                control={control}
                render={({field: { onChange, value}}) => {
                    return (
                        <InputBase
                            value={value}
                            placeholder="Add Checklist Title"
                            onChange={onChange}
                            onBlur={handleTitleChange}
                            inputProps={{maxLength: 50}}
                            sx={{
                                fontSize: '20px',
                                fontWeight: '700',
                                flexGrow: 4,
                            }}
                        />
                    )
                }}
            />
            {(!showAllEdit) && (
                <Box
                    className="title-icons"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Tooltip title="Add Checkpoint">
                        <IconButton size='small'>
                            <Add fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Options">
                        <IconButton 
                            onClick={handleClick}
                            size='small'
                        >
                            <MoreVert fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="checklist-options-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={showAllEditButtons} >
                            Edit Checklist
                        </MenuItem>
                        <MenuItem
                            sx={{
                                display: isGrouped ? 'none' : 'block'
                            }}
                        >
                            Add to Group
                        </MenuItem>
                        <MenuItem
                            sx={{
                                display: isGrouped ? 'block' : 'none'
                            }}
                        >
                            Move to Different Group
                        </MenuItem>
                        <MenuItem
                            sx={{
                                display: isGrouped ? 'block' : 'none'
                            }}
                        >
                            Remove From Group
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            sx={{
                                color: '#ef476f',
                            }}
                        >
                            Delete Checklist
                        </MenuItem>
                    </Menu>
                </Box>
            )}
            {showAllEdit && (
                <Button
                    variant="contained"
                    onClick={unshowAllEditButtons}
                >
                    Done Editing
                </Button>
            )}
        </Box>
    )
}

export default TitleSection;
