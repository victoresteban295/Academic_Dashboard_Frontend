import { Box, Divider, Popover, Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";

const TaskDetailsBackdrop = ({ task, title, date, note, due, open, handleClose }) => {
    const dueDate = dayjs(date, "MM/DD/YY").format("MMMM DD, YYYY");

    const handleCloseBackdrop = () => {
        handleClose();
    }

    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{ 
                mt: 10,
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={2}
                sx={{
                    flexGrow: 1,
                    maxWidth: '500px',
                    py: 2,
                    px: 2,
                }}
            >
                <Stack
                    direction="column"
                    spacing={0}
                >
                    <Typography
                        className="title"
                        variant="h6"
                        noWrap={true} 
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {title}
                    </Typography>
                    <Divider flexItem />
                </Stack>
                <Stack
                    spacing={3}
                    sx={{
                        px: 1,
                    }}
                >
                    <Stack
                        direction={{
                            fold: "column",
                            mobile: "column",
                            tablet: "row",
                            desktop: "row",
                        }}
                        spacing={2}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                            }}
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
                                {task}
                            </Typography>
                        </Box>
                        <Stack
                            direction={{
                                fold: "column",
                                mobile: "row",
                                tablet: "row",
                                desktop: "row",
                            }}
                            spacing={2}
                        >
                            <Stack
                                direction="row"
                                spacing={0.5}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    {"Date:"}
                                </Typography>
                                <Typography
                                    className="due-date"
                                    variant="body1"
                                >
                                    {dueDate}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={0.5}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    {"Due:"}
                                </Typography>
                                <Typography
                                    className="due-date"
                                    variant="body1"
                                >
                                    {due}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    {note.trim() != "" && (
                        <TextField 
                            label={
                                <Typography
                                    sx={{
                                        fontWeight: '700',
                                        color: "text.primary"
                                    }}
                                >
                                {"Note"}
                                </Typography>
                            }
                            value={note}
                            fullWidth
                            multiline
                            rows={4}
                        />
                    )}
                </Stack>
            </Stack>
        </Popover>
    )
}

export default TaskDetailsBackdrop;
