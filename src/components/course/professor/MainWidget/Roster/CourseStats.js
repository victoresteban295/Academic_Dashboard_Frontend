import DesktopCourseStats from "./CourseStats/DesktopCourseStats";
import MobileCourseStats from "./CourseStats/MobileCourseStats";

const CourseStats = () => {
    return (
        <>
            <DesktopCourseStats 
                numOfStudents={39}
                crsAttendance={93}
                crsGrade={86}
            />
            <MobileCourseStats 
                numOfStudents={39}
                crsAttendance={93}
                crsGrade={86}
            />
        </>
    )
}

export default CourseStats;
