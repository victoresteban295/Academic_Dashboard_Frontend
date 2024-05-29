import ProfCoursePage from "@/components/course/professor/ProfCoursePage";
import StudCoursePage from "@/components/course/student/StudCoursePage";
import { getTitle } from "@/lib/data/course/professor";
 
export async function generateMetadata({ params }) {
    const title = getTitle(params.course);

    return {
        title: title,
        themeColor: '#78a1bb'
    }
}

const CoursePage = async ({ params }) => {

    //Determine the authorization
    const profile = params.role;
    //Verify if Username Belongs to this course
    const username = params.username; 
    //Which Course to query
    const course = params.course;

    return (
        <>
            {profile === 'professor' ? (
                <ProfCoursePage 
                    crs={course}
                /> 
            ) : (
                <StudCoursePage 
                    crs={course}
                />
            )}
        </>
    )
} 

export default CoursePage;
