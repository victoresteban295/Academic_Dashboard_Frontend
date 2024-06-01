import { Grid, Grow, Stack, Typography } from "@mui/material";
import InfoSection from "./InfoSection";
import ProfessorInformation from "./ProfessorInformation";
import GradeComposition from "./GradeComposition";
import EmptySyllabus from "./EmptySyllabus";
import { useState } from "react";

const Syllabus = ({ 
    title, 
    description,
    gradeComp,
    sections,
    handleOpenAlert
}) => {

    /* State Value: Syllabus Section */
    const [syllabusSections, setSyllabusSections] = useState(sections);
    const changeSyllabusSections = (updatedSections) => {
        setSyllabusSections(updatedSections)
    }

    return (
        <Grow in={true}>
            <Stack
                spacing={2}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                        width: '100%',
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                        py: 2,
                        px: 4,
                    }}
                >
                    <Stack
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={1}
                    >
                        <Stack
                            spacing={0}
                        >
                            <Typography
                                variant="h6"
                                align="left"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {title} 
                            </Typography>
                            <Typography
                                variant="body2"
                                align="left"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'primary.main',
                                }}
                            >
                                {"Taught by Dr.Professor"}
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body1"
                            align="left"
                        >
                            {description}
                        </Typography>
                    </Stack>
                </Stack>
                <Grid
                    container
                    gap={2}
                    sx={{
                        display: {
                            fold: 'none',
                            mobile: 'none',
                            tablet: 'flex',
                            desktop: 'flex'
                        }
                    }}
                >
                    <Grid
                        item
                        fold='auto'
                        mobile
                        tablet
                        desktop
                    >
                        <ProfessorInformation
                        />
                    </Grid>
                    <Grid
                        item
                        mobile
                        tablet
                        desktop
                        sx={{
                            minWidth: '400px',
                        }}
                    >
                        <GradeComposition
                            gradeComp={gradeComp}
                            handleOpenAlert={handleOpenAlert}
                        />
                    </Grid>
                </Grid>
                <Stack
                    spacing={2}
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'flex',
                            tablet: 'none',
                            desktop: 'none'
                        }
                    }}
                >
                    <ProfessorInformation
                    />
                    <GradeComposition
                        gradeComp={gradeComp}
                        handleOpenAlert={handleOpenAlert}
                    />
                </Stack>
                <Stack
                    spacing={2}
                    sx={{
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                        py: {
                            fold: 2,
                            mobile: 2,
                            tablet: 4,
                            desktop: 4,
                        },
                        px: {
                            fold: 2,
                            mobile: 2,
                            tablet: 2,
                            desktop: 4,
                        }
                    }}
                >
                    {syllabusSections.length === 0 ? (
                        <EmptySyllabus 
                            changeInfoSections={changeSyllabusSections}
                            handleOpenAlert={handleOpenAlert}
                        />
                    ): (
                        syllabusSections.map(section => {
                            const { index, title, info } = section;
                            return (
                                <InfoSection 
                                    key={title}
                                    index={index}
                                    title={title}
                                    info={info}
                                    infos={syllabusSections}
                                    changeInfoSections={changeSyllabusSections}
                                    handleOpenAlert={handleOpenAlert}
                                />
                            )
                        }) 
                    )}
                </Stack>
            </Stack>
        </Grow>
    )
}

export default Syllabus;
