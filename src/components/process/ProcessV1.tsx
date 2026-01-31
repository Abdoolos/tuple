'use client';

import ProcessV1Data from '@/assets/jsonData/ProcessV1Data.json'
import SingleProcessV1 from './SingleProcessV1';
import { useLocale } from '@/hooks/useLocale';

interface DataType {
    processClass?: string
}

const ProcessV1 = ({ processClass }: DataType) => {
    const { locale } = useLocale();

    const content = {
        en: {
            subtitle: 'How we work',
            title: 'Brighter future when',
            titleStrong: 'strategically more prepared'
        },
        no: {
            subtitle: 'Hvordan vi jobber',
            title: 'En lysere fremtid når',
            titleStrong: 'strategisk mer forberedt'
        }
    };

    const t = content[locale];

    return (
        <>
            <div className={`process-style-one-area text-center default-padding-bottom ${processClass}`}>
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
                        {ProcessV1Data.map(process =>
                            <div className="col-xl-3 col-lg-6 process-style-one" key={process.id}>
                                <SingleProcessV1 process={process} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;