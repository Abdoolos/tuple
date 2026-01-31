import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ProjectColumnContent from '@/components/project/ProjectColumnContent';

export const metadata = {
    title: "Dilabs - Project 3 Column"
};

const Project3ColumnPage = () => {
    return (
        <>
            <div className="wrapper">
                <LayoutV1>
                    <BreadCrumb breadCrumb="project-3-column" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                    <ProjectColumnContent columns="colums-3" />
                </LayoutV1>
            </div>
        </>
    );
};

export default Project3ColumnPage;