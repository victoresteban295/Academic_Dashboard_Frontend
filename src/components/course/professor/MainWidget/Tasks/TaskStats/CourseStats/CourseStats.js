import { Grid } from "@mui/material";
import LeftToGrade from "./LeftToGrade";
import AvgGradeBar from "./AvgGradeBar";
import AvgGradeGauge from "./AvgGradeGauge";

const CourseStats = ({
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
                    fold="auto"
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
                    fold="auto"
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
                        gradedStudents={gradedStudents}
                    />
                </Grid>
            </Grid>
        </>

    )
}

export default CourseStats;
