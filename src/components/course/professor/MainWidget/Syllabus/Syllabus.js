import { Avatar, Box, Divider, Grid, Grow, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import InfoSection from "./InfoSection";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import EditCourseDesBackdrop from "../../Backdrop/EditCourseDesBackdrop";
import ProfessorInformation from "./ProfessorInformation";
import GradeComposition from "./GradeComposition";

const Syllabus = ({ 
    tab, 
    title, 
    school, 
    semester, 
    description,
    infos,
    changeInfoSections,
    handleOpenAlert
}) => {

    /* State Value */
    const [descr, setDescr] = useState(description);
    const changeDescription = (updatedDescr) => {
        setDescr(updatedDescr);
    }

    /* Backdrop Menu State Value & Function */
    /* Edit Course Description */
    const [openEditDescr, setOpenEditDescr] = useState(false);
    const handleOpenEditDescr = () => {
        setOpenEditDescr(true);
    }
    const handleCloseEditDescr = () => {
        setOpenEditDescr(false);
    }

    return (
        <>
            {tab === "syllabus" && (
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
                                        {"Taught by Dr.Bollman"}
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body1"
                                    align="left"
                                >
                                    {"This course serves as an introduction to the fundamental concepts and techniques of differential equations, a cornerstone of mathematics with wide-ranging applications in physics, engineering, biology, economics, and many other fields. "}
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
                            <EditCourseDesBackdrop 
                                open={openEditDescr}
                                handleClose={handleCloseEditDescr}
                                description={descr}
                                changeDescription={changeDescription}
                                handleOpenAlert={handleOpenAlert}
                            />

                            {infos.map(infoSection => {
                                const { index, title, info } = infoSection;
                                return (
                                    <InfoSection 
                                        key={title}
                                        index={index}
                                        title={title}
                                        info={info}
                                        infos={infos}
                                        changeInfoSections={changeInfoSections}
                                        handleOpenAlert={handleOpenAlert}
                                    />
                                )
                            })} 
                        </Stack>
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Syllabus;
