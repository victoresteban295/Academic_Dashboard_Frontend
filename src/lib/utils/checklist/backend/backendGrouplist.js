'use server'
import { cookies } from "next/dist/client/components/headers";

/***************************************************/
/* Get All User's Grouplists w/ Grouped Checklists */
/***************************************************/
export const getGrouplists = async (username) => {
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/${username}/get/grouplists`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Load Groups");
    }
}

/******************************/
/* Create New Empty Grouplist */
/******************************/
export const createGrouplist = async (username, title, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
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
                groupId: groupId,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Create New Group");
    }
}

/****************************/
/* Rename Grouplist's Title */
/****************************/
export const modifyGroupTitle = async (username, groupId, title) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/grouplist/${username}/modify/title/${groupId}`, {
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
        throw new Error("Failed to Rename Group's Title");
    }
}

/*************************/
/* Reorder User's Groups */
/*************************/
export const reorderUserGroups = async (username, groups) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/grouplist/${username}/reorder`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                grouplists: groups,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Reorder User's Groups");
    }
}

/*****************************/
/* Reorder Group's Checklist */
/*****************************/
export const reorderChecklists = async (username, group) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/grouplist/${username}/reorder/checklists`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                grouplist: group,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Reorder Group's Checklists");
    }
}

/******************************************/
/* Create a New Checklist Under Grouplist */
/******************************************/
export const addNewChecklistToGroup = async (username, listId, title, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/api/grouplist/${username}/new/checklist/${groupId}`, {
            cache: "no-cache",
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                title: title,
                listId: listId,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Create New Checklist Under Group");
    }
}

/*******************************************************/
/* Move Non-Grouped Checklist to an Existing Grouplist */
/*******************************************************/
export const addChecklistToGroup = async (username, listId, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
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

    } catch(error) {
        throw new Error("Failed to Move Checklist to Group");
    }
}

/******************************************************/
/* Move Grouped Checklist to Different Existing Group */
/******************************************************/
export const moveChecklistGroupToGroup = async (username, listId, fromGroupId, toGroupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
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

    } catch(error) {
        throw new Error("Failed to Move Checklist to Different Group");
    }
}

/******************************/
/* Reorder Group's Checklists */
/******************************/
export const reorderGroupsChecklists = async (username, checklists, groupId) => {

}

/*************************************************************/
/* Remove Checklist From Grouplist to Non-Grouped Checklists */
/*************************************************************/
export const removeChecklistFromGroup = async (username, listId, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
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

    } catch(error) {
        throw new Error("Failed to Remove Checklist From Group");
    }
}

/****************/
/* Delete Group */
/****************/
export const deleteGrouplist = async (username, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        await fetch(`http://localhost:8080/api/grouplist/${username}/delete/${groupId}`, {
            cache: "no-cache",
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
    } catch(error) {
        throw new Error("Failed to Delete Group");
    }
}
