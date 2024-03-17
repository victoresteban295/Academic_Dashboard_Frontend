import { Box, Tooltip, Typography } from "@mui/material"
import Image from "next/image";

export const metadata = {
    title: "Account",
    themeColor: '#78a1bb'
}

const UserAccountPage = ({ params }) => {
    const { username, role } = params;
    const userRole = role.charAt(0).toUpperCase() + role.slice(1);

    return (
        <Box
            sx={{
                width: '100%',
                px: 2,
            }}
        >
            <Box
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '10px',
                    width: '100%',
                    height: '500px',
                }}
            >

            </Box>

        </Box>
    )
}

export default UserAccountPage;
