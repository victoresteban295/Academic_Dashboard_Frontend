import { Box, Divider, Drawer, Grow, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { MenuOpen, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import RightWidget from "../RightWidget";
import EditTitleBackdrop from "../Backdrop/EditTitleBackdrop";

const CourseTitleSection = ({ 
    title,
    instructor, 
    office,
    phone,
    email,
    schedules,
    changeTitle
}) => {

    /* Options Menu's State Value & Functions */
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

    /* Backdrop Menu State Value & Function */
    /* Rename Course */
    const [openEditTitle, setOpenEditTitle] = useState(false);
    const handleOpenEditTitle = () => {
        setOpenEditTitle(true);
    }
    const handleCloseEditTitle = () => {
        setOpenEditTitle(false);
    }

    return (
        <Grow in={true}>
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
                <EditTitleBackdrop 
                    open={openEditTitle}
                    handleClose={handleCloseEditTitle}
                    title={title}
                    changeTitle={changeTitle}
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
                            id="checklist-options-menu"
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
                            <MenuItem  >
                                Create New Task 
                            </MenuItem>
                            <MenuItem  >
                                Add Syllabus Section
                            </MenuItem>
                            <Divider />
                            <MenuItem
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
                            onClick={handleOpenSchedule}
                            size='small'
                        >
                            <MenuOpen fontSize='inherit'/> 
                        </IconButton>
                    </Tooltip>
                    <Drawer
                        anchor='right'
                        open={openSchedule}
                        onClose={handleCloseSchedule}
                    >
                        <Box
                            className='menu-container'
                            sx={{
                                p: 1,
                            }}
                        >
                            <RightWidget
                                instructor={instructor} 
                                office={office}
                                phone={phone}
                                email={email}
                                schedules={schedules}
                                handleClose={handleCloseSchedule}
                            />
                        </Box>
                    </Drawer>
                </Box>
            </Box> 
        </Grow>
    )
}

export default CourseTitleSection;
