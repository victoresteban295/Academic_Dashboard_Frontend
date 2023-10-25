import { Stack } from "@mui/material";
import ChecklistOption from "./Options/ChecklistOption";

const UserChecklists = async ({ userChecklists, reloadPage }) => {

    const checklists = await userChecklists;
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
                        reloadPage={reloadPage}
                        title={title}
                        listId={listId}
                    />
                )
            })}

        </Stack>
    )
}

export default UserChecklists;
