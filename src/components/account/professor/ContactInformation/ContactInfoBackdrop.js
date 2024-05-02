import { Dialog } from "@mui/material";

const ContactInfoBackdrop = ({
    open,
    handleClose,
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    email,
    phone,
    changeAccount,
    handleOpenAlert
}) => {

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
        reset();
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >

        </Dialog>
    )
}

export default ContactInfoBackdrop;
