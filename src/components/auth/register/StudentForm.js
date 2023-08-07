import { Box, Divider, Stack, TextField, Typography } from "@mui/material";

const StudentForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 2,
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
                <TextField id="academic_year" label="Academic Year" variant="outlined" />
                <TextField id="stud_major" label="Major" variant="outlined" />
                <TextField id="stud_minor" label="Minor" variant="outlined" />
                <TextField id="stud_concentration" label="Concentration" variant="outlined" />
            </Stack>
        </Box>
    )
};

export default StudentForm;
