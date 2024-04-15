import { Box, Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const GradeComposition = () => {
    return (
        <Box
            sx={{
                px: 1,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <PieChart 
                series={[
                    {
                        data: [
                            { id: 0, value: 20, color: '#b2d1e4', label: 'Homework' },
                            { id: 1, value: 30, color: '#ffbeca', label: 'Quiz' },
                            { id: 2, value: 50, color: '#c7e9cf', label: 'Exam' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </Box>
    )
}

export default GradeComposition;
