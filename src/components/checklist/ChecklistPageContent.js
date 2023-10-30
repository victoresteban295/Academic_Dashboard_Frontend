"use client"

import { Box } from "@mui/material";
import { useState } from "react";
import ChecklistWidget from "./ChecklistWidget";
import ChecklistsWidget from "./ChecklistsWidget";

const ChecklistPageContent = ({ username, allChecklists, checklists, grouplists }) => {

    //Create a List of all Checklists that belong to Group
    const groupedListIds = [];
    grouplists.map((grouplist) => {
        const { checklists } = grouplist;
        checklists.map((checklist) => {
            const { listId } = checklist;
            groupedListIds.push(listId);
        })
    })

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
                    flexGrow: 4,
                    p: 1,
                }}
            >
                <ChecklistWidget
                    username={username}
                    groupedListIds={groupedListIds}
                    activeList={currentList}
                    handleActiveList={handleActiveList}
                    allChecklists={allChecklists}   
                />
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    flexGrow: 1,
                    p: 1,
                }}
            >
                <ChecklistsWidget
                    username={username}
                    activeList={currentList}
                    handleActiveList={handleActiveList}
                    checklists={checklists}
                    grouplists={grouplists}
                />
            </Box>
        </Box>
    )
}

export default ChecklistPageContent;
