"use client"
import { Box, Divider } from "@mui/material";
import TitleSection from "./TitleSection";

const ChecklistContent = ({ listId, title, checkpoints }) => {

    let isCurrent;
    if(localStorage.getItem("currentList") === listId) {
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
                height: '500px',
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
                <Divider />
            </Box>
            <Box
                className="checkpoints-section"
                sx={{
                    width: '100%',
                    height: '300px'
                }}
            >

            </Box>
        </Box> 

    )
}

export default ChecklistContent;
