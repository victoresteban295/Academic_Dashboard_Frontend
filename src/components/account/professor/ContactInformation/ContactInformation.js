import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ContactInfoBackdrop from "./ContactInfoBackdrop";
import { useState } from "react";

const ContactInformation = ({ 
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    email, 
    phone,
    changeAccount, 
    handleOpenAlert
}) => {

    /* Edit Contact Information Backdrop */
    const [open, setOpen] = useState(false);
    const openBackdrop = () => {
        setOpen(true);
    }
    const closeBackdrop = () => {
        setOpen(false);
    }

    /* Format Phone Number to (xxx) xxx-xxxx */
    const formatPhone = (phone) => {
        if(phone.length === 10) {
            return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
        } 
        return null;
    }
    const phoneNum = formatPhone(phone);

    return (
        <Stack
            className="contact-information-widget"
            spacing={1}
            sx={{
                width: '100%',
            }}
        >
            <ContactInfoBackdrop 
                open={open}
                handleClose={closeBackdrop}
                department={department}
                academicRole={academicRole}
                apptYear={apptYear}
                officeBuilding={officeBuilding} 
                officeRoom={officeRoom}
                email={email}
                phone={phone}
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
                        {"Contact Information"}
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
                    {"Add ways for students to contact you"}
                </Typography>
            </Stack>
            <Grid
                container
                rowSpacing={2}
                sx={{
                    px: {
                        fold: 2,
                        mobile: 2,
                        tablet: 4,
                        desktop: 4,
                    },
                    width: '100%',
                }}
            >
                <Grid
                    item
                    fold={12}
                    mobile={12}
                    tablet={6}
                    desktop={6}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Email"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {email}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    fold={12}
                    mobile={12}
                    tablet={6}
                    desktop={6}
                >
                    <Stack
                        spacing={0} 
                    >
                        <Typography
                            variant="body2"
                        >
                            {"Phone"}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '700'
                            }}
                        >
                            {phoneNum}
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

export default ContactInformation;
