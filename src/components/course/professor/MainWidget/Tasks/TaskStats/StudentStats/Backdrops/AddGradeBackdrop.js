import { Box, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { useState } from "react";

const AddGradeBackdrop = ({ 
    studId,
    name,
    totalScore,
    open, 
    handleClose
}) => {

    const [score, setScore] = useState(null);
    const percentage = Math.round((score/totalScore) * 100);

    const handleCloseBackdrop = () => {
        handleClose();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={1} 
                sx={{
                    display: 'flex',
                    p: 2,
                }}
            >
                {/* <Box */}
                {/*     sx={{ */}
                {/*         display: 'flex', */}
                {/*         flexGrow: 1,  */}
                {/*         alignItems: 'center', */}
                {/*     }} */}
                {/* > */}
                {/*     <Typography */}
                {/*         variant='h6' */}
                {/*         sx={{ */}
                {/*             flexGrow: 1, */}
                {/*             align: 'center', */}
                {/*             mx: 1, */}
                {/*             fontWeight: '700' */}
                {/*         }} */}
                {/*     > */}
                {/*         {`Add Grade`} */}
                {/*     </Typography> */}
                {/* </Box> */}
                <Box
                    className="grade-percentage"
                    sx={{
                        px: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Gauge
                        value={percentage}
                        height={200}
                        cornerRadius="50%"
                        text={({ value }) => `${value}%`}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 25,
                            },
                        }}
                    />
                    <Typography
                        variant="h6"
                    >
                        {"Add Grade For"}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
                <Stack
                    spacing={0}
                    direction="row"
                >
                    <FilledInput 
                        defaultValue=""
                        value={score}
                        autoFocus
                        hiddenLabel
                        disableUnderline    
                        placeholder="Score"
                        onChange={(event) => setScore(event.target.value)}
                        inputProps={{
                            type: "number",
                            min: 0,
                            max: totalScore,
                            step: 1,
                        }}
                         
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            /* fontWeight: '700', */
                        }}
                    >
                        {`out of ${totalScore}`}
                    </Typography>
                </Stack>
            </Stack> 
        </Dialog>
    )
}

export default AddGradeBackdrop;
