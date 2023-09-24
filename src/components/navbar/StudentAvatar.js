"use client"
import { AppRegistration, Logout, School, Settings } from "@mui/icons-material";
import {  Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material"
import { useRouter } from "next/navigation";
import { useState } from "react"

const StudentAvatar = ({ studentInitials }) => {

    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = async () => {
        const res = await fetch('http://localhost:3000/api/auth/logout', {
            method: "POST",
        });

        if(res.ok) {
            router.push('/login');
        } else {
            alert("Something Went Wrong!");
        }
    }

    return (
        <>
            <Tooltip title="Account Settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        mx: {xs: 0, sm: 3},
                    }}
                >
                    <Avatar 
                        sx={{
                            bgcolor: 'grey', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {studentInitials}
                    </Avatar>
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
                    horizontal: 'right'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{mr: 1}}>
                       <School /> 
                    </Avatar>
                    Student Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{mr: 1}}>
                        <AppRegistration />
                    </Avatar>
                    Enroll to a New Course
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon >
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon >
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default StudentAvatar;
