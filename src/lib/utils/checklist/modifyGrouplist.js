'use server'

const { cookies } = require("next/dist/client/components/headers")

const createGrouplist = async (username, title) => {

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
}

const moveChecklistGroupToGroup = async (username, listId, fromGroupId, toGroupId) => {

}

const reorderGroupsChecklists = async (username, checklists, groupId) => {

}

const removeChecklistFromGroup = async (username, listId, groupId) => {

}

const deleteGrouplist = async (username, groupId) => {

}
