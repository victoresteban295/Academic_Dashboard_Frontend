"use client"
import { Ballot, BallotOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const ChecklistButton = ({ username, role }) => {

    const pathname = usePathname();
    const isActive = pathname.includes('/checklist');
    const router = useRouter();
    const handleClick = () => {
        const lastVisitedList = localStorage.getItem("LastVisitedList");
        if(lastVisitedList === null) {
            router.push(`/${role}/${username}/checklist`) 
        } else {
            router.push(`/${role}/${username}/checklist/${lastVisitedList}`); 
        }
    }

    return (
        <Button
            variant='text'
            startIcon={isActive ? <Ballot /> : <BallotOutlined />}
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
                Checklist
            </Typography>
        </Button>
    )
}

export default ChecklistButton;
