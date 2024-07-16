import { getGradeDistribution } from "@/lib/utils/courses/frontend/modifyTasks";
import { Box, Stack, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

const AvgGradeBar = ({ totalScore, gradedStudents }) => {
    const series = getGradeDistribution(totalScore, gradedStudents);

    return (
        <Stack
            sx={{
                flexGrow: 1,
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
                    {"Grade Distribution"}
                </Typography>
            </Box>
            <Box
                className="avggradebar-gauge"
                sx={{
                    px: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {gradedStudents.length === 0 && (
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'absolute',
                            justifySelf: 'center',
                            alignSelf: 'center',
                        }}
                    >
                        {"No Graded Students"}
                    </Typography>
                )}
                <BarChart 
                    slotProps={{
                        noDataOverlay: { message: ''},
                    }}
                    series={series}
                    height={200}
                    xAxis={[{ 
                        scaleType: 'band', 
                        data: ["A", "B", "C", "D", "F"], 
                    }]}
                    /* series={[{ data: [13, 18, 5, 0, 3], color: '#78a1bb' }]} */
                />
            </Box>
        </Stack>
    )
}

export default AvgGradeBar;
