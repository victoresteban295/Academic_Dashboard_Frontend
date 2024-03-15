"use client"
import { Ballot, BallotOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const ChecklistButton = ({ username, role }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = pathname.includes('/checklist');

    const handleClick = () => {
        router.push(`/${role}/${username}/checklist`);
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <Ballot /> : <BallotOutlined />}
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
                Checklist
            </Typography>
        </Button>
    )
}

export default ChecklistButton;
