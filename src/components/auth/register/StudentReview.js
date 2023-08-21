import { Box, Divider, Stack, Typography } from "@mui/material";

const StudentReview = (props) => {

    let major 
    if(props.major === '') {
        major = {
            display: 'none',
        };
    } else {
        major = {}
    }

    let minor
    if(props.minor === '') {
        minor = {
            display: 'none',
        };
    } else {
        minor = {}
    }

    let concen
    if(props.concentration === '') {
        concen = {
            display: 'none',
        };
    } else {
        concen = {}
    }


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
                    width: '100%',
                    flexGrow: 1,
                    ...major,
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
                    width: '100%',
                    flexGrow: 1,
                    ...minor,
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
                    width: '100%',
                    flexGrow: 1,
                    ...concen,
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
