import { Box, Divider, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const MobileCourseStats = ({ numOfStudents, crsAttendance, crsGrade }) => {
    return (
        <Stack
            className="course-stats-widget"
            direction={{
                fold: 'column',
                mobile: 'row',
                tablet: 'row',
                desktop: 'row',
            }}
            spacing={1}
            justifyContent="space-evenly"
            divider={
                <Divider 
                    orientation="vertical" 
                    flexItem 
                />
            }
            sx={{
                display: {
                    fold: 'flex',
                    mobile: 'flex',
                    tablet: 'flex',
                    desktop: 'none',
                },
                width: '100%',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
                px: 0.5,
            }}
        >
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                    }}
                >
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            alignSelf: 'flex-end',
                            color: 'primary.main',
                        }}
                    >
                        {numOfStudents}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            alignSelf: 'flex-end',
                        }}
                    >
                        {"Students"}
                    </Typography>
                </Box>
            </Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Gauge 
                    value={crsAttendance}
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

export default MobileCourseStats;
