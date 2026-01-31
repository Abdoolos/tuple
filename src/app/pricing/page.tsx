import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV2 from '@/components/price/PriceV2';
import ProjectDeal from '@/components/project/ProjectDeal';

export const metadata = {
    title: "Dilabs - Price"
};

const PricingPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="pricing" title1="Committed to" title2="giving the best price" bottomSpace="pb-0" />
                <PriceV2 />
                <ProjectDeal />
            </LayoutV1>
        </>
    );
};

export default PricingPage;