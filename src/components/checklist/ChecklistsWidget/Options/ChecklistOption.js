"use client"
import { MoreVert } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";

const ChecklistOption = ({ reloadPage, title, listId }) => {
    let isActive; 
    const isCurrent = localStorage.getItem("currentList") === listId
    if(isCurrent) {
        isActive = {
            bgcolor: '#cecece',
        }
    } else {
        isActive = {
            boxShadow: '1px 1px 4px 2px #cecece',
        }
    }

    //Change Checklist Content 
    const handleClick = () => {
        localStorage.setItem("currentList", listId);
        reloadPage();
    } 

    return (
        <Box
            className='checklist-option' 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '10px',
                ...isActive,
            }}
        >
            <Button
                variant="text"
                onClick={handleClick}
                sx={{
                    color: '#000'
                }}
            >
                {title}
            </Button>
            <IconButton size='small'>
                <MoreVert fontSize='inherit' />
            </IconButton>
        </Box>
    )
}

export default ChecklistOption;
