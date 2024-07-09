import { getAverageGrade } from "@/lib/utils/courses/frontend/modifyTasks";
import { Box, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const AvgGradeGauge = ({ gradedStudents }) => {

    //Get Average Class Grade
    const averageGrade = getAverageGrade(gradedStudents);

    return (
        <Stack
            sx={{
                width: '100%',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    px: 4,
                }}
            >
                <Typography
                    variant="body1"
                    align="left"
                    sx={{
                        fontWeight: '700',
                        color: 'primary.main',
                    }}
                >
                    {"Average Grade"}
                </Typography>
            </Box>
            <Box
                className="lefttograde-gauge"
                sx={{
                    px: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Gauge
                    value={averageGrade}
                    height={200}
                    cornerRadius="50%"
                    text={({ value }) => `${value}%`}
                    sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 40,
                        },
                    }}
                />
            </Box>
        </Stack>
    )
}

export default AvgGradeGauge;
