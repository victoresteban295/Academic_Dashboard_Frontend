import { Box, Stack, Typography } from "@mui/material";
import { Gauge, PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { useState } from "react";

const GradeComposition = ({ gradeComp, handleOpenAlert }) => {

    const [gradeComposition, setGradeComposition] = useState(gradeComp);
    const changeGradeComposition = (newGradeComp) => {
        setGradeComposition(newGradeComp);
    }
    const colors = ["#c7eaff", "#dde9f0", "#dcf2ff"]
    const formatGradeComp = (gradeComposition) => {
        const slices = [];
        for(let i = 0; i < gradeComposition.length; i++) {
            const slice = {
                id: gradeComposition[i].category,
                value: Number(gradeComposition[i].percentage),
                label: gradeComposition[i].category,
                color: colors[i]
            }
            slices.push(slice);
        }
        return slices;
    } 

    const data = [
        { id: "assignment", value: 20, color: '#c7eaff', label: 'Assignment' },
        { id: "quiz", value: 30, color: '#dde9f0', label: 'Quiz' },
        { id: "exam", value: 50, color: '#dcf2ff', label: 'Exam' },
        /* { id: "project", value: 20, color: '#78a1bb', label: 'Project' }, */
        /* { id: "paper", value: 50, color: '#9bd2f5', label: 'Paper' }, */
        /* { id: "other", value: 30, color: '#8bbbd8', label: 'Other' }, */
    ]

    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };

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
                    {"Grade Composition"} 
                </Typography>
            </Box>

            {/* Desktop & Tablet Devices */}
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
                        },
                    ]}
                    sx={{
                        [`&.${pieArcLabelClasses.root}`]: {
                            fill: 'primary.text',
                            fontSize: 14,
                        },
                    }}
                    height={200}
                />
            </Box>

            {/* Mobile Devices */}
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

            {/* Foldable Devices */}
            <Stack
                spacing={2}
                sx={{
                    px: 1,
                    display: {
                        fold: 'flex',
                        mobile: 'none',
                        tablet: 'none',
                        desktop: 'none',
                    },
                }}
            >
                <Stack
                    spacing={0}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Gauge 
                        value={86}
                        width={100}
                        height={50}
                        startAngle={-90}
                        endAngle={90}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                    />
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        Assignment
                    </Typography>
                </Stack>
                <Stack
                    spacing={0}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Gauge 
                        value={30}
                        width={100}
                        height={50}
                        startAngle={-90}
                        endAngle={90}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                    />
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        Quiz
                    </Typography>
                </Stack>
                <Stack
                    spacing={0}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Gauge 
                        value={50}
                        width={100}
                        height={50}
                        startAngle={-90}
                        endAngle={90}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
                    />
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        Exam
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default GradeComposition;
