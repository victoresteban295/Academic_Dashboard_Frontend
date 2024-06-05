"use client"
import { Grid, Grow, Stack, Typography } from "@mui/material";
import InfoSection from "./InfoSection";
import ProfessorInformation from "./ProfessorInformation";
import GradeComposition from "./GradeComposition";
import EmptySyllabus from "./EmptySyllabus";
import { useState } from "react";
import { getCourse } from "@/lib/data/course/professor";
import dayjs from "dayjs";
import AlertPopUpMsg from "@/components/AlertPopUpMsg";
import CourseDescription from "./CourseDescription";

const Syllabus = ({ course }) => {

    /* ********************************* */
    /* State Value: Error Handling PopUp */
    /* ********************************* */
    const [errorMsg, setErrorMsg] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = (msg) => {
        setErrorMsg(msg);
        setOpenAlert(true);
    }
    const handleCloseAlert = () => {
        setErrorMsg('');
        setOpenAlert(false);
    }

    /* *********************************** */
    /* Fetch Dynamic Data: Coure Syllabus  */
    /* *********************************** */
    const todayDateTime = dayjs();

    /* Mocked Fetch Data */
    const { title, description, gradeComp, sections } = getCourse(course, todayDateTime);

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
                <AlertPopUpMsg
                    open={openAlert}
                    handleClose={handleCloseAlert}
                    errorMsg={errorMsg}
                />
                <CourseDescription 
                    title={title}
                    crsDescription={description}
                    instructor={"Taught by Dr.Professor"}
                />
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
