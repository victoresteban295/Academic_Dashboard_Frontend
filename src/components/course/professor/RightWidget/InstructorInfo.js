import { Stack, Typography } from "@mui/material";
import { Apartment, AssignmentInd, Email, LocalPhone } from "@mui/icons-material";

const InstructorInfo = ({ instructor, office, phone, email }) => {
    return (
        <Stack
            spacing={0.5}
            sx={{
                px: 2,
                py: 1,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={1} 
            >
                <AssignmentInd
                    fontSize="small"
                />
                <Typography
                    variant="body1"
                >
                    {instructor}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1} 
            >
                <Apartment
                    fontSize="small"
                />
                <Typography
                    variant="body1"
                >
                    {office}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1} 
            >
                <LocalPhone
                    fontSize="small"
                />
                <Typography
                    variant="body1"
                >
                    {phone}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1} 
            >
                <Email
                    fontSize="small"
                />
                <Typography
                    variant="body1"
                >
                    {"esteban.victor295@gmail.com"}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default InstructorInfo;
