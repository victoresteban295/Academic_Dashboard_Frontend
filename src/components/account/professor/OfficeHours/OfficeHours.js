import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"
import OfficeHrsBackdrop from "./OfficeHrsBackdrop";
import { useState } from "react";
import OfficeHour from "./OfficeHour";
import EmptyOfficeHrs from "./EmptyOfficeHrs";

const OfficeHours = ({
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
        <Stack
            className="professors-office-hours"
            spacing={4}
            sx={{
                px: {
                    fold: 2,
                    mobile: 2,
                    tablet: 4,
                    desktop: 4,
                },
                py: 2,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '10px',
                width: '100%',
            }}
        >
            <OfficeHrsBackdrop
                open={open}
                handleClose={closeBackdrop}
                index=""
                location=""
                room=""
                strTime=""
                endTime=""
                days={[]}
                officeHrs={officeHrs}
                changeOfficeHrs={changeOfficeHrs}
                handleOpenAlert={handleOpenAlert}
            />
            <Stack
                className="title-section"
                spacing={0}
                sx={{
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                        }}
                    >
                        {"Office Hours"}
                    </Typography>
                    <Button
                        startIcon={<Add />}
                        onClick={openBackdrop}
                        variant="text"
                        size="small"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'none',
                                tablet: 'none',
                                desktop: 'flex',
                            },
                            fontWeight: '700',
                            bgcolor: 'primary.light',
                        }}
                    >
                        Add
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'grey',
                    }}
                >
                    {"Time frame in which students can visit your office for academic assistance"}
                </Typography>
            </Stack>
            <Stack
                spacing={5}
                direction="row"
                justifyContent="center"
                useFlexGap
                flexWrap="wrap"
            >
                {officeHrs.length != 0 ? (
                    officeHrs.map(hrs => {
                        const { index, location, room, startTime, endTime, days } = hrs; 
                        return (
                            <OfficeHour 
                                key={index}
                                index={index}
                                location={location}
                                room={room}
                                startTime={startTime}
                                endTime={endTime}
                                days={days}
                                officeHrs={officeHrs}
                                changeOfficeHrs={changeOfficeHrs}
                                handleOpenAlert={handleOpenAlert}
                            />
                        )
                    })
                ) : (
                    <EmptyOfficeHrs 
                        officeHrs={officeHrs}
                        changeOfficeHrs={changeOfficeHrs}
                        handleOpenAlert={handleOpenAlert}
                    />
                )}
            </Stack>
            <Box
                sx={{
                    display: {
                        fold: 'flex',
                        mobile: 'flex',
                        tablet: 'flex',
                        desktop: 'none',
                    },
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    startIcon={<Add />}
                    onClick={openBackdrop}
                    variant="text"
                    size="small"
                    sx={{
                        fontWeight: '700',
                        bgcolor: 'primary.light',
                    }}
                >
                    Add
                </Button>
            </Box>
        </Stack>
    )
}

export default OfficeHours;
