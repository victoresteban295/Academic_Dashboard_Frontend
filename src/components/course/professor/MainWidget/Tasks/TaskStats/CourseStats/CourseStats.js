import { Grid } from "@mui/material";
import LeftToGrade from "./LeftToGrade";
import AvgGradeBar from "./AvgGradeBar";
import AvgGradeGauge from "./AvgGradeGauge";

const CourseStats = ({
    totalScore,
    gradedStudents,
    notGradedStudents
}) => {
    return (
        <>
            <Grid
                container
                gap={1}
            >
                <Grid
                    item
                    fold
                    mobile
                    tablet
                    desktop
                    sx={{
                        minWidth: {
                            fold: '100%',
                            mobile: '288px',
                            tablet: '288px',
                            desktop: '288px',
                        },
                    }}
                >
                    {(notGradedStudents.length === 0) ? (
                        <AvgGradeGauge 
                            totalScore={totalScore}
                            gradedStudents={gradedStudents}
                        />
                    ) : (
                        <LeftToGrade 
                            gradedStudents={gradedStudents}
                            notGradedStudents={notGradedStudents}
                        />
                    )}
                </Grid>
                <Grid
                    item
                    fold
                    mobile
                    tablet
                    desktop
                    sx={{
                        minWidth: {
                            fold: '100%',
                            mobile: '288px',
                            tablet: '288px',
                            desktop: '288px',
                        },
                    }}
                >
                    <AvgGradeBar 
                        totalScore={totalScore}
                        gradedStudents={gradedStudents}
                    />
                </Grid>
            </Grid>
        </>

    )
}

export default CourseStats;
