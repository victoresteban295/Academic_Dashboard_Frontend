import { Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";

const InfoSection = ({ title, info }) => {
    return (
        <Stack
            spacing={1}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 1,
                    color: 'primary.main',
                    borderRadius: '5px',
                    bgcolor: '#e3f3ff',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {title}
                </Typography>
                <Tooltip title="Edit">
                    <IconButton
                        size='small'
                    >
                        <Edit fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                sx={{
                    px: 1,
                }}
            >
                <Typography
                    variant="body1"
                    paragraph={true}
                >
                    {info}
                </Typography>
            </Box>
        </Stack>
    )
}

export default InfoSection;
