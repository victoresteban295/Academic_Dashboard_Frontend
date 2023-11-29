"use client"
import { Box, Button } from "@mui/material";

const ChecklistOption = ({ username, activeList, handleActiveList, title, listId }) => {
    let isActive; 
    const isCurrent = activeList === listId
    if(isCurrent) {
        isActive = {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#000',
        }
    } else {
        isActive = {
            boxShadow: '1px 1px 4px 2px #cecece',
        }
    }

    //Change Checklist Content 
    const handleClick = () => {
        handleActiveList(listId);
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
        </Box>
    )
}

export default ChecklistOption;
