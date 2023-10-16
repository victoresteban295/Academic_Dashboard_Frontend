import { Add, MoreVert } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const TitleSection = ({ title }) => {
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
            >
                {title} 
            </Typography>
            <Box
                className="title-icons"
                sx={{
                    display: 'flex'
                }}
            >
                <IconButton size='small'>
                    <Add fontSize='inherit' />
                </IconButton>
                <IconButton size='small'>
                    <MoreVert fontSize='inherit' />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TitleSection;
