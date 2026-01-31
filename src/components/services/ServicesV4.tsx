'use client';

import ServiceV1Data from '@/assets/jsonData/ServiceV1Data.json'
import SingleServicesV4 from './SingleServicesV4';
import { useLocale } from '@/hooks/useLocale';

const ServicesV4 = () => {
    const { locale } = useLocale();

    const content = {
        en: {
            subtitle: 'Services we\'re offering',
            title: 'Turn Information',
            titleStrong: 'Into Actionable Insights'
        },
        no: {
            subtitle: 'Tjenester vi tilbyr',
            title: 'Gjør informasjon',
            titleStrong: 'til handlingsbare innsikter'
        }
    };

    const t = content[locale];

    return (
        <>
            <div className="default-padding box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover" style={{ backgroundImage: "url(/assets/img/shape/banner-2.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t.subtitle}</h5>
                                <h2 className="title">{t.title} <br /> {t.titleStrong}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServiceV1Data.slice(0, 3).map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServicesV4 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV4;