import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import UserChecklists from "./ChecklistsWidget/UserChecklists";
import UserGrouplists from "./ChecklistsWidget/UserGrouplists";
import { Add } from "@mui/icons-material";

const ChecklistsWidget = ({ username, activeList, handleActiveList, checklists, grouplists}) => {
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
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                    checklists={checklists}
                />
                <UserGrouplists 
                    username={username}
                    activeList={activeList}
                    handleActiveList={handleActiveList}
                    grouplists={grouplists}
                />
            </Stack>
        </Box>
    )
}

export default ChecklistsWidget;
