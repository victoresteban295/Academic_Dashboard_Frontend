import { Divider, Stack, Typography } from "@mui/material";

const WeeklySchedule = ({ strDate, endDate }) => {
    return (
        <Stack
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Stack
                sx={{
                    px: 2,
                    bgcolor: 'primary.main',
                    borderRadius: '5px 5px 0 0',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {`${strDate} - ${endDate}`}
                </Typography>
            </Stack>
            <Stack
                spacing={1}
                divider={<Divider />}
                sx={{
                    p: 2,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-evenly" 
                >
                    <Typography
                        className="task"
                        variant="body1"
                        sx={{
                            borderRadius: '5px',
                            px: 0.5,
                            fontWeight: '700',
                            bgcolor: '#c1c1c1',
                        }}
                    >
                        {"Assignment"}
                    </Typography>
                    <Typography
                        className="due-date"
                        variant="body1"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Feb 20"}
                    </Typography>
                    <Typography
                        className="title"
                        variant="body1"
                    >
                        {"Homework 11: Ch. 27 - Ch. 28"}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-evenly" 
                >
                    <Typography
                        className="task"
                        variant="body1"
                        sx={{
                            borderRadius: '5px',
                            px: 0.5,
                            fontWeight: '700',
                            bgcolor: '#c1c1c1',
                        }}
                    >
                        {"Assignment"}
                    </Typography>
                    <Typography
                        className="due-date"
                        variant="body1"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Feb 23"}
                    </Typography>
                    <Typography
                        className="title"
                        variant="body1"
                    >
                        {"Homework 12: Ch. 29 - Ch. 31"}
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default WeeklySchedule;
