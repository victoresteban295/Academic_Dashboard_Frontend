import ChecklistPageContent from "@/components/checklist/ChecklistPageContent";
import { getAllChecklists, getChecklists } from "@/lib/utils/checklist/backend/backendChecklist";
import { getGrouplists } from "@/lib/utils/checklist/backend/backendGrouplist";

export const metadata = {
    title: "Checklist",
    themeColor: '#78a1bb'
}

const ChecklistPage = async ({ params }) => {
    const { username } = params;
    let allChecklists;
    let checklists;
    let grouplists;

    //Fetching Method Calls
    const allChecklistsData = getAllChecklists(username);
    const checklistsData = getChecklists(username);
    const grouplistsData = getGrouplists(username);

    //Fetch all Data in Parallel
    try{
        //Fetching Data in Parallel
        const [getAllChecklists, getChecklists, getGrouplists] = await Promise
            .all([allChecklistsData, checklistsData, grouplistsData]);

        allChecklists = getAllChecklists;
        checklists = getChecklists;
        grouplists = getGrouplists;
    } catch(error) {
        throw new Error("Failed to Load User's Checklists");
    }

    //Fetch Data in parallel Here and pass it to checklistpagecontent component
    return (
        <>
            <ChecklistPageContent 
                username={username}
                allChecklists={allChecklists}
                lists={checklists}
                grouplists={grouplists}
            />
        </>
    )
}

export default ChecklistPage;
