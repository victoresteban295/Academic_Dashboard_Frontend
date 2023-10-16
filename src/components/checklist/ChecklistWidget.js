import { Box } from "@mui/material";
import { cookies } from "next/dist/client/components/headers";
import TitleSection from "./ChecklistWidget/TitleSection";

const getChecklist = async (username, listId) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/checklist/${username}/get/${listId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

const ChecklistWidget = async ({ username }) => {
    /* const checklist = await getChecklist(username, "dkerd"); */

    return (
        <Box
            className="checklist-widget"
            sx={{
                width: '100%',
                height: '500px',
            }}
        >
            <Box
                className="checklist-title-section-container"
                sx={{
                    width: '100%',
                    p: 1,
                    bgcolor: 'grey',
                }}
            >
                <TitleSection 
                    title="Math 245: Multi-Variable Calculus"
                /> 
            </Box>
            <Box
                className="checkpoints-section"
                sx={{
                    width: '100%',
                    height: '300px'
                }}
            >

            </Box>

        </Box> 
    )
}

export default ChecklistWidget;
