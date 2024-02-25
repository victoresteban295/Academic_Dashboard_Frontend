import { Divider, Grow, Stack, Typography } from "@mui/material";
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
                        spacing={4}
                        divider={<Divider flexItem />}
                        sx={{
                            width: '100%',
                            boxShadow: '1px 1px 4px 2px #cecece',
                            borderRadius: '10px',
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
                        >
                            <Typography
                                variant="h6"
                                align="center"
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
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="h6"
                            >
                                {"Course Description"}
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph={true}
                            >
                                {description}
                            </Typography>
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
