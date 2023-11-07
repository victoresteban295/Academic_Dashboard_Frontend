import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import UserChecklists from "./ChecklistsWidget/UserChecklists";
import UserGrouplists from "./ChecklistsWidget/UserGrouplists";
import { Add } from "@mui/icons-material";

const ChecklistsWidget = ({ 
    username, 
    checklists,
    changeChecklist,
    groups,
    changeGroups,
    activeList, 
    handleActiveList }) => {
    return (
        <Box>
            <Box
                className="my-checklist-title"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant='body2'
                >
                    My Checklists
                </Typography>
                <IconButton size='small'>
                    <Add fontSize='inherit' />
                </IconButton>
            </Box>
            <Stack
                spacing={3}
                divider={<Divider flexItem />}
            >
                <UserChecklists 
                    username={username}
                    checklists={checklists}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                />
                <UserGrouplists 
                    username={username}
                    groups={groups}
                    changeGroups={changeGroups}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                />
            </Stack>
        </Box>
    )
}

export default ChecklistsWidget;
