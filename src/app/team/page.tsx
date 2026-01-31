import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import Team1Content from '@/components/team/Team1Content';

export const metadata = {
    title: "Dilabs - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="team" title1="Professional team members" bottomSpace="pb-0" />
                <Team1Content />
            </LayoutV1>
        </>
    );
};

export default TeamPage;