import { Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Gauge, PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { useState } from "react";
import EditGradeCompBackdrop from "../../Backdrop/EditGradeCompBackdrop/EditGradeCompBackdrop";

const GradeComposition = ({ gradeComp, handleOpenAlert }) => {

    /* State Value: Pie's Slices */
    const [gradeComposition, setGradeComposition] = useState(gradeComp);
    const changeGradeComposition = (newGradeComp) => {
        setGradeComposition(newGradeComp);
    }

    /* Backdrop Menu: Edit Grade Composition */
    const [openGradeComp, setOpenGradeComp] = useState(false);
    const handleOpenGradeComp = () => {
        setOpenGradeComp(true);
    }
    const handleCloseGradeComp = () => {
        setOpenGradeComp(false);
    }

    /* Pie Chart */
    const colors = ["#78a1bb", "#c7eaff", "#9bd2f5", "#dcf2ff"]
    const formatGradeComp = () => {
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
    const data = formatGradeComp();

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
            <EditGradeCompBackdrop
                open={openGradeComp}
                handleClose={handleCloseGradeComp}
                gradeComposition={gradeComposition}
                changeGradeComposition={changeGradeComposition}
                handleOpenAlert={handleOpenAlert}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
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
                    {"Grade Composition"} 
                </Typography>
                <IconButton size="small" onClick={handleOpenGradeComp}>
                    <Edit fontSize="inherit" /> 
                </IconButton>
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
                {gradeComposition.map((data) => {
                    const { category, percentage } = data;
                    return (
                        <Stack
                            key={category}
                            spacing={0}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Gauge 
                                value={Number(percentage)}
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
                                {category}
                            </Typography>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default GradeComposition;
