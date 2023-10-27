import { Stack } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";

const UserGrouplists = ({ username, activeList, handleActiveList, grouplists }) => {

    //Don't Display if User has not Grouplist
    let display;
    if(grouplists.length > 0) {
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
            {grouplists.map((grouplist) => {
                const { title, groupId, checklists } = grouplist;
                return(
                    <GrouplistOption 
                        username={username}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
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
