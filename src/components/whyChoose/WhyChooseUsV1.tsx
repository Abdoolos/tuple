'use client';

import AchievementV1Data from '@/assets/jsonData/AchievementV1Data.json';
import SingleAchievementV1 from './SingleAchievement';
import Image from 'next/image';
import shape11 from "@/assets/img/shape/11.png"
import { useLocale } from '@/hooks/useLocale';

interface DataType {
    chooseClass?: string;
}

const WhyChooseUsV1 = ({ chooseClass }: DataType) => {
    const { locale } = useLocale();

    const content = {
        en: {
            subtitle: 'Why Choose Us',
            title: 'Get benefits and',
            titleStrong: 'advantages market goal',
            description: 'We combine creativity, strategy and technology to help businesses grow. Our team of experts is dedicated to delivering results that exceed expectations.',
            list: ['Project Initialization', 'Realtime Best Data Solutions', 'Market Development']
        },
        no: {
            subtitle: 'Hvorfor Velge Oss',
            title: 'Få fordeler og',
            titleStrong: 'markedsmål',
            description: 'Vi kombinerer kreativitet, strategi og teknologi for å hjelpe bedrifter å vokse. Vårt team av eksperter er dedikert til å levere resultater som overgår forventningene.',
            list: ['Prosjektinitialisering', 'Sanntids beste dataløsninger', 'Markedsutvikling']
        }
    };

    const t = content[locale];

    return (
        <>
            <div className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5">
                            <div className="achivement-counter" style={{ backgroundImage: 'url(/assets/img/shape/banner-4.png)' }}>
                                <div className="shape-animated-left-bottom">
                                    <Image src={shape11} alt="shape" />
                                </div>
                                <ul>
                                    {AchievementV1Data.map(achievement =>
                                        <SingleAchievementV1 achievement={achievement} key={achievement.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
                            <div className="choose-us-card">
                                <h4 className="sub-title">{t.subtitle}</h4>
                                <h2 className="title">{t.title} <br /> {t.titleStrong}</h2>
                                <p>
                                    {t.description}
                                </p>
                                <ul className="list-check">
                                    {t.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV1;