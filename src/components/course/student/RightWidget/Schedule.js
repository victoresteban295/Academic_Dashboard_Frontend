import { Divider, Stack, Typography } from "@mui/material";

const Schedule = ({ location, days, startTime, endTime }) => {
    return (
        <Stack
            sx={{
                px: 2,
            }}
        >
                <Typography
                    variant="body1"
                >
                    {location}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {`${startTime} - ${endTime}`}
                </Typography>
                <Stack
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    spacing={1}
                    divider={
                        <Divider 
                            orientation="vertical"
                            flexItem
                        />
                    }
                >
                    {days.map(day => {
                        return (
                            <Typography
                                variant="body1"
                            >
                                {day}
                            </Typography>
                        )
                    })}
                </Stack>
        </Stack>
    )
}

export default Schedule;
