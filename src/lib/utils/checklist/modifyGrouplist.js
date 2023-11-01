'use server'
const { cookies } = require("next/dist/client/components/headers")

export const createGrouplist = async (username, title) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/grouplist/${username}/new`, {
        cache: "no-cache",
        method: "POST", 
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

//Rename Group Title
const modifyGroupTitle = async (username, groupId, title) => {

}

const addNewChecklistToGroup = async (username, listTitle, groupId) => {

}

export const addChecklistToGroup = async (username, listId, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/grouplist/${username}/add/${listId}/to/${groupId}`, {
        cache: "no-cache",
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });
    return res.json();
}

export const moveChecklistGroupToGroup = async (username, listId, fromGroupId, toGroupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/grouplist/${username}/move/${listId}/from/${fromGroupId}/to/${toGroupId}`, {
        cache: "no-cache",
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });
    return res.json();
}

const reorderGroupsChecklists = async (username, checklists, groupId) => {

}

export const removeChecklistFromGroup = async (username, listId, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');

    /* Backend REST API */
    const res = await fetch(`http://localhost:8080/api/grouplist/${username}/remove/${listId}/from/${groupId}`, {
        cache: "no-cache",
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    return res.json();
}

const deleteGrouplist = async (username, groupId) => {

}
