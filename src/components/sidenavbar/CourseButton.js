"use client"
import { ArrowLeft } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

const CourseButton = ({ username, role, course, dept, num }) => {
    const params = useParams();
    const router = useRouter();

    const crs = dept + num;
    const currentCrs = params.course;
    const isActive = currentCrs === crs;
    const handleClick = () => {
        router.push(`/${role}/${username}/course/${crs}`);
    }

    return (
        <Button
            variant='text'
            endIcon={isActive ? <ArrowLeft /> : ''}
            onClick={handleClick}
            sx={{
                color: isActive ? 'primary.main' : 'text.primary',
                flexGrow: '1',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                "&:hover": {
                    bgcolor: 'primary.light',
                }
            }}
        >
            <Typography
                variant="button"
                sx={{
                    fontWeight: '700',
                }}
            >
                {course} 
            </Typography>
        </Button>
    )
}

export default CourseButton;
