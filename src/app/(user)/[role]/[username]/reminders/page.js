import RemindersPageContent from "@/components/reminders/RemindersPageContent";

export const metadata = {
    title: "Reminders",
    themeColor: '#78a1bb'
}

const RemindersPage = ({ params }) => {
    const profile = params.role;

    return (
        <>
            <RemindersPageContent 
                profile={profile}
            />
        </>
    )
}

export default RemindersPage;
