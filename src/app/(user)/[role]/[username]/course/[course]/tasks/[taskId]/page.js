import { getLayoutData } from "@/lib/data/course/professor";
import TaskStats from "@/components/course/professor/MainWidget/Tasks/TaskStats/TaskStats";

export async function generateMetadata({ params }) {
    const { title } = getLayoutData(params.course);
    return {
        title: `Tasks - ${title}`,
        themeColor: '#78a1bb'
    }
}

const TaskPage = ({ params }) => {
    return (
        <TaskStats 
            course={params.course}
            taskId={params.taskId}
        />
    )
}

export default TaskPage;
