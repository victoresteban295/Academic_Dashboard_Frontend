import { Avatar, Stack, Typography } from "@mui/material";
import { Apartment, Email, LocalPhone } from "@mui/icons-material";

const ProfessorInformation = () => {
    return (
        <Stack
            justifyContent="space-between"
            spacing={2}
            sx={{
                width: "100%",
                height: '100%',
                minHeight: '250px',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
                px: 4,
            }}
        >
            <Typography
                variant="body1"
                align="left"
                sx={{
                    fontWeight: '700',
                    color: 'primary.main',
                }}
            >
                {"Instructor Information"} 
            </Typography>
            <Stack
                direction={{
                    fold: 'column',
                    mobile: 'row',
                    tablet: 'row',
                    desktop: 'row',
                }}
                alignItems="center"
                spacing={1}
            >
                <Avatar
                    sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                    }}
                >
                    <Apartment /> 
                </Avatar>
                <Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"Office"}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '700',
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"Palenske Hall 230"}
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction={{
                    fold: 'column',
                    mobile: 'row',
                    tablet: 'row',
                    desktop: 'row',
                }}
                alignItems="center"
                spacing={1}
            >
                <Avatar
                    sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                    }}
                >
                    <Email /> 
                </Avatar>
                <Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"Email"}
                    </Typography>
                    <Typography
                        variant="body2"
                        noWrap={true}
                        sx={{
                            fontWeight: '700',
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"demoprofessor@college.edu"}
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                direction={{
                    fold: 'column',
                    mobile: 'row',
                    tablet: 'row',
                    desktop: 'row',
                }}
                alignItems="center"
                spacing={1}
            >
                <Avatar
                    sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                    }}
                >
                    <LocalPhone /> 
                </Avatar>
                <Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"Phone"}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: '700',
                            textAlign: {
                                fold: 'center',
                                mobile: 'left',
                                tablet: 'left',
                                desktop: 'left'
                            }
                        }}
                    >
                        {"(323) 232-2323"}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProfessorInformation;
