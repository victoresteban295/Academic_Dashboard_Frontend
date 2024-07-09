import { Box, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const LeftToGrade = ({ gradedStudents, notGradedStudents} ) => {
    const courseSize = gradedStudents.length + notGradedStudents.length;

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
                    {"Graded Students"}
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
                    value={gradedStudents.length}
                    valueMax={courseSize}
                    height={200}
                    cornerRadius="50%"
                    text={({ value, valueMax }) => `${value} / ${valueMax}`}
                    sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 25,
                        },
                    }}
                />
            </Box>
        </Stack>
    )
}

export default LeftToGrade;
