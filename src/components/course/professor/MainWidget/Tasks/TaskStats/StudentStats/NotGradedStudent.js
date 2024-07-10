import { HistoryEdu, MoreVert } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import AddGradeBackdrop from "./Backdrops/AddGradeBackdrop";
import { useState } from "react";

const NotGradedStudent = ({ 
    studId,
    name,
    gradeLvl,
    gradedStudents, 
    notGradedStudents,
    handleGradedStudents,
    handleNotGradedStudents
}) => {

    /* Add Grade Backdrop */
    const [openAddGrade, setOpenAddGrade] = useState(false);
    const handleOpenAddGrade = () => {
        setOpenAddGrade(true);
    }
    const handleCloseAddGrade = () => {
        setOpenAddGrade(false);
    }

    return (
        <Stack
            key={studId}
            className="not-graded-student"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                p: 1,
            }}
        >
            <AddGradeBackdrop 
                studId={studId}
                name={name}
                totalScore={120}
                open={openAddGrade}
                handleClose={handleCloseAddGrade}
            />
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
                        onClick={handleOpenAddGrade}
                        sx={{
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }} 
                    >
                        {"Add Grade"}
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
                    value={0}
                    startAngle={-110}
                    endAngle={110}
                    width={75}
                    height={75}
                    cornerRadius="50%"
                    text={() => `---`}
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

export default NotGradedStudent;
