import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ProjectColumnContent from '@/components/project/ProjectColumnContent';

export const metadata = {
    title: "Dilabs - Project 2 Column"
};

const Project2ColumnPage = () => {
    return (
        <>
            <div className="wrapper">
                <LayoutV1>
                    <BreadCrumb breadCrumb="project-2-column" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                    <ProjectColumnContent columns="colums-2" />
                </LayoutV1>
            </div>
        </>
    );
};

export default Project2ColumnPage;