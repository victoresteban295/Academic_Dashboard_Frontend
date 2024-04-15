import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ProfessorInformation from "./ProfessorInformation";
import GradeComposition from "./GradeComposition";
import { Edit } from "@mui/icons-material";

const CourseDetails = () => {
    return (
        <Stack
            spacing={1}
        >
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
                    {"Grade Composition"}
                </Typography>
                <Tooltip title="Edit">
                    <IconButton
                        size='small'
                    >
                        <Edit fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </Box>
            <GradeComposition 
            />
        </Stack>
    )
}

export default CourseDetails;
