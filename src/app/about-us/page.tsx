import AboutV2 from "@/components/about/AboutV2";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";
import WhyChooseUsV2 from "@/components/whyChoose/WhyChooseUsV2";

export const metadata = {
    title: "Dilabs - About Us"
};

const AboutPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" />
                <AboutV2 />
                <WhyChooseUsV2 />
                <TestimonialV2 />
                <TeamV2 bgColor="bg-gray" />
            </LayoutV1>
        </>
    );
};

export default AboutPage;