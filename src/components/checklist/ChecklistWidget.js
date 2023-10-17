"use client"
import { Box } from "@mui/material";
import ChecklistSection from "./ChecklistWidget/ChecklistSection";

const ChecklistWidget = async ({ checklists, listIds }) => {

    let currentList;
    const visitedList = localStorage.getItem("VisitedList");
    if((visitedList === null) || (!listIds.includes(visitedList))) {
        localStorage.setItem("VisitedList", listIds[0]);
        currentList = listIds[0];
    } else {
        currentList = visitedList;
    }

    return (
        <Box
            className="checklist-page"
            sx={{
                display: 'flex',
                width: '100%',
            }}
        >
            <Box
                className='checklist-widget-container'
                sx={{
                    flexGrow: 2,
                    p: 1,
                }}
            >
                {checklists.map((checklist) => {
                    const { listId, title, checkpoints} = checklist;
                    return (
                        <ChecklistSection 
                            currentList={currentList}
                            listId={listId}
                            title={title}
                            checkpoints={checkpoints}
                        />
                    )
                })}
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    flexGrow: 1,
                    bgcolor: 'grey',
                    height: '10px',
                }}
            >

            </Box>
        </Box>
    )
}

export default ChecklistWidget;
