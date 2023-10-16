import { Box } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";

const getUserChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/${username}/get/checklists`, {
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

const getUserGrouplists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    const res = await fetch(`http://localhost:8080/api/${username}/get/grouplists`, {
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

const ChecklistPageLayout = async ({ children, params}) => {

    const { username } = params;
    console.log(username);
    /* const checklists = await getUserChecklists(username); */
    /* const grouplists = await getUserGrouplists(username); */
    /**/
    /* const {listId, title, checkpoints} = checklists[0]; */
    /* console.log(listId); */
    /* console.log(title); */
    /* console.log(checkpoints); */
    /**/
    /* let lastVisitedListId = ""; */
    /* if(localStorage.getItem("recentList") === null) { */
    /*     if(checklists.length > 0) { */
    /*         const { listId } = checklists[0]; */
    /*         localStorage.setItem("recentList", listId); */
    /*         lastVisitedListId = localStorage.getItem("recentList"); */
    /*     } */
    /* } else { */
    /* } */

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
                    flexGrow: 2,
                    p: 1,
                }}
            >
                {children}
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    flexGrow: 1,
                    bgcolor: 'grey',
                    height: '10px',
                }}
            >

            </Box>
        </Box>
    )
}

export default ChecklistPageLayout;
