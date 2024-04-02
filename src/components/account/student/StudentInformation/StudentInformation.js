import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import StudentInfoBackdrop from "./StudentInfoBackdrop";

const StudentInformation = ({ 
    gradeLvl,
    major,
    minor,
    concentration,
    changeAccount,
    handleOpenAlert
}) => {

    /* Edit Student Information Backdrop */
    const [open, setOpen] = useState(false);
    const openBackdrop = () => {
        setOpen(true);
    }
    const closeBackdrop = () => {
        setOpen(false);
    }

    return (
        <Stack
            className="student-information-widget"
            spacing={1}
            sx={{
                px: {
                    fold: 2,
                    mobile: 2,
                    tablet: 4,
                    desktop: 4,
                },
                py: 2,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                width: '100%',
            }}
        >
            <StudentInfoBackdrop 
                open={open}
                handleClose={closeBackdrop}
                gradeLvl={gradeLvl}
                major={major}
                minor={minor}
                concentration={concentration}
                changeAccount={changeAccount}
                handleOpenAlert={handleOpenAlert}
            />
            <Stack
                className="title-section"
                spacing={0}
                sx={{
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                        }}
                    >
                        {"General Information"}
                    </Typography>
                    <Button
                        startIcon={<EditOutlined />}
                        onClick={openBackdrop}
                        variant="text"
                        size="small"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'flex',
                            },
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        Edit
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Academic information about you as a student"}
                </Typography>
            </Stack>
            <Grid
                container
                rowSpacing={2}
                sx={{
                    width: '100%',
                }}
            >
                <Grid
                    item
                    fold={12}
                    mobile={6}
                    tablet={6}
                    desktop={4}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Grade Level"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {gradeLvl}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    fold={12}
                    mobile={6}
                    tablet={6}
                    desktop={4}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Major"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {major}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    fold={12}
                    mobile={6}
                    tablet={6}
                    desktop={4}
                    sx={{
                        display: minor === "" ? "none" : "block",
                    }}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Minor"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {minor}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    fold={12}
                    mobile={6}
                    tablet={6}
                    desktop={4}
                    sx={{
                        display: concentration === "" ? "none" : "block",
                    }}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Concentration"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {concentration}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: {
                        fold: 'flex',
                        mobile: 'flex',
                        tablet: 'flex',
                        desktop: 'none',
                    },
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    startIcon={<EditOutlined />}
                    onClick={openBackdrop}
                    variant="text"
                    size="small"
                    sx={{
                        fontWeight: '700',
                        bgcolor: 'primary.light',
                    }}
                >
                    Edit
                </Button>
            </Box>
        </Stack>

    )
}

export default StudentInformation;
