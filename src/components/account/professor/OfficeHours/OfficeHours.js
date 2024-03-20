import { Add, EditOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material"

const OfficeHours = () => {
    return (
        <Stack
            className="professors-office-hours"
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
                        {"Office Hours"}
                    </Typography>
                    <Button
                        startIcon={<Add />}
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
                        Add
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Time frame in which students can visit your office for academic assistance"}
                </Typography>
            </Stack>
            <Grid
                container
                rowSpacing={2}
                sx={{
                    width: '100%',
                }}
            >
                
            </Grid>
        </Stack>
    )
}

export default OfficeHours;
