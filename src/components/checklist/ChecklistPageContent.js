"use client"
import { Alert, Box, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import ChecklistWidget from "./ChecklistWidget";
import ChecklistsWidget from "./ChecklistsWidget";

const ChecklistPageContent = ({ username, allChecklists, lists, grouplists }) => {

    /* Determine User's Last Visited Checklist */
    useEffect(() => {
        //Has User Visited a Checklist
        let hasVisitedList = localStorage.getItem("currentList") != null;
        let lastVisitedList; //ListId of Last Visited Checklist

        //User Hasn't Visited a Checklist But Has Checklists
        if(!hasVisitedList && allChecklists.length > 0) {
            //Set Last Visited Checklist to User's 1st Checklist
            const { listId } = allChecklists[0];
            lastVisitedList = listId;
            localStorage.setItem("currentList", listId);

        //User Has Visited a Checklist
        } else {
            //Set Current Checklist to Last Visited Checklist
            lastVisitedList = localStorage.getItem("currentList");
        }

        //Current Checklist User is Viewing
        setCurrentList(lastVisitedList);
    }, []);

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

    const [currentList, setCurrentList] = useState('');

    //Change Current Checklist Being Viewed
    const handleActiveList = (listId) => {
        setCurrentList(listId);
        localStorage.setItem("currentList", listId);
    }

    /* Error Message Displaying in Alert */
    const [errorMsg, setErrorMsg] = useState('');

    /* Display Alert with Error Message */
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = (msg) => {
        setErrorMsg(msg);
        setOpenAlert(true);
    }
    const handleCloseAlert = () => {
        setErrorMsg('');
        setOpenAlert(false);
    }

    return (
        <Box
            className="checklist-page"
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
            }}
        >
            <Snackbar
                open={openAlert}
                anchorOrigin={{
                    vertical: 'top', 
                    horizontal: 'right',
                }}
                autoHideDuration={15000}
                onClose={handleCloseAlert}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity="error"
                    sx={{
                        width: '100%',
                        position: 'relative',
                        top: {xs: '0px', sm: '0px', md: '50px'},
                    }}
                >
                    {errorMsg}
                </Alert>
            </Snackbar> 
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
                    handleOpenAlert={handleOpenAlert}
                />
            </Box>
            <Box
                className='lists-widget-container'
                sx={{
                    display: {xs: 'none', sm: 'none', md: 'block'},
                    flexGrow: 1,
                    maxWidth: '250px',
                    p: 1,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        position: 'sticky',
                        top: '70px',
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
                        handleOpenAlert={handleOpenAlert}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ChecklistPageContent;
