import { Stack } from "@mui/material";
import DashboardButton from "./DashboardButton";
import CalendarButton from "./CalendarButton";
import RemindersButton from "./RemindersButton";
import ChecklistButton from "./ChecklistButton";

const NavButtons = ({ username, role }) => {
    return (
        <Stack
            direction="column"
            spacing = {0.25}
            alignItems='flex-start'
        >
            <DashboardButton 
                username={username}
                role={role}
            />
            <CalendarButton 
                username={username}
                role={role}
            />
            <RemindersButton
                username={username}
                role={role}
            />
            <ChecklistButton
                username={username}
                role={role}
            />
        </Stack>
    )
}

export default NavButtons;
