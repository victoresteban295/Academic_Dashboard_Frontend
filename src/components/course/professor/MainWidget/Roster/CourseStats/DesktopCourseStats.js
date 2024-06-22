import { Box, Divider, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const DesktopCourseStats = ({ numOfStudents, crsAttendance, crsGrade }) => {
    return (
        <Stack
            className="course-stats-widget"
            direction="row"
            spacing={1}
            alignItems="flex-end"
            justifyContent="space-evenly"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
                display: {
                    fold: 'none',
                    mobile: 'none',
                    tablet: 'none',
                    desktop: 'flex',
                },
                width: '100%',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
                px: 4,
            }}
        >
            <Stack
                justifyContent="flex-end"
                alignItems="center"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px',
                        height: '90px',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'primary.main',
                        }}
                    >
                        {numOfStudents}
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    {"Students"}
                </Typography>
            </Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Gauge 
                    value={crsAttendance}
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
                    align="center"
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
                    value={crsGrade}
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
                    align="center"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    {"Grade"}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default DesktopCourseStats;
