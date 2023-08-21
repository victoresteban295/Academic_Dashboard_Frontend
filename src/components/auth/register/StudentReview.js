import { Box, Divider, Stack, Typography } from "@mui/material";

const StudentReview = (props) => {
    
    const isMajor = props.major === '' ? false : true;
    const isMinor = props.minor === '' ? false : true;
    const isConcentration = props.concentration === '' ? false : true;

    return (
        <Box>
            <Stack
                spacing={0}
                sx={{
                    width: '100%',
                    my: 1,
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    Student Information
                </Typography>
                <Divider />
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "400",
                    }}
                >
                    Academic Year:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {props.academicYear}
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    display: isMajor ? 'inline' : 'none',
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "400",
                    }}
                >
                    Major:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {props.major}
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    display: isMinor ? 'inline' : 'none',
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "400",
                    }}
                >
                    Minor:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {props.minor}
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    display: isConcentration ? 'inline' : 'none',
                    width: '100%',
                    flexGrow: 1,
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "400",
                    }}
                >
                    Concentration:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {props.concentration}
                </Typography>
            </Stack>
        </Box>
    ) 
};

export default StudentReview;
