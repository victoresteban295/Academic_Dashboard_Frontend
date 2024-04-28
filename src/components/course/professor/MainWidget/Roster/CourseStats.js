import { Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const CourseStats = () => {
    return (
        <Stack
            className="course-stats-widget"
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
                width: '100%',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
                px: 4,
            }}
        >
            <Stack
                className="title-section"
                spacing={0}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {"Math 230: Discrete Mathematics"}
                </Typography>
                <Typography>
                    {"Academic College"} 
                </Typography>
                <Typography>
                    {"Spring 2024"}
                </Typography>
            </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge 
                        value={93}
                        startAngle={-110}
                        endAngle={110}
                        width={100}
                        height={100}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 20,
                            },
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Avg. Attendance"}
                    </Typography>
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge 
                        value={86}
                        startAngle={-110}
                        endAngle={110}
                        width={100}
                        height={100}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 20,
                            },
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {"Avg. Grade"}
                    </Typography>
                </Stack>
        </Stack>
    )
}

export default CourseStats;
