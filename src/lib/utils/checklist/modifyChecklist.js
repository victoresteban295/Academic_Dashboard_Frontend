'use server'

import { revalidatePath } from "next/cache";

const { cookies } = require("next/dist/client/components/headers");

export const reloadChecklistpage = async () => {
    revalidatePath('/[role]/[username]/checklist');
}

export const createChecklist = async (username, title) => {

}

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

const deleteChecklist = async (username, listId) => {

}
