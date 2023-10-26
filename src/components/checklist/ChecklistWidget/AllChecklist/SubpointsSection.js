import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";

const SubpointsSection = ({ reloadPage, content, isComplete, isSubpoint }) => {
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
                value={content}
                sx={{
                    flexGrow: 1,
                }}
            />
        </Box>
    )
}

export default SubpointsSection;
