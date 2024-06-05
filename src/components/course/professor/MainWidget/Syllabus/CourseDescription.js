import { Stack, Typography } from "@mui/material";
import { useState } from "react";

const CourseDescription = ({ title, crsDescription, instructor }) => {

    /* State Value: Description */
    const [description, setDescription] = useState(crsDescription);
    const changeDescription = (updatedDescription) => {
        setDescription(updatedDescription);
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                width: '100%',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                py: 2,
                px: 4,
            }}
        >
            <Stack
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={1}
            >
                <Stack
                    spacing={0}
                >
                    <Typography
                        variant="h6"
                        align="left"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {title} 
                    </Typography>
                    <Typography
                        variant="body2"
                        align="left"
                        sx={{
                            fontWeight: 'bold',
                            color: 'primary.main',
                        }}
                    >
                        {instructor}
                    </Typography>
                </Stack>
                <Typography
                    variant="body1"
                    align="left"
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default CourseDescription;
