'use server'
import { cookies } from "next/dist/client/components/headers";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";


/*************************/
/* Reload Checklist Page */
/*************************/
export const reloadChecklistpage = async () => {
    revalidatePath('/[role]/[username]/checklist');
}

/*****************************************************/
/* Get All User's Checklists (Grouped & Non-Grouped) */
/*****************************************************/
export const getAllChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/${username}/get/all/checklists`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        //NOTE: throw Error instead
        notFound();
    }

    return res.json();
}

/*************************************/
/* Get User's Non-Grouped Checklists */
/*************************************/
export const getChecklists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/${username}/get/checklists`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    if(!res.ok) {
        //NOTE: throw Error instead
        notFound();
    }

    return res.json();
}

/****************************************/
/* Create a New Checklist (Non-Grouped) */
/****************************************/
export const createChecklist = async (username, title) => {

}

/****************************************************/
/* Rename Checklist's Title (Grouped & Non-Grouped) */
/****************************************************/
export const renameCheclistTitle = async (username, listId, title) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

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
}

/**********************************************************/
/* Modify Checklist's Checkpoints (Grouped & Non-Grouped) */
/**********************************************************/
export const modifyCheckpoints = async (username, listId, checkpoints, completedPoints) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

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
}

/********************************************/
/* Delete Checklist (Grouped & Non-Grouped) */
/********************************************/
const deleteChecklist = async (username, listId) => {

}
