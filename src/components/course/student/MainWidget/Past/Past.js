import { Grow, Stack, Typography } from "@mui/material";

const Past = ({ tab }) => {
    return (
        <>
            {tab === "past" && (
                <Grow in={true}>
                    <Stack
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="h5"
                        >
                            Past Tab
                        </Typography>
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Past;
