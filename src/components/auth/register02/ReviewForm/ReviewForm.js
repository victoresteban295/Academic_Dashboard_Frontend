import { Box, Button, Typography } from "@mui/material";

const ReviewForm = ({ handleBack }) => {
    const hiddenPassword = (length) => {
        let hidden = '';
        for(let i = 0; i < length; i++) {
            hidden += '*';
        } 
        return hidden;
    }
    return (
        <form noValidate >
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button 
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                > 
                    <Typography
                        variant="button"
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Back
                    </Typography>
                </Button> 
                <Box sx={{ flex: '1 1 auto' }} /> 
                <Button 
                    type="submit"
                    variant="contained" 
                > 
                    <Typography
                        variant="button"
                        sx={{
                            color: '#000',
                            fontWeight: '700',
                        }}
                    >
                        Submit
                    </Typography>
                </Button> 
            </Box> 
        </form>
    )

}

export default ReviewForm;
