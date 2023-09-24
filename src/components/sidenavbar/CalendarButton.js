"use client"
import { CalendarMonth, CalendarMonthOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const CalendarButton = ({ username, role }) => {

    const pathname = usePathname();
    const isActive = pathname.includes('/calendar');
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${role}/${username}/calendar`) 
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <CalendarMonth /> : <CalendarMonthOutlined />}
            onClick={handleClick}
            sx={{
                color: 'text.primary',
                "&hover": {
                    background: '#ccc5b9'
                }
            }}
        >
            <Typography
                variant="button"
                sx={{
                    fontWeight: '700'
                }}
            >
                Calendar
            </Typography>
        </Button>
    )
}

export default CalendarButton;
