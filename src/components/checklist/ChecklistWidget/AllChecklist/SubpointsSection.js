import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";

const SubpointsSection = ({ content, isCompleted }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {isCompleted ? (
                <IconButton size='large'>
                    <CheckBoxOutlined fontSize='inherit' />
                </IconButton>
            ) : (
                <IconButton size='large'>
                    <CheckBoxOutlineBlank fontSize='inherit' />
                </IconButton>
            )}
            {isCompleted ? (
                <Typography
                    variant='body2'
                    sx={{
                        textDecoration: 'line-through',
                    }}
                >
                    {content}
                </Typography>
            ) : (
                <InputBase 
                    value={content}
                    sx={{
                        flexGrow: 1,
                    }}
                />
            )}
        </Box>
    )
}

export default SubpointsSection;
