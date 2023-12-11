"use client"
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import CheckpointsSection from "./ChecklistContent/CheckpointsSection/CheckpointsSection";
import NewCheckpointSection from "./ChecklistContent/NewCheckpointSection";
import TitleSection from "./ChecklistContent/TitleSection/TitleSection";
import UnmarkPointsSection from "./ChecklistContent/UnmarkPointsSection";

const ChecklistContent = ({ 
    username,
    groups,
    changeGroups,
    checklists,
    changeChecklists,
    activeList, 
    handleActiveList, 
    listId, 
    title, 
    groupId,
    checkpoints, 
    completedPoints }) => {

    /* Displays Edit Buttons */
    const [showAllEdit, setShowAllEdit] = useState(false);
    const showAllEditButtons = () => {
        setShowAllEdit(true);
    }
    const unshowAllEditButtons = () => {
        setShowAllEdit(false);
    }

    /* Display New Chekpoint UI */
    const [showNewPoint, setShowNewPoint] = useState(false);
    
    const displayNewPoint = () => {
        setShowNewPoint(true);
    }
    const hideNewPoint = () => {
        setShowNewPoint(false);
    }

    return (
        <>
            {(activeList === listId) && (
                <Box
                    className="checklist-widget"
                    sx={{
                        width: '100%',
                    }}
                >
                    <Box
                        className="checklist-title-section"
                        sx={{
                            width: '100%',
                            p: 1,
                        }}
                    >
                        <TitleSection
                            username={username}
                            listId={listId}
                            title={title}
                            groupId={groupId}
                            groups={groups}
                            changeGroups={changeGroups}
                            checklists={checklists}
                            changeChecklists={changeChecklists}
                            activeList={activeList}
                            handleActiveList={handleActiveList}
                            showAllEdit={showAllEdit}
                            showAllEditButtons={showAllEditButtons}
                            unshowAllEditButtons={unshowAllEditButtons}
                            showNewPoint={showNewPoint}
                            displayNewPoint={displayNewPoint}
                        /> 
                    </Box>
                    <Box
                        className="checklist-content-section"
                        sx={{
                            width: '100%',
                            px: 2,
                        }}
                    >
                            <Stack
                                className='markPoint-unmarkPoints-stack'
                                divider={
                                    <Divider 
                                        variant='middle' 
                                        flexItem 
                                    />
                                }
                                spacing={0}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <UnmarkPointsSection 
                                    username={username}
                                    checklists={checklists}
                                    changeChecklists={changeChecklists}
                                    groups={groups}
                                    changeGroups={changeGroups}
                                    listId={listId}
                                    groupId={groupId}
                                    checkpoints={checkpoints}
                                    completedPoints={completedPoints}
                                    showAllEdit={showAllEdit}
                                />
                                {showNewPoint && (
                                    <NewCheckpointSection 
                                        username={username}
                                        listId={listId}
                                        groupId={groupId}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        checklists={checklists}
                                        changeChecklists={changeChecklists}
                                        hideNewPoint={hideNewPoint}
                                        isSubpoint={false}
                                    />
                                )}
                                {completedPoints.map((completedPoint) => {
                                    const { index, content, subpoints, completedSubpoints } = completedPoint;
                                    return(
                                        <CheckpointsSection 
                                            key={index}
                                            showAllEdit={showAllEdit}
                                            username={username}
                                            listId={listId}
                                            groupId={groupId}
                                            groups={groups}
                                            changeGroups={changeGroups}
                                            checklists={checklists}
                                            changeChecklists={changeChecklists}
                                            index={index}
                                            content={content}
                                            subpoints={subpoints}
                                            completedSubpoints={completedSubpoints}
                                            isCompleted={true}
                                        />
                                    )
                                })}
                            </Stack>
                    </Box>
                </Box> 
            )}
        </>
    )
}

export default ChecklistContent;
