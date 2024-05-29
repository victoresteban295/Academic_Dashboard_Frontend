import { Alert, Snackbar } from "@mui/material";

const AlertPopUpMsg = ({ open, handleClose, errorMsg }) => {
    
    //Close Alert Popup Message
    const handleCloseAlert = () => {
        handleClose();
    }

    return (
        <Snackbar
            open={open}
            anchorOrigin={{
                vertical: 'top', 
                horizontal: 'right',
            }}
            autoHideDuration={15000}
            onClose={handleCloseAlert}
        >
            <Alert
                onClose={handleCloseAlert}
                severity="error"
                sx={{
                    position: 'relative',
                    color: 'text.primary',
                    bgcolor: 'error.light',
                    top: {
                        fold: '0px',
                        mobile: '0px',
                        tablet: '50px',
                        desktop: '50px',
                    },
                }}
            >
                {errorMsg}
            </Alert>
        </Snackbar> 
    )
}

export default AlertPopUpMsg;
