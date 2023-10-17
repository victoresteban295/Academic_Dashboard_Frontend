import { Box } from "@mui/material";
import TitleSection from "./ChecklistSection/TitleSection";

const ChecklistSection = ({ currentList, listId, title, checkpoints }) => {
    let displayList;
    if(listId === currentList) {
        displayList = {}
    } else {
        displayList = {
            display: 'none',
        }
    }

    return (
        <Box
            className="checklist-widget"
            sx={{
                width: '100%',
                height: '500px',
                ...displayList,
            }}
        >
            <Box
                className="checklist-title-section-container"
                sx={{
                    width: '100%',
                    p: 1,
                    bgcolor: 'grey',
                }}
            >
                <TitleSection
                    title={title}
                /> 
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

export default ChecklistSection;
