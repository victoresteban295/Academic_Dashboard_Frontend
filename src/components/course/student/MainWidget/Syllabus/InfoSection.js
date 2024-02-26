import { Box, Stack, Typography } from "@mui/material";

const InfoSection = ({ title, info }) => {
    return (
        <Stack
            spacing={1}
        >
            <Box
                sx={{
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
