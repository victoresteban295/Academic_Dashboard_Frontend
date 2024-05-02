import { AddCircleOutline } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditInfoSectionBackdrop from "../../Backdrop/EditInfoSectionBackdrop";

const EmptySyllabus = ({ changeInfoSections, handleOpenAlert }) => {

    /* Edit Info Section */
    const [openEditSection, setOpenEditSection] = useState(false);
    const handleOpenEditSection = () => {
        setOpenEditSection(true);
    }
    const handleCloseEditSection = () => {
        setOpenEditSection(false);
    }
    
    return (
        <Stack
            justifyContent="flex-start"
            alignItems="center"
        >
            <EditInfoSectionBackdrop
                open={openEditSection}
                handleClose={handleCloseEditSection}
                index={""}
                title={""}
                info={""}
                infos={[]}
                changeInfoSections={changeInfoSections}
                handleOpenAlert={handleOpenAlert}
            />
            <IconButton color="primary" size="large" onClick={handleOpenEditSection}>
                <AddCircleOutline 
                    fontSize="inherit"
                />
            </IconButton>
            <Typography
                variant="h6"
                align='center'
                sx={{
                    fontWeight: 'bold',
                }} 
            >
                {"Create Syllabus Sections For Your Students To Learn More About Your Course"}
            </Typography>
        </Stack>
    )
}

export default EmptySyllabus;
