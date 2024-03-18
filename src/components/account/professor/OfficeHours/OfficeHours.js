import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"

const OfficeHours = () => {
    return (
        <Stack
            className="professors-office-hours"
            sx={{
                px: 4,
                py: 2,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                width: '100%',
                height: '200px',
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
                        startIcon={<EditOutlined />}
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
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Time frame in which student can visit your office for academic assitance"}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default OfficeHours;
