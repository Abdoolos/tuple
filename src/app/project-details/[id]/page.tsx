import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import ProjectV1Data from '@/assets/jsonData/ProjectV1Data.json'

export const metadata = {
    title: "Dilabs - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ProjectV1Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="project-details" title1="Search engine optimization (SEO)" bottomSpace="pb-0" />
                {data && <ProjectDetailsContent projectInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;