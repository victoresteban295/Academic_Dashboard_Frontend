import { HistoryEdu, MoreVert } from "@mui/icons-material";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const NotGradedStudents = ({ notGradedStudents }) => {
    return (
        <Stack
            divider={<Divider flexItem />}
            sx={{
                width: '100%'
            }}
        >
            {notGradedStudents.map(student => {
                const { studId, name, gradeLvl } = student;
                return (
                    <Stack
                        key={studId}
                        className="not-graded-student"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            p: 1,
                        }}
                    >
                        <Stack
                            className="student-name"
                            spacing={0.5}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="body1" 
                                sx={{
                                    color: 'grey',
                                }}
                            >
                                {gradeLvl}
                            </Typography>
                            {/* <Stack */}
                            {/*     className="mobile-student-options" */}
                            {/*     direction="row" */}
                            {/*     spacing={1} */}
                            {/*     sx={{ */}
                            {/*         display: { */}
                            {/*             fold: 'flex', */}
                            {/*             mobile: 'flex', */}
                            {/*             tablet: 'flex', */}
                            {/*             desktop: 'none', */}
                            {/*         } */}
                            {/*     }} */}
                            {/* > */}
                            {/*     <IconButton  */}
                            {/*         size="small"  */}
                            {/*         sx={{ */}
                            {/*             color: 'primary.main', */}
                            {/*             bgcolor: 'primary.light', */}
                            {/*         }} */}
                            {/*     > */}
                            {/*         <ChatBubbleOutline fontSize="inherit" /> */}
                            {/*     </IconButton>      */}
                            {/*     <IconButton  */}
                            {/*         size="small"  */}
                            {/*         sx={{ */}
                            {/*             color: 'primary.main', */}
                            {/*             bgcolor: 'primary.light', */}
                            {/*         }} */}
                            {/*     > */}
                            {/*         <QueryStats fontSize="inherit" /> */}
                            {/*     </IconButton>      */}
                            {/* </Stack> */}
                            <Stack
                                className="student-task-options"
                                direction="row"
                                spacing={1}
                                sx={{
                                    /* display: { */
                                    /*     fold: 'none', */
                                    /*     mobile: 'none', */
                                    /*     tablet: 'none', */
                                    /*     desktop: 'flex', */
                                    /* } */
                                    display: 'flex',
                                }}
                            >
                                <Button
                                    variant="text"
                                    size="small"
                                    startIcon={<HistoryEdu fontSize="small" />}
                                    sx={{
                                        fontWeight: '700',
                                        bgcolor: 'primary.light',
                                    }} 
                                >
                                    {"Add Grade"}
                                </Button>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.light',
                                    }}
                                >
                                    <MoreVert fontSize="inherit"/> 
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Stack
                            className="task-grade"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Gauge
                                value={0}
                                startAngle={-110}
                                endAngle={110}
                                width={75}
                                height={75}
                                cornerRadius="50%"
                                text={() => `---`}
                                sx={{
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 14,
                                    },
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                {"Grade"}
                            </Typography>
                        </Stack>
                    </Stack>
                )
            })}
        </Stack> 
    )
}

export default NotGradedStudents;
