"use client"
import { Dashboard, DashboardOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const DashboardButton = ({ username, role }) => {

    const pathname = usePathname();
    const isActive = pathname === (`/${role}/${username}`);
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${role}/${username}`) 
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <Dashboard /> : <DashboardOutlined />}
            onClick={handleClick}
            sx={{
                color: 'text.primary',
                "&hover": {
                    background: '#ccc5b9',
                }
            }}
        >
            <Typography
                variant="button"
                sx={{
                    fontWeight: '700'
                }}
            >
                Dashboard
            </Typography>
        </Button>
    )
}

export default DashboardButton;
