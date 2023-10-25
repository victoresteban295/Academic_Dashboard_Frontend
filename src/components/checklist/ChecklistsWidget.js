import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import UserChecklists from "./ChecklistsWidget/UserChecklists";
import UserGrouplists from "./ChecklistsWidget/UserGrouplists";
import { Add } from "@mui/icons-material";
import getChecklists from "@/lib/utils/checklist/getChecklists";
import getGrouplists from "@/lib/utils/checklist/getGrouplists";
import { Suspense } from "react";

const ChecklistsWidget = ({ username, reloadPage }) => {
    const userChecklists = getChecklists(username);
    const userGrouplists = getGrouplists(username);
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
                <Suspense fallback={<h3>Loading Checklists...</h3>} >
                    <UserChecklists 
                        userChecklists={userChecklists}
                        reloadPage={reloadPage}
                    />
                </Suspense>
                <Suspense fallback={<h3>Loading Grouplists...</h3>} >
                    <UserGrouplists 
                        userGrouplists={userGrouplists}
                        reloadPage={reloadPage}
                    />
                </Suspense>
            </Stack>
        </Box>
    )
}

export default ChecklistsWidget;
