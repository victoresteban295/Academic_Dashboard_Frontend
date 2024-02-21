"use client"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Button, Typography } from "@mui/material";

const ChecklistOption = ({ 
    activeChecklist,
    activeList, 
    handleActiveList, 
    title, 
    listId }) => {

    /* Determine if User is Currently Viewing this Checklist*/
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

    /* Dnd-kit: Make Component Draggable */
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({id: listId});

    /* Allows us to pick up draggable componenet */
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    //Change Checklist Content 
    const handleClick = () => {
        handleActiveList(listId);
    } 

    //Checklist is Being Dragged
    const isActiveChecklist = activeChecklist === listId;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <Box
                className='checklist-option' 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '10px',
                    bgcolor: isActiveChecklist ? '#cecece' : '',
                    ...isActive,
                }}
            >
                <Button
                    variant="text"
                    onClick={handleClick}
                    sx={{
                        color: 'text.primary',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '100%',
                    }}
                >
                    <Typography
                        noWrap={true}
                        variant="button"
                    >
                        {title}
                    </Typography>
                </Button>
            </Box>
        </div>
    )
}

export default ChecklistOption;
