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
        const res = await fetch(`http://localhost:8080/v1.0/users/${username}/grouplists`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Load Groups - please try again later");
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
        const res = await fetch(`http://localhost:8080/v1.0/users/${username}/grouplists`, {
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
        throw new Error("Failed to Create New Group - please try again later");
    }
}

/****************************/
/* Rename Grouplist's Title */
/****************************/
export const modifyGroupTitle = async (groupId, title) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/grouplists/${groupId}`, {
            cache: "no-cache",
            method: "PATCH", 
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
        throw new Error("Failed to Rename Group's Title - please try again later");
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
        const res = await fetch(`http://localhost:8080/v1.0/users/${username}/grouplists`, {
            cache: "no-cache",
            method: "PATCH", 
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
        throw new Error("Failed to Reorder User's Groups - please try again later");
    }
}

/*****************************/
/* Reorder Group's Checklist */
/*****************************/
export const reorderChecklists = async (checklists) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try {
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/grouplists/{groupId}/checklists`, {
            cache: "no-cache",
            method: "PATCH", 
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
        throw new Error("Failed to Reorder Group's Checklists - please try again later");
    }
}

/******************************************/
/* Create a New Checklist Under Grouplist */
/******************************************/
export const addNewChecklistToGroup = async (listId, title, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/grouplists/${groupId}/checklists`, {
            cache: "no-cache",
            method: "POST", 
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
        throw new Error("Failed to Create New Checklist Under Group - please try again later");
    }
}

/*******************************************************/
/* Move Non-Grouped Checklist to an Existing Grouplist */
/*******************************************************/
export const addChecklistToGroup = async (listId, groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/checklists/${listId}/grouplists`, {
            cache: "no-cache",
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                groupId: groupId,
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Move Checklist to Group - please try again later");
    }
}


/******************************************************/
/* Move Grouped Checklist to Different Existing Group */
/******************************************************/
export const moveChecklistGroupToGroup = async (listId, toGroupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/checklists/${listId}/grouplists`, {
            cache: "no-cache",
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                groupId: toGroupId,
            })
        });
        return res.json();
    } catch(error) {
        throw new Error("Failed to Move Checklist to Different Group - please try again later");
    }
}

/*************************************************************/
/* Remove Checklist From Grouplist to Non-Grouped Checklists */
/*************************************************************/
export const removeChecklistFromGroup = async (listId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        const res = await fetch(`http://localhost:8080/v1.0/checklists/${listId}/grouplists`, {
            cache: "no-cache",
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                groupId: "",
            })
        });
        return res.json();

    } catch(error) {
        throw new Error("Failed to Remove Checklist From Group - please try again later");
    }
}

/****************/
/* Delete Group */
/****************/
export const deleteGrouplist = async (groupId) => {
    const cookieStore = cookies();
    const { value: jwt } = cookieStore.get('accessToken');
    try{
        /* Backend REST API */
        await fetch(`http://localhost:8080/v1.0/grouplists/${groupId}`, {
            cache: "no-cache",
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        });
    } catch(error) {
        throw new Error("Failed to Delete Group - please try again later");
    }
}
