import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV1 from '@/components/price/PriceV1';
import ProcessV1 from '@/components/process/ProcessV1';
import ServicesV3Grid from '@/components/services/ServicesV3Grid';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseUsV1 from '@/components/whyChoose/WhyChooseUsV1';

export const metadata = {
    title: "Dilabs - Services 3"
};

const Services3Page = () => {
    return (
        <>
            <div className="wrapper">
                <LayoutV1>
                    <BreadCrumb breadCrumb="services-3" title1="Turn Information" title2="Into Actionable Insights" />
                    <ServicesV3Grid />
                    <WhyChooseUsV1 />
                    <PriceV1 priceClass="bg-gray default-padding" />
                    <TestimonialV1 />
                    <ProcessV1 processClass="default-padding" />
                </LayoutV1>
            </div>
        </>
    );
};

export default Services3Page;