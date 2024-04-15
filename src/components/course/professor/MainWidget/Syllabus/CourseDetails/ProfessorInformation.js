import { Stack, Typography } from "@mui/material";
import { Apartment, AssignmentInd, Email, LocalPhone } from "@mui/icons-material";

const ProfessorInformation = () => {
    return (
        <Stack
            spacing={1}
            sx={{
                width: '100%',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontWeight: '700',
                }}
            >
                {"Instructor Information"}
            </Typography>
            <Stack
                className="professor-information"
                spacing={0.5}
                sx={{
                    px: 1,
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
                        {"Dr.Demo"}
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
                        {"Palenske Hall 330"}
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
                        {"323 233-2333"}
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
                        {"demoprofessor@college.edu"}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProfessorInformation;
