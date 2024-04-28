import { Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const Student = ({ name, gradeLvl, attendance, grade }) => {
    return (
        <Stack
            direction="row"
            className="student-widget"
            alignItems="center"
            justifyContent="space-between"
            sx={{
                px: 1,
                py: 1,
            }}
        >
            <Stack
                className="student-name"
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
            </Stack>
            <Stack
                direction="row"
            >
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge
                        value={attendance}
                        startAngle={-110}
                        endAngle={110}
                        width={75}
                        height={75}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
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
                        {"Attendance"}
                    </Typography>
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Gauge 
                        value={grade}
                        startAngle={-110}
                        endAngle={110}
                        width={75}
                        height={75}
                        cornerRadius="50%"
                        text={({value}) => `${value}%`}
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
        </Stack>
    )
}

export default Student;
