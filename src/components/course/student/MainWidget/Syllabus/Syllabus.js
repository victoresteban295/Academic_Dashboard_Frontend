import { Box, Grow, Stack, Typography } from "@mui/material";
import InfoSection from "./InfoSection";

const Syllabus = ({ 
    tab, 
    title, 
    school, 
    semester, 
    description,
    infoSections 
}) => {
    return (
        <>
            {tab === "syllabus" && (
                <Grow in={true}>
                    <Stack
                        spacing={2}
                        sx={{
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '5px',
                            py: {
                                fold: 2,
                                mobile: 2,
                                tablet: 4,
                                desktop: 4,
                            },
                            px: {
                                fold: 2,
                                mobile: 2,
                                tablet: 2,
                                desktop: 4,
                            }
                        }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                overflowX: 'hidden',
                            }}
                        >
                            <Typography
                                variant="h6"
                                align="center"
                                sx={{
                                    fontWeight: '700',
                                }}
                            >
                                {title} 
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                            >
                                {school}
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                            >
                                {semester}
                            </Typography>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <Box
                                sx={{
                                    px: 1,
                                    color: 'primary.main',
                                    borderRadius: '5px',
                                    bgcolor: '#e3f3ff',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: '700',
                                    }}
                                >
                                    {"Course Description"}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    px: 1,
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    paragraph={true}
                                >
                                    {description}
                                </Typography>
                            </Box>
                        </Stack>
                        {infoSections.map(infoSection => {
                            const { title, info } = infoSection;
                            return (
                                <InfoSection 
                                    key={title}
                                    title={title}
                                    info={info}
                                />
                            )
                        })} 
                    </Stack>
                </Grow>
            )}
        </>
    )
}

export default Syllabus;
