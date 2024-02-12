import { Stack } from "@mui/material";
import Group from "./Group";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { reorderGroups } from "@/lib/utils/reminders/frontend/modifyGroups";

const GroupsSection = ({
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders,
    handleOpenAlert
}) => {

    /* Dnd-Kit: Draggable Functionality */
    const mouseSensor = useSensor(MouseSensor, {
        //For Mouse: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const touchSensor = useSensor(TouchSensor, {
        //For Touch Screen: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const sensors = useSensors(mouseSensor, touchSensor);

    //Group Getting Dragged
    const [activeGroup, setActiveGroup] = useState('');
    const handleDragStart = (event) => {
        const { active } = event;
        //GroupId of Group Getting Dragged
        setActiveGroup(active.id);  
    }
    const handleDragEnd = (event) => {
        setActiveGroup('');
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const { active, over } = event;
        if(active.id !== over.id) {
            try {
                //Frontend: Reorder Groups
                const updatedGroups = reorderGroups(groups, active.id, over.id);

                //Update State Value
                changeGroups(updatedGroups);

            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                //changeGroups();
            }
        }
    }


    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            modifiers={[restrictToParentElement]}
        >
            <Stack
                spacing={1}
                sx={{
                    width: '100%',
                }}
            >
                <SortableContext
                    items={groups.map(group => group.groupId)}
                    strategy={verticalListSortingStrategy}
                >
                    {groups.map((group) => {
                        const { groupId, title, reminders } = group;
                        return (
                            <Group 
                                key={groupId}
                                activeGroup={activeGroup}
                                groupId={groupId}
                                title={title}
                                size={reminders.length}
                                currentReminders={currentReminders}
                                handleCurrentReminders={handleCurrentReminders}
                            />
                        ) 
                    })}
                </SortableContext>
            </Stack>
        </DndContext>
    )
}

export default GroupsSection;
