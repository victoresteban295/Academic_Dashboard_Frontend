import { math230Roster } from "@/lib/data/course/professor";
import { Search } from "@mui/icons-material";
import { Divider, FormControl, InputBase, Stack, Typography } from "@mui/material";
import Student from "./Student";

const StudentRoster = () => {
    return (
        <Stack
            spacing={1}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                className="roster-search-bar"
                sx={{
                    width: '100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    px: 2,
                    py: 0.5,
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                >
                    <Search 
                        color="primary"
                    />
                    <FormControl fullWidth>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Student..."
                        />
                    </FormControl>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <Typography
                        variant="body1"
                        sx={{
                        }}
                    >
                        Total Students:
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        39
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                divider={<Divider flexItem />}
                sx={{
                    px: 2,
                }}
            >
                {math230Roster.map(student => {
                    const { name, gradeLvl, attendance, grade } = student;
                    return (
                        <Student 
                            name={name}
                            gradeLvl={gradeLvl}
                            attendance={attendance}
                            grade={grade}
                        />
                    )
                })}

            </Stack>

        </Stack> 
    )
}

export default StudentRoster;
