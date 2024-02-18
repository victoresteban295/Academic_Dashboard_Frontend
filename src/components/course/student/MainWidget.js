import { Box, Button, Stack } from "@mui/material";
import CourseTitleSection from "./MainWidget/CourseTitleSection";
import { useState } from "react";

const MainWidget = ({ handleOpenAlert }) => {

    /* Tab Being Viewed */
    const [tab, setTab] = useState("upcoming");

    return (
        <Stack
            className="student-course-main-content"
            spacing={2}
            sx={{
                width: '100%',
            }}
        >
            <CourseTitleSection 
                title="Math 245 Differental Equations"
            />

            {/* Tab Selection: Syllabus, Upcoming, Past */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
                spacing={4}
                sx={{
                    py: 0,
                    borderBottom: '1px solid',
                    borderColor: '#cecece'
                }}
            >
                <Button
                    variant="text"
                    sx={{
                        color: 'text.primary',
                        fontWeight: '700',
                    }}
                >
                    Syllabus
                </Button>
                <Button
                    variant="text"
                    sx={{
                        color: 'primary.main',
                        fontWeight: '700',
                        borderBottom: '4px solid',
                        borderColor: 'primary.main',
                        borderRadius: '0px',
                    }}
                >
                    Upcoming
                </Button>
                <Button
                    variant="text"
                    sx={{
                        color: 'text.primary',
                        fontWeight: '700',
                    }}
                >
                    Past
                </Button>
            </Stack>
        </Stack>
    )
}

export default MainWidget;
