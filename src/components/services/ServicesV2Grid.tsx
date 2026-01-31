import SingleServiceV2 from './SingleServiceV2';
import ServiceV2Data from '@/assets/jsonData/ServiceV2Data.json'

interface DataType {
    serviceClass?: string;
}

const ServicesV2Grid = ({ serviceClass }: DataType) => {
    return (
        <>
            <div className={`services-style-two-area service-two-grid default-padding-top bottom-less ${serviceClass}`}>
                <div className="container">
                    <div className="row">
                        {ServiceV2Data.map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2Grid;