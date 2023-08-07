import { Box, Divider, Stack, Typography } from "@mui/material";
import StudentReview from "./StudentReview";
import ProfessorReview from "./ProfessorReview";

const ReviewForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 5,
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    maxWidth: '500px',
                    flexGrow: 1,
                }}
            >
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
                        Review Information
                    </Typography>
                    <Divider />
                </Stack>
                <Box>
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
                                fontWeight: "700",
                            }}
                        >
                            Profile Type: 
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            Student
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
                                fontWeight: "700",
                            }}
                        >
                            Academic Instiution: 
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            Albion College
                        </Typography>
                    </Stack>
                </Box>
                <Box>
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
                                fontWeight: "700",
                            }}
                        >
                            Name:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            Victor Manuel Esteban
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
                                fontWeight: "700",
                            }}
                        >
                            Birthday:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            March 19, 1998
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
                                fontWeight: "700",
                            }}
                        >
                            Email:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            victoresteban@email.com
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
                                fontWeight: "700",
                            }}
                        >
                            Phone:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            3239850985
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
                                fontWeight: "700",
                            }}
                        >
                            Username:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "400",
                            }}
                        >
                            vesteban453
                        </Typography>
                    </Stack>
                </Box>
                {/* <StudentReview /> */}
                <ProfessorReview />
            </Stack>
        </Box>
    )
}

export default ReviewForm;
