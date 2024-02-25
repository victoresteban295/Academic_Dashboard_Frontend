import { Stack, Typography } from "@mui/material";

const InfoSection = ({ title, info }) => {
    return (
        <Stack
            spacing={1}
            sx={{
                width: '100%',
            }}
        >
            <Typography
                variant="h6"
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                paragraph={true}
            >
                {info}
            </Typography>
        </Stack>
    )
}

export default InfoSection;
