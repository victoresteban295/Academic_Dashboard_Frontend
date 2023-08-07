"use client"

import * as React from 'react';
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";

const ProfessorForm = () => {
    const academicRoles = ['Professor', 'Assistant Professor', 'Visiting Instructor', 'Visiting Assistant Instructor', 'Visiting Assistant Professor', 'Chair', 'Director', 'Other'];
    const [academicRole, setAcademicRole] = React.useState('');
    const handleAcademicRole = (event) => {
        setAcademicRole(event.target.value)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 2,
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    maxWidth: '500px',
                    flexGrow: 1,
                }}
            >
                <Stack
                    spacing={0}
                    sx={{
                        width: '100%',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: "700",
                        }}
                    >
                        Professor Information
                    </Typography>
                    <Divider />
                </Stack>
                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    useFlexGap
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <FormControl fullWidth>
                            <InputLabel id="academic_role">Academic Role</InputLabel>
                            <Select
                                labelId="academic_role"
                                id="select"
                                value={academicRole}
                                label="Academic Role"
                                onChange={handleAcademicRole}
                            >
                                {academicRoles.map((role) => {
                                    return(
                                        <MenuItem value={role}>{role}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField id="appt_year" label="Appointed Year (yyyy)" variant="outlined" />
                </Stack>
                <TextField id="department" label="Department" variant="outlined" />
                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={2}
                    useFlexGap
                >
                    <TextField sx={{flexGrow: 1}} id="office_building" label="Office Building" variant="outlined" />
                    <TextField sx={{flexGrow: 1}} id="room_number" label="Room #" variant="outlined" />
                </Stack>
            </Stack>
        </Box>
    )
};

export default ProfessorForm;
