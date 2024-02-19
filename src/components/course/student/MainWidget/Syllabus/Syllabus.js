import { Divider, Grow, Stack, Typography } from "@mui/material";
import InfoSection from "./InfoSection";

const Syllabus = ({ tab, title, school, semester, infoSections }) => {
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
                            p: 4,
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
                        {infoSections.map(infoSection => {
                            const { sectionTitle, info } = infoSection;
                            return (
                                <InfoSection 
                                    sectionTitle={sectionTitle}
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
