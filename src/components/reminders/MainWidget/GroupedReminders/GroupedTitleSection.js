import { Box, Grow, InputBase } from "@mui/material";
import { useState } from "react";
import GroupedOptions from "./GroupedOptions";
import { renameGroup } from "@/lib/utils/reminders/frontend/modifyGroups";

const GroupedTitleSection = ({
    groupId,
    title,
    reminders,  
    todayReminders,
    changeTodayReminders,
    upcomingReminders,
    changeUpcomingReminders,
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders,
    handleOpenAlert
}) => {

    /* Group's Title */
    const [newTitle, setNewTitle] = useState(title);
    const [isUpdating, setUpdating] = useState(false);

    /* Rename Group's Title */
    const renameTitle = (event) => {
        try{
            if(newTitle.trim() != '') {
                setUpdating(false);
                //Frontend: Rename Group
                const { 
                    updatedGroups, 
                    updatedToday, 
                    updatedUpcoming } = renameGroup(
                        groups, 
                        todayReminders, 
                        upcomingReminders, 
                        event.target.value,
                        groupId
                    );

                //Update State Value
                changeGroups(updatedGroups);
                changeTodayReminders(updatedToday);
                changeUpcomingReminders(updatedUpcoming);

                //Backend API: Update Database

            } else {
                setNewTitle(title);
            }
        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(); //Add parameter 
            changeTodayReminders()
            changeUpcomingReminders();
        }
    }

    return (
        <Grow in={true}>
            <Box
                className="grouped-title-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    p: 1,
                }}
            >
                <InputBase 
                    value={isUpdating ? newTitle : title}
                    placeholder="Add Group Title"
                    onChange={(e) => {
                        setUpdating(true);
                        setNewTitle(e.target.value);
                    }}
                    onBlur={renameTitle}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            e.target.blur();
                        }
                    }}
                    inputProps={{maxLength: 50}}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '700',
                    }}
                />
                <GroupedOptions
                    groupId={groupId}
                    title={title}
                    reminders={reminders}
                    todayReminders={todayReminders} 
                    changeTodayReminders={changeTodayReminders}
                    upcomingReminders={upcomingReminders}
                    changeUpcomingReminders={changeUpcomingReminders}
                    groups={groups}
                    changeGroups={changeGroups}
                    currentReminders={currentReminders}
                    handleCurrentReminders={handleCurrentReminders}
                    handleOpenAlert={handleOpenAlert}
                />
            </Box> 
        </Grow>
    )

}

export default GroupedTitleSection;
