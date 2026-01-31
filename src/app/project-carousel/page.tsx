import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ProjectCarouselContent from '@/components/project/ProjectCarouselContent';

export const metadata = {
    title: "Dilabs - Project Carousel"
};

const ProjectCarouselPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="project-carousel" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                <ProjectCarouselContent />
            </LayoutV1>
        </>
    );
};

export default ProjectCarouselPage;