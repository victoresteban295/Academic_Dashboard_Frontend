import Roster from "@/components/course/professor/MainWidget/Roster/Roster";
import { getLayoutData } from "@/lib/data/course/professor";

export async function generateMetadata({ params }) {
    const { title } = getLayoutData(params.course);
    return {
        title: `Roster - ${title}`,
        themeColor: '#78a1bb'
    }
}

const RosterPage = ({ params }) => {
    return (
        <Roster
            course={params.course}
        /> 
    )
}

export default RosterPage;
