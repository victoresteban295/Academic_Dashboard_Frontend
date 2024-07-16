import { GradeSchema } from "@/lib/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Dialog, FilledInput, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const AddGradeBackdrop = ({ 
    studId,
    name,
    totalScore,
    open, 
    handleClose
}) => {

    /* React Hook Form */
    const { register, formState, control, watch, handleSubmit, reset } = useForm({
        mode: 'onBlur', 
        defaultValues: {
            score: 0,
            totalScore: totalScore,
        },
        resolver: zodResolver(GradeSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    useEffect(() => {
        register("totalScore", totalScore)
    }, [totalScore])

    /* Calculate Percentage */
    const points = watch('score')
    const percentage = Math.round((points/totalScore) * 100);

    const handleAddedGrade = (data) => {

        handleClose();
        reset();
    }

    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="mobile"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(handleAddedGrade)}
            >
                <Stack
                    spacing={1} 
                    sx={{
                        display: 'flex',
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItem: 'center',
                        }}
                    >
                        <Typography
                            variant='h6'
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                color: 'error.main',
                                bgcolor: 'error.light',
                                borderRadius: '5px',
                                px: 1,
                            }}
                        >
                            {errors.score?.message}
                        </Typography>
                    </Box>
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
                            text={({ value }) => {
                                if(isNaN(value)) {
                                    return "---";
                                } else {
                                    return `${value}%`;
                                }
                            }}
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
                        spacing={1}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                width: '85px',
                            }}
                        >
                            <Controller 
                                name="score"
                                control={control}
                                render={({field: {onChange, value}}) => {
                                    return (
                                        <FilledInput 
                                            type="number"
                                            fullWidth
                                            value={value}
                                            autoFocus
                                            hiddenLabel
                                            disableUnderline    
                                            placeholder="Score"
                                            onChange={(e) => {
                                                onChange(e.target.valueAsNumber); 
                                            }}
                                        />
                                    )
                                }}
                            />
                        </Box>
                        <Typography
                            variant="h6"
                        >
                            {`out of ${totalScore}`}
                        </Typography>
                    </Stack>
                    <Box
                        className="add-grade-button-container"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',  
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            type="submit"
                            variant="text"
                            startIcon={<AddCircleOutline fontSize="small" />}
                            sx={{
                                fontWeight: '700',
                                bgcolor: 'primary.light',
                            }}
                        >
                            {"Grade"}
                        </Button>
                    </Box>
                </Stack> 
            </form>
        </Dialog>
    )
}

export default AddGradeBackdrop;
