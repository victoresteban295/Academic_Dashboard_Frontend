"use client"
import { CalendarMonth, CalendarMonthOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const CalendarButton = ({ username, role }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = pathname.includes('/calendar');

    const handleClick = () => {
        router.push(`/${role}/${username}/calendar`);
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <CalendarMonth /> : <CalendarMonthOutlined />}
            onClick={handleClick}
            sx={{
                color: 'text.primary',
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
                    fontWeight: '700'
                }}
            >
                Calendar
            </Typography>
        </Button>
    )
}

export default CalendarButton;
