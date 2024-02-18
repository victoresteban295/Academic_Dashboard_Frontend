import { Box, Tooltip, Typography } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Dashboard",
    themeColor: '#78a1bb'
}

//Fetch User's Profile Based on URL
const getData = async (role, username) => {
    //Extract JWT Access Token
    const cookieStore = cookies(); 
    const { value: jwt } = cookieStore.get('accessToken');

    //Backend Rest API: Fetch User's Profile 
    const res = await fetch(`http://localhost:8080/v1.0/profiles/${role}/${username}`, {
        cache: 'force-cache',
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    });

    //Wrong User Profile Information Provided
    if(res.status >= 400 && res.status <= 499) {
        notFound();
    //Backend Rest API Failed
    } else if(res.status >= 500 && res.status <= 599) {
        /* throw new Error("Failed To Load User Profile");  */
    //Successfully Loaded Profile
    } else {
        return res.json();
    }
}

const DashboardPage = async ({ params }) => {
    const { role, username } = params;
    const userRole = role.charAt(0).toUpperCase() + role.slice(1);
    const {firstname, middlename, lastname} = await getData(role, username);
    const userFirstName = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    const userMiddleName = middlename.charAt(0).toUpperCase() + middlename.slice(1);
    const userLastName = lastname.charAt(0).toUpperCase() + lastname.slice(1);

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
                }}
            >
                Welcome {userFirstName} {userMiddleName} {userLastName}
            </Typography>
            <Typography
                variant='h6'
                align='center'
                sx={{
                }}
            >
                {userRole} Account
            </Typography>
            <Typography
                variant='h6'
                align='center'
                sx={{
                    fontWeight: '700'
                }}
            >
                Dashboard Page Under Development
            </Typography>
        </Box>
    )
}

export default DashboardPage;
