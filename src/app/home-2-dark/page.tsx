import AboutV2 from "@/components/about/AboutV2";
import BannerV2 from "@/components/banner/BannerV2";
import BlogV1 from "@/components/blog/BlogV1";
import BrandV1 from "@/components/brand/BrandV1";
import DarkClass from "@/components/classes/DarkClass";
import ContactV1 from "@/components/contact/ContactV1";
import Experience from "@/components/experience/Experience";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV2 from "@/components/header/HeaderV2";
import ServicesV2 from "@/components/services/ServicesV2";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";
import WhyChooseUsV2 from "@/components/whyChoose/WhyChooseUsV2";

export const metadata = {
    title: "Dilabs - Home 2 Dark"
};

const Home2DarkPage = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV2 logoColor={true} />
                <BannerV2 />
                <AboutV2 />
                <ServicesV2 />
                <TestimonialV2 />
                <WhyChooseUsV2 />
                <TeamV1 />
                <Experience />
                <BrandV1 />
                <ContactV1 />
                <BlogV1 />
                <FooterV1 />
                <DarkClass />
            </div>
        </>
    );
};

export default Home2DarkPage;