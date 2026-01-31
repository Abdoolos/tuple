import AboutV3 from "@/components/about/AboutV3";
import BannerV4 from "@/components/banner/BannerV4";
import BlogV1 from "@/components/blog/BlogV1";
import DarkClass from "@/components/classes/DarkClass";
import ContactV1 from "@/components/contact/ContactV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV4 from "@/components/header/HeaderV4";
import ServiceV3 from "@/components/services/ServiceV3";
import ShowCaseV2 from "@/components/showCase/ShowCaseV2";
import TeamV3 from "@/components/team/TeamV3";
import WhyChooseUsV3 from "@/components/whyChoose/WhyChooseUsV3";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Dilabs - Business Dark"
};

const BusinessDarkPage = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV4 />
                <BannerV4 />
                <AboutV3 />
                <ServiceV3 />
                <ShowCaseV2 />
                <TeamV3 />
                <WhyChooseUsV3 />
                <ContactV1 />
                <BlogV1 />
                <FooterV1 />
                <DarkClass />
            </div>
        </>
    );
};

export default BusinessDarkPage;