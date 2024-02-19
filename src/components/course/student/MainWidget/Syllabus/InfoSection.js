import { Stack, Typography } from "@mui/material";

const InfoSection = ({ sectionTitle, info }) => {
    return (
        <Stack
            spacing={1}
            sx={{
                width: '100%',
                px: 2,
            }}
        >
            <Typography
                variant="h6"
            >
                {sectionTitle}
            </Typography>
            <Typography
                variant="body1"
            >
                {info}
            </Typography>
        </Stack>
    )
}

export default InfoSection;
