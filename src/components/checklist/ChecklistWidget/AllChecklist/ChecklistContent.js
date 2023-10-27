"use client"
import { Box, Divider, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import CheckpointsSection from "./CheckpointsSection";

const ChecklistContent = ({ activeList, handleActiveList, listId, title, checkpoints }) => {

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
                        const { content, subpoints, isComplete, isSubpoint } = checkpoint;
                        return(
                            <CheckpointsSection 
                                content={content}
                                subpoints={subpoints}
                                isComplete={isComplete}
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
