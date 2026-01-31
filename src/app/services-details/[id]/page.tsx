import ServiceV1Data from '@/assets/jsonData/ServiceV1Data.json'
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ServicesDetailsContent from '@/components/services/ServicesDetailsContent';

export const metadata = {
    title: "Dilabs - Services Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ServiceV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <div className="wrapper">
                <LayoutV1>
                    <BreadCrumb breadCrumb="services-details" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                    {data && <ServicesDetailsContent serviceInfo={data} />}
                </LayoutV1>
            </div>
        </>
    );
};

export default ServiceDetailsPage;