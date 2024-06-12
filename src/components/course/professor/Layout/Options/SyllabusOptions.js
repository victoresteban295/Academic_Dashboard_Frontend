import { Divider, MenuItem } from "@mui/material"

const SyllabusOptions = ({ 
    handleOpenEditTitle, 
    handleOpenEditDescr,
    handleOpenEditSection,
    handleOpenDeleteCourse,
}) => {
    return (
        <>
            <MenuItem
                onClick={handleOpenEditTitle}
            >
                Edit Course Title
            </MenuItem>
            <MenuItem  
                onClick={handleOpenEditDescr}
            >
                Edit Course Description
            </MenuItem>
            <MenuItem  
                onClick={handleOpenEditSection}
            >
                Add Syllabus Section
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
        </>
    )
}

export default SyllabusOptions
