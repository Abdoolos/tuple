import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import Team3Content from '@/components/team/Team3Content';

export const metadata = {
    title: "Dilabs - Team 3"
};

const Team3age = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="team-3" title1="Professional team members" />
                <Team3Content />
            </LayoutV1>
        </>
    );
};

export default Team3age;