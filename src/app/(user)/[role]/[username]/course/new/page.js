import { Box, Tooltip, Typography } from "@mui/material"
import Image from "next/image";

export const metadata = {
    title: "Create a New Course",
    themeColor: '#78a1bb'
}

const NewCoursePage = ({ params }) => {
    const { role, username } = params;
    return (
        <Box
            sx={{
                mx:2,
                height: '100%',
                pt: '50px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Tooltip title="Icon By Icon8" arrow placement="right">
                    <Image 
                        src="/images/development.png"
                        height={96}
                        width={96}
                        alt="Picture of Gear"
                    />
                </Tooltip>
            </Box>
            <Typography
                variant='h6'
                align='center'
                sx={{
                    fontWeight: '700'
                }}
            >
                Create A New Course Page Under Development
            </Typography>
        </Box>
    )
}

export default NewCoursePage;
