import { Stack } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";

const UserGrouplists = async ({ userGrouplists, reloadPage }) => {
    //Fetch User's Grouplist
    const grouplists = await userGrouplists;

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
                        reloadPage={reloadPage}
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
