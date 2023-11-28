import { Stack } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";

const UserGrouplists = ({ 
    username, 
    groups,
    changeGroups,
    activeList, 
    handleActiveList }) => {

    //Don't Display if User has not Grouplist
    let display;
    if(groups.length > 0) {
        display = {}
    } else {
        display = {
            display: 'none',
        }
    }

    return (
        <Stack
            className='user-grouplists-section'
            sx={{
                ...display,
            }}
        >
            {groups.map((group) => {
                const { title, groupId, checklists } = group;
                return(
                    <GrouplistOption 
                        username={username}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        groups={groups}
                        changeGroups={changeGroups}
                        title={title}
                        groupId={groupId}
                        checklists={checklists}
                    />
                )
            })}

        </Stack>
    )
}

export default UserGrouplists;
