import ChecklistPageContent from "@/components/checklist/ChecklistPageContent";
import { getAllChecklists, getChecklists } from "@/lib/utils/checklist/backend/backendChecklist";
import { getGrouplists } from "@/lib/utils/checklist/backend/backendGrouplist";

const ChecklistPage = async ({ params }) => {
    const { username } = params;

    //Fetching Method Calls
    const allChecklistsData = getAllChecklists(username);
    const checklistsData = getChecklists(username);
    const grouplistsData = getGrouplists(username);

    //Fetch all Data in Parallel
    const [allChecklists, checklists, grouplists] = await Promise
        .all([allChecklistsData, checklistsData, grouplistsData]);

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
