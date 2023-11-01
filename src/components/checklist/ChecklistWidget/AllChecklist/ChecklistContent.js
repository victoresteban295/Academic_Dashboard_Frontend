"use client"
import { Box, Divider, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import CheckpointsSection from "./CheckpointsSection";
import { renameCheclistTitle } from "@/lib/utils/checklist/modifyChecklist";
import { useState } from "react";

const ChecklistContent = ({ 
    username,
    isGrouped, 
    grouplists,
    activeList, 
    handleActiveList, 
    listId, 
    title, 
    checkpoints, 
    completedPoints }) => {

    //Displays Edit Buttons
    const [showAllEdit, setShowAllEdit] = useState(false);
    const showAllEditButtons = () => {
        setShowAllEdit(true);
    }
    const unshowAllEditButtons = () => {
        setShowAllEdit(false);
    }

    /* Rename Checklist's Title */
    const handleChecklistTitle = (newTitle) => {
        renameCheclistTitle(username, listId, newTitle);
    }

    const handleAddChecklistToGroup = () => {

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
                            grouplists={grouplists}
                            isGrouped={isGrouped}
                            handleChecklistTitle={handleChecklistTitle}
                            showAllEdit={showAllEdit}
                            showAllEditButtons={showAllEditButtons}
                            unshowAllEditButtons={unshowAllEditButtons}
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
                            className='checkpoints-section'
                            divider={<Divider variant='middle' flexItem />}
                            spacing={0}
                            sx={{
                                width: '100%',
                            }}
                        >
                            {checkpoints.map((checkpoint) => {
                                const { content, subpoints, completedSubpoints, isSubpoint } = checkpoint;
                                return(
                                    <CheckpointsSection 
                                        showAllEdit={showAllEdit}
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={false}
                                        isSubpoint={isSubpoint}
                                    />
                                )
                            })}
                            {completedPoints.map((completedPoint) => {
                                const { content, subpoints, completedSubpoints, isSubpoint } = completedPoint;
                                return(
                                    <CheckpointsSection 
                                        content={content}
                                        subpoints={subpoints}
                                        completedSubpoints={completedSubpoints}
                                        isCompleted={true}
                                        isSubpoint={isSubpoint}
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
