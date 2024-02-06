import { Stack } from "@mui/material";
import Group from "./Group";

const GroupsSection = ({
    groups,
    changeGroups,
    currentReminders,
    handleCurrentReminders
}) => {
    return (
        <Stack
            spacing={1}
            sx={{
                width: '100%',
            }}
        >
            {groups.map((group) => {
                const { groupId, title, size } = group;
                return (
                    <Group 
                        key={groupId}
                        groupId={groupId}
                        title={title}
                        size={size}
                        currentReminders={currentReminders}
                        handleCurrentReminders={handleCurrentReminders}
                    />
                ) 
            })}
        </Stack>
    )
}

export default GroupsSection;
