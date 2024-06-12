import { Box, Dialog, Typography } from "@mui/material";

const UnavailableBackdrop = ({ open, message }) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
        >
            <Box
                sx={{
                    p: 2,
                }}
            >
                <Typography
                    align="center"
                    variant="h6"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {message}
                </Typography>
            </Box>
        </Dialog>
    )
}

export default UnavailableBackdrop;
