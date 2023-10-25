"use client"
import { CalendarMonth, CalendarMonthOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CalendarButton = ({ username, role }) => {
    const pathname = usePathname();
    const isActive = pathname.includes('/calendar');

    return (
        <Link
            href={`/${role}/${username}/calendar`} 
            style={{
                textDecoration: 'none',
                color: '#000',
            }} 
        >
            <Button
                variant='text'
                startIcon={isActive ? <CalendarMonth /> : <CalendarMonthOutlined />}
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
        </Link>
    )
}

export default CalendarButton;
