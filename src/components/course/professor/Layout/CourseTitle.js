"use client"
import { Box, Divider, Drawer, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { MenuOpen, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import EditTitleBackdrop from "../Backdrop/EditTitleBackdrop";
import DeleteCourseBackdrop from "../Backdrop/DeleteCourseBackdrop";
import FinalDeleteCourseBackdrop from "../Backdrop/FinalDeleteCourseBackdrop";
import RightWidget from "../RightWidget";

const CourseTitle = ({ 
    courseTitle,
    schedules
}) => {

    /* *************************** */
    /* State Value: Course's Title */
    /* *************************** */
    const [title, setTitle] = useState(courseTitle);
    const changeTitle = (updatedTitle) => {
        setTitle(updatedTitle);
    }

    /* *************************************** */
    /* Options Menu - State Values & Functions */
    /* *************************************** */
    const [optionsAnchor, setOptionsAnchor] = useState(null);
    const openOptions = Boolean(optionsAnchor);
    const handleOpenOptions = (event) => {
        setOptionsAnchor(event.currentTarget);
    }
    const handleCloseOptions = () => {
        setOptionsAnchor(null);
    }

    /* Course Schedule Menu's State Value & Function */ 
    const [scheduleAnchor, setScheduleAnchorEl] = useState(null);
    const openSchedule = Boolean(scheduleAnchor);
    const handleOpenSchedule = (event) => {
        setScheduleAnchorEl(event.currentTarget);
    }
    const handleCloseSchedule = () => {
        setScheduleAnchorEl(null);
    }

    /* ************************************* */
    /* RightWidget - State Value & Functions */
    /* ************************************* */
    const [rightContentAnchor, setRightContentAnchorEl] = useState(null);
    const openRightContent = Boolean(rightContentAnchor);
    const handleOpenRightContent = (event) => {
        setRightContentAnchorEl(event.currentTarget);
    }
    const handleCloseRightContent = () => {
        setRightContentAnchorEl(null);
    }

    /****************************************/
    /* Backdrops - State Value & Function */
    /****************************************/
    /* Rename Course */
    const [openEditTitle, setOpenEditTitle] = useState(false);
    const handleOpenEditTitle = () => {
        setOpenEditTitle(true);
    }
    const handleCloseEditTitle = () => {
        setOpenEditTitle(false);
    }
    /* Delete Course Backdrop */
    const [openDeleteCourse, setOpenDeleteCourse] = useState(false);
    const handleOpenDeleteCourse = () => {
        setOpenDeleteCourse(true);
    }
    const handleCloseDeleteCourse = () => {
        setOpenDeleteCourse(false);
    }
    /* Final Delete Course Backdrop */
    const [openFinalDelete, setOpenFinalDelete] = useState(false);
    const handleOpenFinalDelete = () => {
        handleCloseDeleteCourse();
        setOpenFinalDelete(true);
    }
    const handleCloseFinalDelete = () => {
        setOpenFinalDelete(false);
    }

    return (
        <Box
            className="todays-title-section"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                p: 1,
            }}
        >
            {/* Backdrops */}
            <EditTitleBackdrop 
                open={openEditTitle}
                handleClose={handleCloseEditTitle}
                title={title}
                changeTitle={changeTitle}
            />
            <DeleteCourseBackdrop 
                open={openDeleteCourse}
                handleClose={handleCloseDeleteCourse}
                title={title}
                handleOpenFinalDelete={handleOpenFinalDelete}
            />
            <FinalDeleteCourseBackdrop 
                open={openFinalDelete}
                handleClose={handleCloseFinalDelete}
                title={title}
            />

            <Typography
                align="center"
                variant="h6"
                sx={{
                    fontWeight: '700',
                    overflowX: 'hidden',
                }}
            >
                {title}
            </Typography> 
            <Box
                sx={{
                    display: 'flex',
                    ml: 2,
                }}
            >
                {/* Course Options Menu Icon */}
                <Tooltip title="Options">
                    <IconButton
                        onClick={handleOpenOptions}
                        size='small'
                    >
                        <MoreVert fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Menu
                        anchorEl={optionsAnchor}
                        id="page-options-menu"
                        open={openOptions}
                        onClose={handleCloseOptions}
                        onClick={handleCloseOptions}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem  
                            onClick={handleOpenEditTitle}
                        >
                            Edit Course Title
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            onClick={handleOpenDeleteCourse}
                            sx={{
                                color: '#ef476f',
                            }}
                        >
                            Delete Course
                        </MenuItem>
                    </Menu>

                {/* Course Schedule Menu Icon */}
                <Tooltip
                    title="Course Schedule"
                    sx={{
                        display: {
                            fold: 'flex',
                            mobile: 'flex',
                            tablet: 'flex',
                            desktop: 'none',
                        },
                    }}
                >
                    <IconButton
                        onClick={handleOpenRightContent}
                        size='small'
                    >
                        <MenuOpen fontSize='inherit'/> 
                    </IconButton>
                </Tooltip>
                <Drawer
                    anchor='right'
                    open={openRightContent}
                    onClose={handleCloseRightContent}
                >
                    <Box
                        className='menu-container'
                        sx={{
                            p: 1,
                        }}
                    >
                        <RightWidget
                            courseSchedules={schedules}
                        />
                    </Box>
                </Drawer>
            </Box>
        </Box> 
    )
}

export default CourseTitle;
