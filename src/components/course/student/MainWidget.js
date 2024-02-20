import { Button, Stack } from "@mui/material";
import CourseTitleSection from "./MainWidget/CourseTitleSection";
import { useState } from "react";
import Upcoming from "./MainWidget/Upcoming/Upcoming";
import Syllabus from "./MainWidget/Syllabus/Syllabus";
import Past from "./MainWidget/Past/Past";
import { infoSections } from "@/lib/data/course";

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
                title="Math 245"
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
                    borderColor: '#cecece',
                    display: 'none'
                }}
            >
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("syllabus")
                    }} 
                    sx={{
                        fontWeight: '700',
                        color: tab === "syllabus" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "syllabus" ? '4px solid' : '0px solid',
                        borderColor: tab === "syllabus" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    Syllabus
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("upcoming")
                    }} 
                    sx={{
                        fontWeight: '700',
                        color: tab === "upcoming" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "upcoming" ? '4px solid' : '0px solid',
                        borderColor: tab === "upcoming" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    Upcoming
                </Button>
                <Button
                    variant="text"
                    onClick={() => {
                        setTab("past")
                    }} 
                    sx={{
                        fontWeight: '700',
                        color: tab === "past" ? 'primary.main' : 'text.primary',
                        borderBottom: tab === "past" ? '4px solid' : '0px solid',
                        borderColor: tab === "past" ? 'primary.main' : '#cecece',
                        borderRadius: '0px',
                    }}
                >
                    Past
                </Button>
            </Stack>
            <Syllabus 
                tab={tab}
                title="Math 245: Differental Equations"
                school="Academic College"
                semester="Spring 2024"
                infoSections={infoSections}
            />
            <Upcoming
                tab={tab}
            />
            <Past
                tab={tab}
            />
        </Stack>
    )
}

export default MainWidget;
