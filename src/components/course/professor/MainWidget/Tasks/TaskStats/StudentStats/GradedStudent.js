import { HistoryEdu, MoreVert } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const GradedStudent = ({ 
    studId,
    name,
    gradeLvl,
    taskGrade,
    totalScore,
    gradedStudents, 
    notGradedStudents,
    handleGradedStudents,
    handleNotGradedStudents
}) => {
    const percentage = Math.round((taskGrade/totalScore) * 100);

    return (
        <Stack
            key={studId}
            className="graded-student"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                p: 1,
            }}
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
                    className="student-task-options"
                    direction="row"
                    spacing={1}
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Button
                        variant="text"
                        size="small"
                        startIcon={<HistoryEdu fontSize="small" />}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }} 
                    >
                        {"Edit Grade"}
                    </Button>
                    <IconButton
                        size="small"
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'primary.light',
                        }}
                    >
                        <MoreVert fontSize="inherit"/> 
                    </IconButton>
                </Stack>
            </Stack>
            <Stack
                className="task-grade"
                justifyContent="center"
                alignItems="center"
            >
                <Gauge
                    value={percentage}
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
    )
} 

export default GradedStudent;
