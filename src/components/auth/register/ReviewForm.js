import { Box, Divider, Stack, Typography } from "@mui/material";
import StudentReview from "./StudentReview";
import ProfessorReview from "./ProfessorReview";

const ReviewForm = (props) => {
    const hiddenPassword = (length) => {
        let hidden = '';
        for(let i = 0; i < length; i++) {
            hidden += '*';
        } 
        return hidden;
    }

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
                        Academic Institution
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
                                fontWeight: "400",
                            }}
                        >
                            Profile Type: 
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.profileType === 'STUDENT' ? 'Student' : 'Professor'}
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
                            Academic Institution: 
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.institution}
                        </Typography>
                    </Stack>
                </Box>
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
                        Personal Information
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
                                fontWeight: "400",
                            }}
                        >
                            Name:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.firstname} {props.middlename} {props.lastname}
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
                            Birthday:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.birthMonth} {props.birthDay}, {props.birthYear}
                        </Typography>
                    </Stack>
                </Box>
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
                        Account Information
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
                                fontWeight: "400",
                            }}
                        >
                            Email:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.email}
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
                            Phone:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.phone}
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
                            Username:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {props.username}
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
                            Password:
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            {hiddenPassword(props.password)}
                        </Typography>
                    </Stack>
                </Box>
                {props.profileType === 'STUDENT' ? (
                    <StudentReview
                        academicYear={props.academicYear}
                        major={props.major}
                        minor={props.minor}
                        concentration={props.concentration}
                    />
                ) : (
                    <ProfessorReview
                        academicRole={props.academicRole} 
                        apptYear={props.apptYear}
                        department={props.department}
                        officeBuilding={props.officeBuilding}
                        officeRoom={props.officeRoom}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default ReviewForm;
