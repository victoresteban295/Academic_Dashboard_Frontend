'use server'
import { cookies } from "next/dist/client/components/headers";
import { revalidatePath } from "next/cache";


/*************************/
/* Reload Checklist Page */
/*************************/
export const reloadChecklistpage = () => {
    revalidatePath('/[role]/[username]/checklist');
}

/*****************************************************/
/* Get All User's Checklists (Grouped & Non-Grouped) */
/*****************************************************/
export const getAllChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/${username}/get/all/checklists`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Load User's Checklists");
    }
}

/*************************************/
/* Get User's Non-Grouped Checklists */
/*************************************/
export const getChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/${username}/get/checklists`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Load Checklists");
    }

}

/****************************************/
/* Create a New Checklist (Non-Grouped) */
/****************************************/
export const createChecklist = async (username, title, listId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/checklist/${username}/new`, {
            cache: "no-cache",
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                title: title,
                listId: listId
            })
        });

        return res.json();

    } catch(error) {
        throw new Error("Failed to Create Checklist - please try again later")
    }
}

/*******************************************/
/* Reorder User's Checklists (Non-Grouped) */
/*******************************************/
export const reorderUserChecklists = async (username, checklists) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/checklist/${username}/reorder`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                checklists: checklists,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Reorder Checklists - please try again later");
    }
}

/****************************************************/
/* Rename Checklist's Title (Grouped & Non-Grouped) */
/****************************************************/
export const renameCheclistTitle = async (username, listId, title) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/checklist/${username}/modify/title/${listId}`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                title: title,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Rename Checklist's Title - please try again later");
    }
}

/**********************************************************/
/* Modify Checklist's Checkpoints (Grouped & Non-Grouped) */
/**********************************************************/
export const modifyCheckpoints = async (username, listId, checkpoints, completedPoints) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/checklist/${username}/modify/checkpoints/${listId}`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                checkpoints: checkpoints,
                completedPoints: completedPoints,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Modify Checklist's Checkpoints - please try again later");
    }
}

/********************************************/
/* Delete Checklist (Grouped & Non-Grouped) */
/********************************************/
export const deleteChecklist = async (username, listId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        await fetch(`http://localhost:8080/api/checklist/${username}/delete/${listId}`, {
            cache: "no-cache",
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });

    } catch(error) {
        throw new Error("Failed to Delete Checklist - please try again later");
    }
}
