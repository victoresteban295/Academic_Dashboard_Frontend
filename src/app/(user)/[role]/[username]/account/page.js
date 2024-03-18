import OfficeHours from "@/components/account/professor/OfficeHours/OfficeHours";
import PersonalInformation from "@/components/account/professor/PersonalInformation/PersonalInformation";
import { Stack, Typography } from "@mui/material"

export const metadata = {
    title: "Account",
    themeColor: '#78a1bb'
}

const UserAccountPage = ({ params }) => {
    const { username, role } = params;
    const userRole = role.charAt(0).toUpperCase() + role.slice(1);

    return (
        <Stack
            spacing={2}
            sx={{
                width: '100%',
                py: 1,
                px: 2,
            }}
        >
            <Stack
                spacing={0}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    {"Professor Account"}
                </Typography>
            </Stack>
            <Stack
                spacing={4}
                sx={{
                    px: {
                        fold: 0,
                        mobile: 0,
                        tablet: 2,
                        desktop: 2,
                    },
                    width: '100%',
                }}
            >
                <PersonalInformation 
                />
                <OfficeHours 
                />
            </Stack>

        </Stack>
    )
}

export default UserAccountPage;
