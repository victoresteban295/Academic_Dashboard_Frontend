import { Grid } from "@mui/material";
import LeftToGrade from "./LeftToGrade";
import AvgGradeBar from "./AvgGradeBar";
import AvgGradeGauge from "./AvgGradeGauge";

const CourseStats = () => {
    return (
        <>
            <Grid
                container
                gap={2}
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
                    {/* <AvgGradeGauge  */}
                    {/* /> */}
                    <LeftToGrade 
                    />
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
                    />
                </Grid>
            </Grid>
        </>

    )
}

export default CourseStats;
