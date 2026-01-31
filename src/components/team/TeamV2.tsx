'use client';

import Animate from '../animation/Animate';
import SingleTeamV2 from './SingleTeamV2';
import TeamV2Data from '@/assets/jsonData/TeamV2Data.json'
import { useLocale } from '@/hooks/useLocale';

interface DataType {
    bgColor?: string;
}

const TeamV2 = ({ bgColor }: DataType) => {
    const { locale } = useLocale();

    const content = {
        en: {
            subtitle: 'Team members',
            title: 'Our professional',
            titleStrong: 'expert team members'
        },
        no: {
            subtitle: 'Teammedlemmer',
            title: 'Våre profesjonelle',
            titleStrong: 'ekspert teammedlemmer'
        }
    };

    const t = content[locale];

    return (
        <>
            <div className={`${bgColor ? bgColor : ""} team-style-two-area default-padding-top pb-70 pb-xs-0`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-12">
                            <div className="site-heading">
                                <h5 className="sub-title">{t.subtitle}</h5>
                                <h2 className="title">{t.title} <br /> {t.titleStrong}</h2>
                            </div>
                        </div>
                        {TeamV2Data.slice(0, 5).map(team =>
                            <Animate className={`${team.animationClass}`} delay={team.animationDelay} key={team.id}>
                                <div className={`col-xl-3 col-lg-4 col-md-6 mb-50`}>
                                    <SingleTeamV2 team={team} />
                                </div>
                            </Animate>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV2;