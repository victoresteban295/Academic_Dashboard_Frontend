import { Typography } from "@mui/material";

const TaskPage = ({ params }) => {
    return (
        <Typography>
            {`TaskId is ${params.taskId}`}
        </Typography>
    )
}

export default TaskPage;
