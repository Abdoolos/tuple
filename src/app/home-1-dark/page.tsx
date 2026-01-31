import AboutV1 from '@/components/about/AboutV1';
import BannerV1 from '@/components/banner/BannerV1';
import BlogV1 from '@/components/blog/BlogV1';
import DarkClass from '@/components/classes/DarkClass';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import ProcessV1 from '@/components/process/ProcessV1';
import ProjectV1 from '@/components/project/ProjectV1';
import ServicesV1 from '@/components/services/ServicesV1';
import TeamV2 from '@/components/team/TeamV2';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseUsV1 from '@/components/whyChoose/WhyChooseUsV1';

export const metadata = {
    title: "Dilabs - Home 1 Dark"
};

const Home1DarkPage = () => {
    return (
        <>
            <HeaderV1 headerClass="dark" logoColor={true} />
            <BannerV1 />
            <ServicesV1 />
            <AboutV1 />
            <ProcessV1 />
            <ProjectV1 />
            <WhyChooseUsV1 chooseClass="bg-gray" />
            <TeamV2 />
            <TestimonialV1 />
            <BlogV1 />
            <FooterV1 />
            <DarkClass />
        </>
    );
};

export default Home1DarkPage;