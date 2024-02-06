import { Stack } from "@mui/material";
import Today from "./Today";
import Upcoming from "./Upcoming";

const TodayUpcomingSection = ({
    todaySize,
    upcomingSize,
    currentReminders,
    handleCurrentReminders
}) => {
    return (
        <Stack
            direction='row'
            spacing={1}
        >
            <Today 
                todaySize={todaySize}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
            />
            <Upcoming 
                upcomingSize={upcomingSize}
                currentReminders={currentReminders}
                handleCurrentReminders={handleCurrentReminders}
            />
        </Stack>
    )
}

export default TodayUpcomingSection;
