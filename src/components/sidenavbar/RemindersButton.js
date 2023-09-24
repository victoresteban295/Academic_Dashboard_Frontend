"use client"
import { Notifications, NotificationsNoneOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const RemindersButton = ({ username, role }) => {

    const pathname = usePathname();
    const isActive = pathname.includes('/reminders');
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${role}/${username}/reminders`) 
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <Notifications /> : <NotificationsNoneOutlined />}
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
                Reminders
            </Typography>
        </Button>
    )
}

export default RemindersButton;
