import { Divider, Stack, Typography } from "@mui/material";

const AccountReviewInput = ({ 
    profileType, 
    schoolName, 
    firstname, 
    middlename, 
    lastname, 
    birthMonth, 
    birthDay,
    birthYear,
    email,
    phone,
    username,
    password}) => {

    const hiddenPassword = (length) => {
        let hidden = '';
        for(let i = 0; i < length; i++) {
            hidden += '*';
        } 
        return hidden;
    }

    return (
        <>
            <Stack
                id='review-academic-institution-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='review-academic-institution-section-title'
                    className='form-section-title'
                    spacing={0}
                    sx={{
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
                <Stack
                    id='review-academic-institution-input-fields'
                    className='form-section-input-fields'
                    spacing={{xs: 2, sm: 0}}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {profileType === 'STUDENT' ? 'Student' : 'Professor'}
                        </Typography>
                    </Stack>
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {schoolName}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                id='review-personal-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='review-personal-information-section-title'
                    className='form-section-title'
                    spacing={0}
                    sx={{
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
                <Stack
                    id='review-personal-information-input-fields'
                    className='form-section-input-fields'
                    spacing={{xs: 2, sm: 0}}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {firstname} {middlename} {lastname}
                        </Typography>
                    </Stack>
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {birthMonth} {birthDay}, {birthYear}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                id='review-account-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='review-account-information-section-title'
                    className='form-section-title'
                    spacing={0}
                    sx={{
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
                <Stack
                    id='review-account-information-input-fields'
                    className='form-section-input-fields'
                    spacing={{xs: 2, sm: 0}}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {email}
                        </Typography>
                    </Stack>
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {phone}
                        </Typography>
                    </Stack>
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {username}
                        </Typography>
                    </Stack>
                    <Stack
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                            {hiddenPassword(password)}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default AccountReviewInput;
