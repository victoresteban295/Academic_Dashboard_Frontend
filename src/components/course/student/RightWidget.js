import { Box, Divider, Stack, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";

const RightWidget = ({ handleOpenAlert }) => {
    return (
        <Stack
            spacing={2}
            sx={{
                width: '250px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="body2"
                >
                    {"Course Schedule"}
                </Typography>
            </Box>
            <Stack
                sx={{
                    px: 2,
                }}
            >
                <Typography
                    variant="body1"
                >
                    {"Dr.Seely"}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {"Palenske Hall R# 330"}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {"323-233-2321"}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {"dseely@college.edu"}
                </Typography>
            </Stack>
            <Divider />
            <Schedule 
                location="Palenske Hall 329"
                days={["Mon", "Tue", "Wed", "Thu", "Fri"]}
                startTime="9:15 AM"
                endTime="10:20 AM"
            />
        </Stack>
    )
}

export default RightWidget;
