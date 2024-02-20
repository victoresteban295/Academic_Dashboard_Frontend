import { Grow, Box, Divider, Typography, Stack, Grid } from "@mui/material"
import WeeklySchedule from "../WeeklySchedule";

const Upcoming = ({ tab }) => {
    return (
        <>
            {tab === "upcoming" && (
                <Grow in={true}>
                    <Stack
                        spacing={2} 
                        sx={{
                            width:'100%',
                        }}
                    >
                        <WeeklySchedule 
                            strDate="February 19"
                            endDate="February 25"
                        />
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Upcoming;
