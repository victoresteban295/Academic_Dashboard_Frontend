import { Stack } from "@mui/material";
import ChecklistOption from "./Options/ChecklistOption";

const UserChecklists = ({ username, activeList, handleActiveList, checklists }) => {

    let display;
    if(checklists.length > 0) {
        display = {}
    } else {
        display = {
            display: 'none',
        }
    }

    return (
        <Stack
            className='user-checklists-section'
            spacing={0.5}
            sx={{
                ...display,
            }}
        >
            {checklists.map((checklist) => {
                const { title, listId } = checklist;
                return(
                    <ChecklistOption 
                        username={username}
                        activeList={activeList}
                        handleActiveList={handleActiveList}
                        title={title}
                        listId={listId}
                    />
                )
            })}

        </Stack>
    )
}

export default UserChecklists;
