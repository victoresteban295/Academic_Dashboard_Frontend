import ChecklistWidget from "@/components/checklist/ChecklistWidget";
import ChecklistsWidget from "@/components/checklist/ChecklistsWidget";
import { Box } from "@mui/material";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";

const ChecklistPage = async ({ params }) => {
    const { username } = params;
    const reloadPage = async () => {
        'use server'
        revalidatePath('/[role]/[username]/checklist');
    }

    return (
        <Box
            className="checklist-page"
            sx={{
                display: 'flex',
                width: '100%',
            }}
        >
            <Box
                className='checklist-widget-container'
                sx={{
                    flexGrow: 4,
                    p: 1,
                }}
            >
                <Suspense fallback={<h3>Loading...</h3>} >
                    <ChecklistWidget
                        username={username}
                        reloadPage={reloadPage}
                    />
                </Suspense>
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    flexGrow: 1,
                    p: 1,
                }}
            >
                <ChecklistsWidget
                    username={username}
                    reloadPage={reloadPage}
                />
            </Box>
        </Box>
    )
}

export default ChecklistPage;
