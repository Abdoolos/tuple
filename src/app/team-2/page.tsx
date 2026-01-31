import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import Team2Content from '@/components/team/Team2Content';

export const metadata = {
    title: "Dilabs - Team 2"
};

const Team2Page = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="team-2" title1="Professional team members" />
                <Team2Content />
            </LayoutV1>
        </>
    );
};

export default Team2Page;