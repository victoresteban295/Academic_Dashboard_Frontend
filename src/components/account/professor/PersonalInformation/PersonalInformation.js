import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useState } from "react";
import PersonalInfoBackdrop from "./PersonalInfoBackdrop";

const PersonalInformation = ({ 
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    changeAccount, 
    handleOpenAlert
}) => {

    /* Edit Personal Information Backdrop */
    const [open, setOpen] = useState(false);
    const openBackdrop = () => {
        setOpen(true);
    }
    const closeBackdrop = () => {
        setOpen(false);
    }

    return (
        <Stack
            className="professors-information-widget"
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
            <PersonalInfoBackdrop 
                open={open}
                handleClose={closeBackdrop}
                department={department}
                academicRole={academicRole}
                apptYear={apptYear}
                officeBuilding={officeBuilding} 
                officeRoom={officeRoom}
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
                    {"Academic information about you as a professor"}
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
                            {"Department"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {department}
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
                            {"Academic Role"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {academicRole}
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
                            {"Appointed Year"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {apptYear}
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
                            {"Office Building"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {officeBuilding}
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
                            {"Room"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {officeRoom}
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

export default PersonalInformation;
