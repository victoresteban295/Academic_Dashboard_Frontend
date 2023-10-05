import { Box, Divider, Stack, Typography } from "@mui/material";

const StudentReviewInput = ({ academicYear, major, minor, concentration }) => {

    /* If Student has no minor or concentration, 
     * it won't get displayed */
    let hasMinor
    if(minor === '') {
        hasMinor = {
            display: 'none',
        };
    } else {
        hasMinor = {}
    }

    let hasConcen
    if(concentration === '') {
        hasConcen = {
            display: 'none',
        };
    } else {
        hasConcen = {}
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
                    {academicYear}
                </Typography>
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
                    Major:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {major}
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    width: '100%',
                    flexGrow: 1,
                    ...hasMinor,
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
                    {minor}
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{
                    width: '100%',
                    flexGrow: 1,
                    ...hasConcen,
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
                    {concentration}
                </Typography>
            </Stack>
        </Box>
    ) 
}

export default StudentReviewInput;
