import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV1 from '@/components/price/PriceV1';
import ProcessV1 from '@/components/process/ProcessV1';
import ServicesV4 from '@/components/services/ServicesV4';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseUsV1 from '@/components/whyChoose/WhyChooseUsV1';

export const metadata = {
    title: "Dilabs - Services"
};

const ServicePage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="services" title1="Turn Information" title2="Into Actionable Insights" />
                <ServicesV4 />
                <WhyChooseUsV1 />
                <PriceV1 priceClass="default-padding bg-gray" />
                <TestimonialV1 />
                <ProcessV1 processClass="default-padding" />
            </LayoutV1>
        </>
    );
};

export default ServicePage;