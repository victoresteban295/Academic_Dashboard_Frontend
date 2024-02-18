import ProfCoursePage from "@/components/course/professor/ProfCoursePage";
import StudCoursePage from "@/components/course/student/StudCoursePage";

const CoursePage = ({ params }) => {

    //Determine the authorization
    const profile = params.role;
    //Verify if Username Belongs to this course
    const username = params.username; 
    //Which Course to query
    const course = params.course;

    /* Get Course Information */
    const getCourse = () => {
    }

    return (
        <>
            {profile === 'professor' ? (
               <ProfCoursePage 
                /> 
            ) : (
                <StudCoursePage 
                />
            )}
        </>
    )
} 

export default CoursePage;
