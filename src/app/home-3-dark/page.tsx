import BannerV3 from '@/components/banner/BannerV3';
import DarkClass from '@/components/classes/DarkClass';
import ContactV1 from '@/components/contact/ContactV1';
import FeatureV1 from '@/components/feature/FeatureV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV3 from '@/components/header/HeaderV3';
import PriceV1 from '@/components/price/PriceV1';
import ProjectV2 from '@/components/project/ProjectV2';
import ShowCaseV1 from '@/components/showCase/ShowCaseV1';
import TeamV2 from '@/components/team/TeamV2';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseUsV4 from '@/components/whyChoose/WhyChooseUsV4';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Dilabs - Home 3 Dark"
};

const Home3DarkPage = () => {
    return (
        <>
            <HeaderV3 logoColor={true} />
            <BannerV3 />
            <FeatureV1 />
            <WhyChooseUsV4 />
            <ShowCaseV1 />
            <ProjectV2 />
            <PriceV1 lightShape={true} />
            <TestimonialV1 />
            <TeamV2 bgColor="bg-gray" />
            <ContactV1 contactClass="bg-gray" />
            <FooterV1 />
            <DarkClass />
        </>
    );
};

export default Home3DarkPage;