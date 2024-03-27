import { AddCircleOutline } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import OfficeHrsBackdrop from "./OfficeHrsBackdrop";
import { useState } from "react";

const EmptyOfficeHrs = ({
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
                onClick={openBackdrop}
                justifyContent="center"
                alignItem="center"
                spacing={0}
                sx={{
                    py: 1,
                    px: 3,
                    cursor: 'pointer',
                    borderWidth: '2px',
                    borderStyle: 'dashed',
                    borderRadius: '5px',
                    flexGrow: 1,
                    maxWidth: '300px',
                    "&:hover": {
                        bgcolor: 'primary.light'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <AddCircleOutline 
                        fontSize="medium"
                    />
                </Box>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                    }}
                >
                    {"Add Office Hrs"}
                </Typography>
            </Stack>
        </>
    )
}

export default EmptyOfficeHrs;
