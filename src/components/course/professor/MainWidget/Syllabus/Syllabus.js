import { Box, Grow, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import InfoSection from "./InfoSection";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import EditCourseDesBackdrop from "../../Backdrop/EditCourseDesBackdrop";

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
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                overflowX: 'hidden',
                            }}
                        >
                            <Typography
                                variant="h6"
                                align="center"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {title} 
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                            >
                                {school}
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                            >
                                {semester}
                            </Typography>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    px: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: 'primary.light',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    {"Course Description"}
                                </Typography>
                                <Tooltip title="Edit">
                                    <IconButton
                                        onClick={handleOpenEditDescr}
                                        size='small'
                                    >
                                        <Edit fontSize='inherit' />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    paragraph={true}
                                >
                                    {descr}
                                </Typography>
                            </Box>
                        </Stack>
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
