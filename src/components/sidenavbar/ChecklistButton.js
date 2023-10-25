"use client"
import { Ballot, BallotOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ChecklistButton = ({ username, role }) => {
    const pathname = usePathname();
    const isActive = pathname.includes('/checklist');

    return (
        <Link
            href={`/${role}/${username}/checklist`} 
            style={{
                textDecoration: 'none',
                color: '#000',
            }} 
        >
            <Button
                variant='text'
                startIcon={isActive ? <Ballot /> : <BallotOutlined />}
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
                    Checklist
                </Typography>
            </Button>
        </Link>
    )
}

export default ChecklistButton;
