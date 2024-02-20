import { Box, Divider, Stack, Typography } from "@mui/material";
import Schedule from "./RightWidget/Schedule";
import { Apartment, AssignmentInd, Email, LocalPhone } from "@mui/icons-material";

const RightWidget = ({ handleOpenAlert }) => {
    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
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
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {"Instructor Information"}
                </Typography>
            </Box>
            <Stack
                spacing={0.5}
                sx={{
                    px: 2,
                    py: 1,
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <AssignmentInd 
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {"Dr.Seely"}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <Apartment
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {"Palenske Hall R# 330"}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <LocalPhone
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {"323-233-2321"}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1} 
                >
                    <Email
                        fontSize="small"
                    />
                    <Typography
                        variant="body1"
                    >
                        {"dseely@college.edu"}
                    </Typography>
                </Stack>
            </Stack>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {"Course Schedule"}
                </Typography>
            </Box>
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
