import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import TeamV2Data from '@/assets/jsonData/TeamV2Data.json'

export const metadata = {
    title: "Dilabs - Team Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params
    const data = TeamV2Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="team-details" title1="Team Details" bottomSpace="pb-0" />
                {data && <TeamDetailsContent teamInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;