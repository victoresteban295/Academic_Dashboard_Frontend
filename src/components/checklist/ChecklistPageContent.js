"use client"

import { Box } from "@mui/material";
import { useState } from "react";
import ChecklistWidget from "./ChecklistWidget";
import ChecklistsWidget from "./ChecklistsWidget";

const ChecklistPageContent = ({ username, allChecklists, lists, grouplists }) => {

    //User's Checklists
    const [checklists, setChecklists] = useState(lists);
    const changeChecklists = (checklists) => {
        setChecklists(checklists);
    }

    //User's Groups w/ Checklists
    const [groups, setGroups] = useState(grouplists);
    const changeGroups = (groups) => {
        setGroups(groups)
    }

    let list;
    if(localStorage.getItem("currentList") === null) {
        const { listId } = allChecklists[0];
        list = listId;
        localStorage.setItem("currentList", listId);
    } else {
        list = localStorage.getItem("currentList");
    }
    const [currentList, setCurrentList] = useState(list);

    //Change Current Checklist Being Viewed
    const handleActiveList = (listId) => {
        setCurrentList(listId);
        localStorage.setItem("currentList", listId);
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
                    flexGrow: 1,
                    maxWidth: '750px',
                    p: 1,
                }}
            >
                <ChecklistWidget
                    username={username}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    groups={groups}
                    changeGroups={changeGroups}
                    activeList={currentList}
                    handleActiveList={handleActiveList}
                />
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    flexGrow: 1,
                    maxWidth: '250px',
                    p: 1,
                }}
            >
                <ChecklistsWidget
                    username={username}
                    checklists={checklists}
                    changeChecklists={changeChecklists}
                    groups={groups}
                    changeGroups={changeGroups}
                    activeList={currentList}
                    handleActiveList={handleActiveList}
                />
            </Box>
        </Box>
    )
}

export default ChecklistPageContent;
