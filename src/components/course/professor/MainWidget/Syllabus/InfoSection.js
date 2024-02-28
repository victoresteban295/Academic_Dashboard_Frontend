import { Edit } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import EditInfoSectionBackdrop from "../../Backdrop/EditInfoSectionBackdrop";
import { useState } from "react";

const InfoSection = ({ 
    index, 
    title, 
    info, 
    infos,
    changeInfoSections, 
    handleOpenAlert 
}) => {

    /* Backdrop Menu State Value & Function */
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
            spacing={1}
        >
            <EditInfoSectionBackdrop 
                open={openEditSection}
                handleClose={handleCloseEditSection}
                index={index}
                title={title}
                info={info}
                infos={infos}
                changeInfoSections={changeInfoSections}
                handleOpenAlert={handleOpenAlert}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 1,
                    color: 'primary.main',
                    borderRadius: '5px',
                    bgcolor: 'primary.light',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {title}
                </Typography>
                <Tooltip title="Edit">
                    <IconButton
                        onClick={handleOpenEditSection}
                        size='small'
                    >
                        <Edit fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                sx={{
                    px: 1,
                }}
            >
                <Typography
                    variant="body1"
                    paragraph={true}
                >
                    {info}
                </Typography>
            </Box>
        </Stack>
    )
}

export default InfoSection;
