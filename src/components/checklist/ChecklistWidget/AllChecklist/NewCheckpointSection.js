import { CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import { useState } from "react";

const NewCheckpointSection = ({ showNewPoint, displayNewPoint, hideNewPoint, createNewCheckpoint }) => {
    const [newPoint, setNewPoint] = useState('');
    const createNewPoint = () => {
        const checkpoint = newPoint.trim();
        if(checkpoint != '') {
            createNewCheckpoint(checkpoint);
        }
        hideNewPoint();
        setNewPoint('');
    }

    return (
        <>
            {showNewPoint && (
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
                        placeholder="Create New Checkpoint"
                        onChange={(e) => setNewPoint(e.target.value)}
                        onBlur={createNewPoint}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                e.target.blur();
                            }
                        }}
                        inputProps={{maxLength: 50}}
                        sx={{
                            flexGrow: 1,
                        }}
                    />
                    {newPoint.trim() === '' && (
                        <IconButton 
                            onClick={() => {
                                setCancel(true);
                                setNewPoint('');
                            }}
                            size='small'
                        >
                            <Close fontSize='inherit' />
                        </IconButton>
                    )}
                </Box>
            )}
        </>
    )
}

export default NewCheckpointSection;
