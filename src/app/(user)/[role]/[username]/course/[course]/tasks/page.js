import Tasks from "@/components/course/professor/MainWidget/Tasks/Tasks";
import { getLayoutData } from "@/lib/data/course/professor";

export async function generateMetadata({ params }) {
    const { title } = getLayoutData(params.course);
    return {
        title: `Tasks - ${title}`,
        themeColor: '#78a1bb'
    }
}

export async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TasksPage = async ({ params }) => {
    await wait(5000);
    return (
        <Tasks
            course={params.course}
        /> 
    )
}

export default TasksPage;
