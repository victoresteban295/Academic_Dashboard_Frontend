import { Divider, Stack, Typography } from "@mui/material";

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
        <>
            <Stack
                id='review-student-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='review-student-information-section-title'
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
                        Student Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    id='review-student-information-input-fields'
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
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                        className='review-input-field'
                        spacing={{xs: 0, sm: 2}}
                        direction={{xs: "column", sm: "row"}}
                        sx={{
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
                </Stack>
            </Stack>
        </>
    ) 
}

export default StudentReviewInput;
