import AboutV1 from '@/components/about/AboutV1';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV1 from '@/components/price/PriceV1';
import ProjectDeal from '@/components/project/ProjectDeal';
import ServicesV2Grid from '@/components/services/ServicesV2Grid';
import TestimonialV2 from '@/components/testimonial/TestimonialV2';

export const metadata = {
    title: "Dilabs - Services 2"
};

const Services2Page = () => {
    return (
        <>
            <div className="wrapper">
                <LayoutV1>
                    <BreadCrumb breadCrumb="services-2" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                    <ServicesV2Grid />
                    <AboutV1 />
                    <PriceV1 priceClass="bg-gray default-padding" />
                    <TestimonialV2 />
                    <ProjectDeal />
                </LayoutV1>
            </div>
        </>
    );
};

export default Services2Page;