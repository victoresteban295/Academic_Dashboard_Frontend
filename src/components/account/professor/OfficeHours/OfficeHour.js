import { Divider, Stack, Typography } from "@mui/material"
import { useState } from "react";
import OfficeHrsBackdrop from "./OfficeHrsBackdrop";

const OfficeHour = ({
    index,
    location,
    room,
    startTime,
    endTime,
    days,
    officeHrs,
    changeOfficeHrs,
    handleOpenAlert
}) => {

    /* Edit Office Hours Backdrop */
    const [open, setOpen] = useState(false);
    const openBackdrop = () => {
        setOpen(true);
    }
    const closeBackdrop = () => {
        setOpen(false);
    }

    return (
        <>
            <OfficeHrsBackdrop
                open={open}
                handleClose={closeBackdrop}
                index={index}
                location={location}
                room={room}
                strTime={startTime}
                endTime={endTime}
                days={days}
                officeHrs={officeHrs}
                changeOfficeHrs={changeOfficeHrs}
                handleOpenAlert={handleOpenAlert}
            />
            <Stack
                key={startTime}
                spacing={0}
                onClick={openBackdrop}
                sx={{
                    py: 1,
                    px: 3,
                    cursor: 'pointer',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    flexGrow: 1,
                    maxWidth: '300px',
                    "&:hover": {
                        bgcolor: 'primary.light'
                    }
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {`${location} ${room}`}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {`${startTime} - ${endTime}`}
                </Typography>
                <Stack
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    spacing={1}
                    divider={
                        <Divider
                            orientation="vertical"
                            flexItem
                        />
                    }
                >
                    {days.map(day => {
                        return (
                            <Typography
                                key={day}
                                variant="body1"
                            >
                                {day}
                            </Typography>
                        )
                    })}
                </Stack>
            </Stack>
        </>
    )
}

export default OfficeHour;
