"use client"
import { Notifications, NotificationsNoneOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const RemindersButton = ({ username, role }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = pathname.includes('/reminders');

    const handleClick = () => {
        router.push(`/${role}/${username}/reminders`);
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <Notifications /> : <NotificationsNoneOutlined />}
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
                Reminders
            </Typography>
        </Button>
    )
}

export default RemindersButton;
