import { Box, Stack, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const GradeComposition = () => {
    const data = [
        { id: "assignment", value: 20, color: '#78a1bb', label: 'Assignment' },
        { id: "quiz", value: 30, color: '#8bbbd8', label: 'Quiz' },
        { id: "exam", value: 50, color: '#9bd2f5', label: 'Exam' },
        { id: "project", value: 20, color: '#c7eaff', label: 'Project' },
        { id: "paper", value: 50, color: '#dcf2ff', label: 'Paper' },
        { id: "other", value: 30, color: '#dde9f0', label: 'Other' },
    ]

    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };

    return (
        <>
            <Box
                sx={{
                    px: 1,
                    display: {
                        fold: 'none',
                        mobile: 'none',
                        tablet: 'flex',
                        desktop: 'flex',
                    },
                    justifyContent: 'center',
                }}
            >
                <PieChart 
                    series={[
                        {
                            data,
                            arcLabel: getArcLabel,
                            cx: 150,
                            cy: 100,
                        },
                    ]}
                    sx={{
                        [`&.${pieArcLabelClasses.root}`]: {
                            fill: 'primary.text',
                            fontSize: 14,
                        },
                        bgcolor: 'tan',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: {
                                vertical: 'bottom',
                                horizontal: 'middle',
                            },
                            padding: 0,
                        },
                    }}
                    width={300}
                    height={200}
                />
            </Box>
            <Box
                sx={{
                    px: 1,
                    display: {
                        fold: 'none',
                        mobile: 'flex',
                        tablet: 'none',
                        desktop: 'none',
                    },
                }}
            >
                <PieChart 
                    margin={{ top: 0, bottom: 75, left: 0, right: 0 }}
                    series={[
                        {
                            data,
                            arcLabel: getArcLabel,
                            outerRadius: 100,
                        },
                    ]}
                    sx={{
                        [`&.${pieArcLabelClasses.root}`]: {
                            fill: 'primary.text',
                            fontSize: 7,
                        },
                    }}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: {
                                vertical: 'bottom',
                                horizontal: 'middle',
                            },
                            padding: 0,
                        },
                    }}
                    width={300}
                    height={300}
                />
            </Box>
        </>
    )
}

export default GradeComposition;
