import ProfAccount from "@/components/account/professor/ProfAccount";
import StudAccount from "@/components/account/student/StudAccount";
import { getProfData } from "@/lib/data/account/professor";
import { getStudData } from "@/lib/data/account/student";

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
        accountInfo = getStudData();
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
                    accountInfo={accountInfo}
                />
            )}
        </>
    )
}

export default UserAccountPage;
