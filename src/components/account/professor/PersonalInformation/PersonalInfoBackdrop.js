import { ProfAccountSchema } from "@/lib/schemas/AccountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const PersonalInfoBackdrop = ({ 
    open, 
    handleClose,
    department, 
    academicRole, 
    apptYear, 
    officeBuilding, 
    officeRoom, 
    changeAccount
}) => {

    /* React Hook Form */
    const { formState, control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {
            department: department,
            academicRole: academicRole,
            apptYear: apptYear,
            officeBuilding: officeBuilding,
            officeRoom: officeRoom
        },
        resolver: zodResolver(ProfAccountSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* Close Backdrop */
    const handleCloseBackdrop = () => {
        handleClose();
    }

    const editAccount = (data) => {
        try {
            //Frontend: Edit Professor's Account Info
            const updatedData = {
                department: data.department
            } 

            //Update State Value
            changeAccount(updatedData);

            //Backend API: Update Database
            
        } catch(error) {

        }
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth="tablet"
            open={open}
            onClose={handleCloseBackdrop}
        >
            <form
                onSubmit={handleSubmit(editAccount)} 
            >
                <Stack
                    spacing={2}
                    sx={{
                        p: 2,
                    }}
                >

                </Stack>
            </form>
        </Dialog>
    )
}

export default PersonalInfoBackdrop;
