import Tasks from "@/components/course/professor/MainWidget/Tasks/Tasks";
import { getLayoutData } from "@/lib/data/course/professor";

export async function generateMetadata({ params }) {
    const { title } = getLayoutData(params.course);
    return {
        title: `Tasks - ${title}`,
        themeColor: '#78a1bb'
    }
}

const TasksPage = ({ params }) => {
    return (
        <Tasks
            course={params.course}
        /> 
    )
}

export default TasksPage;
