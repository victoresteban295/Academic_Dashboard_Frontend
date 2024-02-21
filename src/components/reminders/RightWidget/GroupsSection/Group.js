import { Box, Typography } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Group = ({ 
    activeGroup,
    groupId, 
    title, 
    size, 
    currentReminders,
    handleCurrentReminders
}) => {
    /* Dnd-kit: Make Component Draggable */
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({id: groupId});

    /* Allows us to pick up draggable componenet */
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    /* Currently Being Viewed By User */
    let isActive;
    const isCurrent = (currentReminders === groupId);
    if(isCurrent) {
        isActive = {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#000'
        }
    } else {
        isActive = {
            boxShadow: '1px 1px 4px 2px #cecece'
        }
    }

    /* View Upcoming Reminders */
    const handleClick = () => {
        handleCurrentReminders(groupId);
    }

    //Group is Getting Dragged
    const isActiveGroup = activeGroup === groupId;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <Box
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '10px',
                    alignItems: 'center',
                    cursor: 'pointer',
                    p: 1,
                    ...isActive,
                    bgcolor: isActiveGroup ? '#cecece' : '',
                }}
            >
                <Typography
                    variant="button"
                >
                    {title}
                </Typography>
                <Typography
                    variant="button"
                >
                    {size}
                </Typography>
            </Box>
        </div>
    )
}

export default Group;
