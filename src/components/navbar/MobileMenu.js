"use client"
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, Tooltip } from "@mui/material"
import { useState } from "react"
import SideNavbar from '../SideNavbar'

const MobileMenu = ({username, role, courses}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Tooltip title="Menu">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        mx: {
                            fold: 0,
                            mobile: 0,
                            tablet: 3,
                            desktop: 3,
                        },
                    }}
                >
                    <MenuIcon fontSize='large' /> 
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="profile-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '200px'
                    }}
                >
                    <SideNavbar 
                        username={username}
                        role={role}
                        courses={courses}
                    />
                </Box>
                
            </Menu>
        </>
    )
}

export default MobileMenu;
