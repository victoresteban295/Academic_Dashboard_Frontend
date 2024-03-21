import ProfAccount from "@/components/account/professor/ProfAccount";
import StudAccount from "@/components/account/student/StudAccount";
import { getProfData } from "@/lib/data/account/professor";

export const metadata = {
    title: "Account",
    themeColor: '#78a1bb'
}

const UserAccountPage = ({ params }) => {
    const { role } = params;
    const isProf = role === 'professor';

    let accountInfo;
    if(isProf) {
        accountInfo = getProfData(); 
    } else {

    }

    return (
        <>
            {isProf ? (
                <ProfAccount 
                    accountInfo={accountInfo}
                    officeHrs={accountInfo.officeHrs}
                />
            ): (
                <StudAccount 
                />
            )}
        </>
    )
}

export default UserAccountPage;
