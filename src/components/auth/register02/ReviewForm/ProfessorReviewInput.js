import { Divider, Stack, Typography } from "@mui/material";

const ProfessorReviewInput = ({ academicRole, apptYear, department, officeBuilding, officeRoom }) => {
    return (
        <>
            <Stack
                id='review-professor-information-section'
                className='form-section'
                spacing={2}
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack
                    id='review-professor-information-section-title'
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
                        Professor Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    id='review-professor-information-input-fields'
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
                </Stack>
            </Stack>
        </>
    )
}

export default ProfessorReviewInput;
