"use client"
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NoList = ({ username, role, checklists }) => {
    const router = useRouter();
    const lastVisitedList = localStorage.getItem("LastVisitedList");

    if(checklists.length > 0) {
        if((lastVisitedList === null) || (!checklists.includes(lastVisitedList))) {
            localStorage.setItem("LastVisitedList", checklists[0]);
            router.push(`/${role}/${username}/checklist/${checklists[0]}`);
        } else {
            router.push(`/${role}/${username}/checklists/${lastVisitedList}`); 
        }
    } 

    return (
        <>
            <Typography>
                Looks Like You've Completed All Your Tasks!
            </Typography>
            <Typography>
                Click Here to Create a New Checklist
            </Typography>
        </> 
    ) 
}

export default NoList;
