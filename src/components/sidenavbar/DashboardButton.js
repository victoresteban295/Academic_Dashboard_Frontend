"use client"
import { Dashboard, DashboardOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardButton = ({ username, role }) => {
    const pathname = usePathname();
    const isActive = pathname === (`/${role}/${username}`);

    return (
        <Link
            href={`/${role}/${username}`} 
            style={{
                textDecoration: 'none',
                color: '#000',
            }} 
        >
            <Button
                variant='text'
                startIcon={isActive ? <Dashboard /> : <DashboardOutlined />}
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
        </Link>
    )
}

export default DashboardButton;
