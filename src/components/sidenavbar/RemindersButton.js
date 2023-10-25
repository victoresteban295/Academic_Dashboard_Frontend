"use client"
import { Notifications, NotificationsNoneOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RemindersButton = ({ username, role }) => {
    const pathname = usePathname();
    const isActive = pathname.includes('/reminders');

    return (
        <Link
            href={`/${role}/${username}/reminders`} 
            style={{
                textDecoration: 'none',
                color: '#000',
            }} 
        >
            <Button
                variant='text'
                startIcon={isActive ? <Notifications /> : <NotificationsNoneOutlined />}
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
                    Reminders
                </Typography>
            </Button>
        </Link>
    )
}

export default RemindersButton;
