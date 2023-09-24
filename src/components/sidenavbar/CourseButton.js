"use client"
import { ArrowRight } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
/* import { usePathname, useRouter } from "next/navigation"; */

const CourseButton = ({ username, role, course, active }) => {

    /* const pathname = usePathname(); */
    /* const isActive = pathname.includes('/checklist'); */
    /* const router = useRouter(); */
    const isActive = active;
    const handleClick = () => {
        router.push(`/${role}/${username}/checklist`) 
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <ArrowRight /> : ''}
            onClick={handleClick}
            sx={{
                color: 'text.primary',
                flexGrow: '1',
                "&hover": {
                    background: '#ccc5b9'
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
