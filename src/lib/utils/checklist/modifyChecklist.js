'use server'

import { revalidatePath } from "next/cache";

const { cookies } = require("next/dist/client/components/headers");

export const reloadChecklistpage = async () => {
    revalidatePath('/[role]/[username]/checklist');
}

const createChecklist = async (username, title) => {

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
}

const modifyCheckpoints = async (username, listId, checklist) => {

}

const deleteChecklist = async (username, listId) => {

}
