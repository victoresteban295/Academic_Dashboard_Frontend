import { MenuItem } from "@mui/material"

const TasksOptions = ({ handleOpenTask }) => {
    return (
        <>
            <MenuItem
                onClick={handleOpenTask}
            >
                Create New Task 
            </MenuItem>
        </>
    )
}

export default TasksOptions;
