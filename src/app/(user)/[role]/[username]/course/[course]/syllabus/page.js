import Syllabus from "@/components/course/professor/MainWidget/Syllabus/Syllabus";
import { getLayoutData } from "@/lib/data/course/professor";

export async function generateMetadata({ params }) {
    const { title } = getLayoutData(params.course);
    return {
        title: `Syllabus - ${title}`,
        themeColor: '#78a1bb'
    }
}

const SyllabusPage = ({ params }) => {
    return (
        <Syllabus 
            course={params.course}
        />
    )
}

export default SyllabusPage;
