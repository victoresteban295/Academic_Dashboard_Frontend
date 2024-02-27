import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const Task = ({ task, title, date, note, due }) => {
    const month = dayjs(date, "MM/DD/YY").format("MMM");
    const day = dayjs(date, "MM/DD/YY").format("DD");

    return (
        <Stack
            className="task-widget"
            direction="row"
            spacing={2}
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                p: 1,
            }}
        >
            <Stack
                className="date"
                alignItems="center"
                justifyContent="center"
                sx={{
                    color: "primary.main",
                    borderRadius: '5px',
                    px: 2,
                    py: 0.5,
                    bgcolor: '#e3f3ff',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {day}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {month} 
                </Typography>
            </Stack> 
            <Stack
                className="task-details"
                spacing={0.5}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {title} 
                </Typography>
                <Stack
                    className="task-due-date"
                    direction={{
                        fold: 'column',
                        mobile: 'row',
                        tablet: 'row',
                        desktop: 'row',
                    }}
                    spacing={1}
                >
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Typography
                            className="task"
                            variant="body2"
                            sx={{
                                borderRadius: '5px',
                                px: 0.5,
                                fontWeight: '700',
                                bgcolor: '#c1c1c1',
                            }}
                        >
                            {task}
                        </Typography>
                    </Box>
                    <Typography
                        className="due"
                        variant="body2"
                    >
                        {`Due: ${due}`}
                    </Typography>
                </Stack>
                <Typography
                    className="note"
                    variant="body2"
                >
                    {note}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Task;
