"use client"
import { Assignment, AssignmentOutlined, RecentActors, RecentActorsOutlined, TextSnippet, TextSnippetOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useParams, usePathname, useRouter } from "next/navigation";

const CourseTabSelection = () => {

    const pathname = usePathname();
    const router = useRouter();
    const { username, role, course } = useParams();

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            spacing={{
                fold: 0,
                mobile: 2,
                tablet: 4,
                desktop: 4,
            }}
            sx={{
                py: 0,
                borderBottom: '1px solid',
                borderColor: '#cecece',
            }}
        >
            <Button
                variant="text"
                onClick={() => {
                    /* Re-route to "/syllabus" */
                    router.push(`/${role}/${username}/course/${course}/syllabus`)
                }} 
                sx={{
                    color: pathname.includes("syllabus") ? 'primary.main' : 'text.primary',
                    borderBottom: pathname.includes("syllabus") ? '4px solid' : '0px solid',
                    borderColor:  pathname.includes("syllabus") ? 'primary.main' : '#cecece',
                    borderRadius: '0px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    { pathname.includes("syllabus") ? (
                        <TextSnippet />
                    ) : (
                        <TextSnippetOutlined />
                    )}
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'block',
                                tablet: 'block',
                                desktop: 'block',
                            },
                            fontWeight: '700',
                        }}
                    >
                        Syllabus
                    </Typography>
                </Box>
            </Button>
            <Button
                variant="text"
                onClick={() => {
                    router.push(`/${role}/${username}/course/${course}/tasks`)
                }} 
                sx={{
                    color: pathname.includes("tasks") ? 'primary.main' : 'text.primary',
                    borderBottom: pathname.includes("tasks") ? '4px solid' : '0px solid',
                    borderColor:  pathname.includes("tasks") ? 'primary.main' : '#cecece',
                    borderRadius: '0px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {pathname.includes("tasks") ? (
                        <Assignment />
                    ) : (
                        <AssignmentOutlined />
                    )}
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'block',
                                tablet: 'block',
                                desktop: 'block',
                            },
                            fontWeight: '700',
                        }}
                    >
                        Tasks
                    </Typography>
                </Box>
            </Button>
            <Button
                variant="text"
                onClick={() => {
                    router.push(`/${role}/${username}/course/${course}/roster`)
                }} 
                sx={{
                    color: pathname.includes("roster") ? 'primary.main' : 'text.primary',
                    borderBottom: pathname.includes("roster") ? '4px solid' : '0px solid',
                    borderColor:  pathname.includes("roster") ? 'primary.main' : '#cecece',
                    borderRadius: '0px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    { pathname.includes("roster") ? (
                        <RecentActors />
                    ) : (
                        <RecentActorsOutlined />
                    )}
                    <Typography
                        variant="caption"
                        sx={{
                            display: {
                                fold: 'none',
                                mobile: 'block',
                                tablet: 'block',
                                desktop: 'block',
                            },
                            fontWeight: '700',
                        }}
                    >
                        Roster
                    </Typography>
                </Box>
            </Button>
        </Stack>
    )
}

export default CourseTabSelection;
