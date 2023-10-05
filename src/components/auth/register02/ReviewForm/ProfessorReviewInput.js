import { Box, Divider, Stack, Typography } from "@mui/material";

const ProfessorReviewInput = ({ academicRole, apptYear, department, officeBuilding, officeRoom }) => {
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
                    Professor Information
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
                    Academic Role:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {academicRole}
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
                    Appointed Year:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {apptYear}
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
                    Department:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {department}
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
                    Office Building:
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {officeBuilding}
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
                    Room #: 
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {officeRoom}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProfessorReviewInput;
