const SyllabusOptions = () => {
    return (
        <>
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
        </>
    )
}

export default SyllabusOptions
