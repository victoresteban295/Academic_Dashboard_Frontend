import { Add, MoreVert } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

const TitleSection = ({ title, isGrouped }) => {
    return (
        <Box
            className="checklist-title-section"
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    fontWeight: '700'
                }}
                
            >
                {title} 
            </Typography>
            <Box
                className="title-icons"
                sx={{
                    display: 'flex'
                }}
            >
                <Tooltip title="Add Checkpoint">
                    <IconButton size='small'>
                        <Add fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Options">
                    <IconButton size='small'>
                        <MoreVert fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default TitleSection;
