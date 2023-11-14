import { CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import { useState } from "react";

const NewCheckpointSection = ({ 
    showNewPoint, 
    displayNewPoint, 
    hideNewPoint, 
    isSubpoint,
    createNewCheckpoint }) => {

    //New Checkpoint
    const [newPoint, setNewPoint] = useState('');

    //Create new Checkpoint
    const createNewPoint01 = () => {
        //Ensure User Input Isn't Blank
        const checkpoint = newPoint.trim();
        if(checkpoint != '') {
            createNewCheckpoint(checkpoint);
        }
        setNewPoint('');
        hideNewPoint();
        displayNewPoint();
    }

    const createNewPoint = () => {
        //Ensure User Input Isn't Blank
        const checkpoint = newPoint.trim();
        if(checkpoint != '') {
            createNewCheckpoint(checkpoint);
        } else {
            hideNewPoint();
        }
        setNewPoint('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <IconButton size='large'>
                <CheckBoxOutlineBlank fontSize='inherit' />
            </IconButton>
            <InputBase
                value={newPoint}
                autoFocus={true}
                placeholder={isSubpoint ? "Create New Subpoint" : "Create New Checkpoint"}
                onChange={(e) => setNewPoint(e.target.value)}
                onBlur={() => {
                    createNewPoint();
                    hideNewPoint();
                }}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        createNewPoint();
                    }
                }}
                inputProps={{maxLength: 50}}
                sx={{
                    flexGrow: 1,
                }}
            />
            {newPoint.trim() === '' && (
                <IconButton 
                    onClick={hideNewPoint}
                    size='small'
                >
                    <Close fontSize='inherit' />
                </IconButton>
            )}
        </Box>
    )
}

export default NewCheckpointSection;
