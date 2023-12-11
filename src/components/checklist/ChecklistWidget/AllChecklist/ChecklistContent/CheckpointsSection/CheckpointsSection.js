import { Add, CheckBoxOutlineBlank, CheckBoxOutlined, Delete } from "@mui/icons-material";
import { Box, Divider, IconButton, InputBase, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { modifyCheckpoints, reloadChecklistpage } from "@/lib/utils/checklist/backend/backendChecklist";
import { deleteCheckpoint, markAsCompletePoint, modifyCheckpoint, unmarkAsCompletePoint } from "@/lib/utils/checklist/frontend/modifyCheckpoint";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { reorderSubpoints } from "@/lib/utils/checklist/frontend/modifySubpoint";
import SubpointsSection from "../SubpointsSection/SubpointsSection";
import NewCheckpointSection from "../NewCheckpointSection";

const CheckpointsSection = ({ 
    activeCheckpoint,
    showAllEdit, 
    username,
    listId,
    groupId,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    index,
    content, 
    subpoints, 
    completedSubpoints, 
    isCompleted }) => {

    //NOTE: Enables To Delete Checkpoint w/o Error
    const [isUpdating, setUpdating] = useState(false);

    //Displays Checkpoint's Edit Icon Buttons
    const [showEdit, setShowEdit] = useState(false);

    //Checkpoint's Modified Content
    const [newContent, setNewContent] = useState(content);

    //Checkpoint is Getting Dragged
    const isActivePoint = activeCheckpoint === index;

    /* Display New Subpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    /* const displayNewPoint = () => { */
    /*     setShowNewPoint(true); */
    /* } */
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }

    /* Dnd-kit: Make Component Draggable */
    /* Converts Component into Dropable Container */
    const mouseSensor = useSensor(MouseSensor, {
        //Require the mouse to move 10px before activating drag
        activationConstraint: {
            distance: 10,
        }
    });
    const touchSensor = useSensor(TouchSensor, {
        //For Touch Screen: Require touch to move 10px before activating drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const sensors = useSensors(mouseSensor, touchSensor);
    //Subpoint Getting Dragged
    const [activeSubpoint, setActiveSubpoint] = useState(''); 
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveSubpoint(active.id);
    }
    const handleDragEnd = (event) => {
        setActiveSubpoint('');
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            //Re-order Checkpoints
            const { 
                updatedLists, 
                updatedGroups, 
                updatedPoints, 
                completedPoints
            } = reorderSubpoints(
                checklists, 
                groups,
                listId,
                groupId,
                index,
                active.id,
                over.id);

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            modifyCheckpoints(username, listId, updatedPoints, completedPoints);
            reloadChecklistpage();
        }
    }
    /* Converts Component into Draggable Item */
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition 
    } = useSortable({id: index});

    /* Allows us to pick up draggable componenet */
    const style = {
        transform: CSS.Transform.toString(transform && {...transform, scaleY: 1}),
        transition,
    }

    // Modify Checkpoint's Content
    const handleContent = () => {
        if(newContent.trim() != '') {
            setUpdating(false);
            const { updatedLists, updatedGroups, updatedPoints, completedPoints } = modifyCheckpoint(
                checklists,
                groups,
                listId,
                groupId,
                index, 
                newContent);

            //Update State Value
            changeChecklists(updatedLists);
            changeGroups(updatedGroups);

            //Backend API: Update Database
            modifyCheckpoints(username, listId, updatedPoints, completedPoints);
            reloadChecklistpage();
        } else {
            setNewContent(content);
        }
    }

    // Mark Checkpoint as Complete
    const markAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = markAsCompletePoint(
            checklists,
            groups,
            listId,
            groupId,
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Unmark Checkpoint as Complete 
    const unmarkAsComplete = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = unmarkAsCompletePoint(
            checklists,
            groups,
            listId,
            groupId,
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    // Delete Checkpoint & it's Content 
    const handleDeletePoint = () => {
        const { updatedLists, updatedGroups, updatedPoints, updatedCompletedPoints } = deleteCheckpoint(
            checklists,
            groups,
            listId,
            groupId,
            isCompleted, 
            index);

        //Update State Value
        changeChecklists(updatedLists);
        changeGroups(updatedGroups);

        //Backend API: Update Database
        modifyCheckpoints(username, listId, updatedPoints, updatedCompletedPoints);
        reloadChecklistpage();
    }

    return (
        <Stack
            spacing={0}
            sx={{
                bgcolor: isActivePoint ? '#cecece' : '',
                ...style,
            }}
            ref={setNodeRef}
                            {...attributes}
                            {...listeners}
        >
            <Box
                onMouseOver={() => setShowEdit(true)}
                onMouseOut={() => setShowEdit(false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {isCompleted ? (
                    <IconButton 
                        size='large'
                        onClick={unmarkAsComplete}
                    >
                        <CheckBoxOutlined fontSize='inherit' />
                    </IconButton>
                ) : (
                    <IconButton 
                        size='large'
                        onClick={markAsComplete}
                    >
                        <CheckBoxOutlineBlank fontSize='inherit' />
                    </IconButton>
                )}

                {isCompleted ? (
                    <Typography
                        variant='body1'
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'line-through',
                        }}
                    >
                        {content}
                    </Typography>
                ) : (
                    <InputBase 
                        value={isUpdating ? newContent : content}
                        multiline={true}
                        placeholder="Add Checkpoint"
                        onChange={(e) => {
                            setUpdating(true);
                            setNewContent(e.target.value)
                        }}
                        onBlur={handleContent}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                e.target.blur();
                            }
                        }}
                        inputProps={{maxLength: 200}}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                )}
                {!showAllEdit && (
                    <Box
                        sx={{
                            display: 'flex',
                            width: '60px',
                        }}
                    >
                        {(showEdit && !isCompleted) && (
                            <Tooltip title="Add Subpoint">
                                <IconButton 
                                    size='small'
                                    disabled={showNewPoint}
                                    onClick={() => setShowNewPoint(true)}
                                >
                                    <Add fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        )}
                        {showEdit && (
                            <Tooltip title="Delete Checkpoint">
                                <IconButton 
                                    size='small'
                                    onClick={handleDeletePoint}
                                >
                                    <Delete 
                                        fontSize='inherit' 
                                        sx={{
                                            color: '#ef476f',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                    >
                        {(showAllEdit && !isCompleted) && (
                            <Tooltip title="Add Subpoint">
                                <IconButton 
                                    size='small'
                                    disabled={showNewPoint}
                                    onClick={() => setShowNewPoint(true)}
                                >
                                    <Add fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        )}
                        {showAllEdit && (
                            <Tooltip title="Delete Checkpoint">
                                <IconButton 
                                    size='small'
                                    onClick={handleDeletePoint}
                                >
                                    <Delete 
                                        fontSize='inherit' 
                                        sx={{
                                            color: '#ef476f',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>
            </Box>
            {((subpoints.length > 0) || (completedSubpoints.length > 0)) && !showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            { showNewPoint ? <Divider variant='middle' flexItem/> : <Box></Box>}
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                sensors={sensors}
                modifiers={[restrictToParentElement]}
            >
                <Stack
                    className='supoints-section'
                    divider={<Divider variant='middle' flexItem />}
                    spacing={0}
                    sx={{
                        flexGrow: 1,
                        pl: 4,
                    }}
                >
                    <SortableContext
                        items={subpoints.map(subpoint => subpoint.index)}
                        strategy={verticalListSortingStrategy} 
                    >
                        <Stack
                            className='supoints-section'
                            divider={
                                (activeSubpoint === '') &&
                                <Divider 
                                    variant='middle' 
                                    flexItem 
                                />
                            }
                            spacing={0}
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            {subpoints.map((subpoint) => {
                                const { index: subpointIdx, content } = subpoint;
                                return(
                                    <SubpointsSection
                                        key={subpointIdx}
                                        activeSubpoint={activeSubpoint}
                                        username={username}
                                        isParentComplete={isCompleted}
                                        listId={listId}
                                        groupId={groupId}
                                        pointIdx={index}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        checklists={checklists}
                                        changeChecklists={changeChecklists}
                                        showAllEdit={showAllEdit}
                                        subpointIdx={subpointIdx}
                                        content={content}
                                        isCompleted={false}
                                    />
                                )
                            })}
                        </Stack>
                    </SortableContext>
                    {showNewPoint && (
                        <NewCheckpointSection
                            username={username}
                            listId={listId}
                            groupId={groupId}
                            index={index}
                            groups={groups}
                            changeGroups={changeGroups}
                            checklists={checklists}
                            changeChecklists={changeChecklists}
                            hideNewPoint={hideNewPoint}
                            isSubpoint={true}
                        />
                    )}
                    {completedSubpoints.map((completedSubpoint) => {
                        const { index: subpointIdx, content } = completedSubpoint;
                        return(
                            <SubpointsSection
                                key={subpointIdx}
                                activeSubpoint={''}
                                username={username}
                                isParentComplete={isCompleted}
                                listId={listId}
                                groupId={groupId}
                                pointIdx={index}
                                groups={groups}
                                changeGroups={changeGroups}
                                checklists={checklists}
                                changeChecklists={changeChecklists}
                                showAllEdit={showAllEdit}
                                subpointIdx={subpointIdx}
                                content={content}
                                isCompleted={true}
                            />
                        )
                    })}
                </Stack>
            </DndContext>
        </Stack>
    )
}

export default CheckpointsSection;
