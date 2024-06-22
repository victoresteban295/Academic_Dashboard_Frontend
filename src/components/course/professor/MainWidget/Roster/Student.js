import { ChatBubbleOutline, MoreVert, QueryStats } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const Student = ({ name, gradeLvl, attendance, grade }) => {
    return (
        <Stack
            direction="row"
            className="student-widget"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                px: 1,
                py: 1,
            }}
            spacing={1}
        >
            <Stack
                className="student-name"
                spacing={0.5}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    variant="body1" 
                    sx={{
                        color: 'grey',
                    }}
                >
                    {gradeLvl}
                </Typography>
                <Stack
                    className="mobile-student-options"
                    direction="row"
                    spacing={1}
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'flex',
                            tablet: 'flex',
                            desktop: 'none',
                        }
                    }}
                >
                    <IconButton 
                        size="small" 
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'primary.light',
                        }}
                    >
                        <ChatBubbleOutline fontSize="inherit" />
                    </IconButton>     
                    <IconButton 
                        size="small" 
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'primary.light',
                        }}
                    >
                        <QueryStats fontSize="inherit" />
                    </IconButton>     

                </Stack>
                <Stack
                    className="student-roster-options"
                    direction="row"
                    spacing={1}
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'none',
                            tablet: 'none',
                            desktop: 'flex',
                        }
                    }}
                >
                    <Button
                        variant="text"
                        size="small"
                        startIcon={<ChatBubbleOutline fontSize="small" />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }} 
                    >
                        {"Message"}
                    </Button>
                    <Button
                        variant="text"
                        size="small"
                        startIcon={<QueryStats fontSize="small" />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }} 
                    >
                        {"View Stats"}
                    </Button>
                </Stack>
            </Stack>
            <Stack
                direction="row"
            >
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge
                        value={attendance}
                        startAngle={-110}
                        endAngle={110}
                        width={75}
                        height={75}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 14,
                            },
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Attendance"}
                    </Typography>
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge 
                        value={grade}
                        startAngle={-110}
                        endAngle={110}
                        width={75}
                        height={75}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 14,
                            },
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Grade"}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Student;
