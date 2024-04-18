import { Avatar, Box, Divider, Grow, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Apartment, AssignmentInd, Email, LocalPhone } from "@mui/icons-material";
import InfoSection from "./InfoSection";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import EditCourseDesBackdrop from "../../Backdrop/EditCourseDesBackdrop";
import CourseDetails from "./CourseDetails/CourseDetails";
import GradeComposition from "./CourseDetails/GradeComposition";

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
    const days01 = ["Mon", "Thu", "Fri"];
    const days02 = ["Tue", "Wed"];


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
            {/* Testing New Course Title Widget */}
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
            <Stack
                direction="row"
                spacing={1}
            >
                <Stack
                    justifyContent="space-between"
                    sx={{
                        width: '100%',
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                        py: 2,
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
                        {"Instructor Information"} 
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar
                            sx={{
                                bgcolor: 'primary.light',
                                color: 'primary.main',
                            }}
                        >
                            <Apartment /> 
                        </Avatar>
                        <Stack>
                            <Typography
                                variant="body2"
                                /* sx={{ */
                                /*     fontWeight: '700', */
                                /*     color: 'primary.main', */
                                /* }} */
                            >
                                {"Office"}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {"Palenske Hall 230"}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar
                            sx={{
                                bgcolor: 'primary.light',
                                color: 'primary.main',
                            }}
                        >
                            <Email /> 
                        </Avatar>
                        <Stack>
                            <Typography
                                variant="body2"
                                /* sx={{ */
                                /*     fontWeight: '700', */
                                /*     color: 'primary.main', */
                                /* }} */
                            >
                                {"Email"}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {"markbollman@college.edu"}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar
                            sx={{
                                bgcolor: 'primary.light',
                                color: 'primary.main',
                            }}
                        >
                            <LocalPhone /> 
                        </Avatar>
                        <Stack>
                            <Typography
                                variant="body2"
                                /* sx={{ */
                                /*     fontWeight: '700', */
                                /*     color: 'primary.main', */
                                /* }} */
                            >
                                {"Phone"}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {"(323) 233-2323"}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                        py: 2,
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
                    <GradeComposition 
                    />
                </Stack>
            </Stack>
            {tab === "syllabus" && (
                <Grow in={true}>
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

                        {/* <Stack */}
                        {/*     alignItems="center" */}
                        {/*     justifyContent="center" */}
                        {/*     sx={{ */}
                        {/*         overflowX: 'hidden', */}
                        {/*     }} */}
                        {/* > */}
                        {/*     <Typography */}
                        {/*         variant="h6" */}
                        {/*         align="center" */}
                        {/*         sx={{ */}
                        {/*             fontWeight: '700', */}
                        {/*         }} */}
                        {/*     > */}
                        {/*         {title}  */}
                        {/*     </Typography> */}
                        {/*     <Typography */}
                        {/*         variant="body1" */}
                        {/*         align="center" */}
                        {/*     > */}
                        {/*         {school} */}
                        {/*     </Typography> */}
                        {/*     <Typography */}
                        {/*         variant="body1" */}
                        {/*         align="center" */}
                        {/*     > */}
                        {/*         {semester} */}
                        {/*     </Typography> */}
                        {/* </Stack> */}
                        {/* Syllabus Section */}
                        {/* <Stack */}
                        {/*     spacing={1} */}
                        {/* > */}
                        {/*     <Box */}
                        {/*         sx={{ */}
                        {/*             display: "flex", */}
                        {/*             justifyContent: "space-between", */}
                        {/*             px: 1, */}
                        {/*             color: 'primary.main', */}
                        {/*             borderRadius: '5px', */}
                        {/*             bgcolor: 'primary.light', */}
                        {/*         }} */}
                        {/*     > */}
                        {/*         <Typography */}
                        {/*             variant="h6" */}
                        {/*             sx={{ */}
                        {/*                 fontWeight: '700', */}
                        {/*             }} */}
                        {/*         > */}
                        {/*             {"Course Description"} */}
                        {/*         </Typography> */}
                        {/*         <Tooltip title="Edit"> */}
                        {/*             <IconButton */}
                        {/*                 onClick={handleOpenEditDescr} */}
                        {/*                 size='small' */}
                        {/*             > */}
                        {/*                 <Edit fontSize='inherit' /> */}
                        {/*             </IconButton> */}
                        {/*         </Tooltip> */}
                        {/*     </Box> */}
                        {/*     <Box */}
                        {/*         sx={{ */}
                        {/*             px: 1, */}
                        {/*         }} */}
                        {/*     > */}
                        {/*         <Typography */}
                        {/*             variant="body1" */}
                        {/*             paragraph={true} */}
                        {/*         > */}
                        {/*             {descr} */}
                        {/*         </Typography> */}
                        {/*     </Box> */}
                        {/* </Stack> */}
                        {/* <CourseDetails  */}
                        {/* />  */}
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
                </Grow>
            )}
        </>
    )
}

export default Syllabus;
