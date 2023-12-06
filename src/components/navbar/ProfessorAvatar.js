"use client"
import { Logout, PostAdd, School, Settings } from "@mui/icons-material";
import {  Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"
import LoadingBackDrop from "../loading/LoadingBackDrop";

const ProfessorAvatar = ({ professorInitials, username, role }) => {

    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [loading, setLoading] = useState(false);
    const triggerLoading = () => {
        setLoading(true);
    }
    const closeLoading = () => {
        setLoading(false);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = async () => {
        triggerLoading();
        try{
            const res = await fetch('http://localhost:3000/api/auth/logout', {
                method: "POST",
            });
            if(res.ok) {
                localStorage.clear();
                router.push('/');
            } else {
                closeLoading();
                alert("Something Went Wrong! - try again later");
            }
        } catch(error) {
            closeLoading();
            alert("Something Went Wrong! - try again later");
        }
    }

    return (
        <>
            <LoadingBackDrop loading={loading} />
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
                        {professorInitials}
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
                <Link 
                    href={`/${role}/${username}/account`} 
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                    }} 
                >
                    <MenuItem>
                        <Avatar sx={{mr: 1}}>
                           <School /> 
                        </Avatar>
                        Professor Account
                    </MenuItem>
                </Link>
                <Link
                    href={`/${role}/${username}/course/new`} 
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                    }} 
                >
                    <MenuItem>
                        <Avatar sx={{mr: 1}}>
                            <PostAdd />
                        </Avatar>
                        Create a New Course
                    </MenuItem>
                </Link>
                <Divider />
                <Link
                    href={`/${role}/${username}/settings`} 
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                    }} 
                >
                    <MenuItem>
                        <ListItemIcon >
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                </Link>
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

export default ProfessorAvatar;
