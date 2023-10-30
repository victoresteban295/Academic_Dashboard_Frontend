"use client"
import { Box, Divider, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import CheckpointsSection from "./CheckpointsSection";

const ChecklistContent = ({ 
    isGrouped, 
    activeList, 
    handleActiveList, 
    listId, 
    title, 
    checkpoints, 
    completedPoints }) => {

    let isCurrent;
    if(activeList === listId) {
        isCurrent = {}
    } else {
        isCurrent = {
            display: 'none',
        }
    }

    return (
        <Box
            className="checklist-widget"
            sx={{
                width: '100%',
                ...isCurrent,
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
                    title={title}
                    isGrouped={isGrouped}
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

    )
}

export default ChecklistContent;
