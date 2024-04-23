import { Grow, Typography } from "@mui/material";

const Tasks = ({
    tab
}) => {
    return (
        <>
            {tab === "tasks" && (
                <Grow in={true}>
                    <Stack>
                        <Box>

                        </Box>
                    </Stack>
                </Grow>
            )}
        </>

    )
}

export default Tasks;
