"use client"
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useLocale } from '@/hooks/useLocale';

const AboutV1 = () => {
    const { locale, t } = useLocale();
    const [isOpen, setOpen] = useState(false);

    const aboutContent = {
        en: {
            title1: 'Professional Agency',
            desc1: 'We combine creativity, strategy and technology to help businesses grow – whether they sell products, services or ideas.',
            title2: 'Solutions Provider',
            desc2: 'We understand the entire journey: idea → brand → visibility → sales → scaling.',
            mainTitle: 'Providing the best service',
            mainTitleStrong: 'digital marketing',
            story: 'OUR STORY'
        },
        no: {
            title1: 'Profesjonelt Byrå',
            desc1: 'Vi kombinerer kreativitet, strategi og teknologi for å hjelpe bedrifter å vokse – uansett om de selger produkter, tjenester eller ideer.',
            title2: 'Løsningsleverandør',
            desc2: 'Vi forstår hele reisen: idé → merkevare → synlighet → salg → skalering.',
            mainTitle: 'Leverer den beste tjenesten',
            mainTitleStrong: 'digital markedsføring',
            story: 'VÅR HISTORIE'
        }
    };

    const content = aboutContent[locale];

    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="about-style-one bg-dark text-light" style={{ backgroundImage: "url(/assets/img/shape/7.png)" }}>
                                <ul className="check-list-item">
                                    <li>
                                        <h5>{content.title1}</h5>
                                        <p>
                                            {content.desc1}
                                        </p>
                                    </li>
                                    <li>
                                        <h5>{content.title2}</h5>
                                        <p>
                                            {content.desc2}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one">
                                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">{content.mainTitle} <br /> In <strong>{content.mainTitleStrong}</strong></h2>
                                <div className="thumb bg-cover" style={{ backgroundImage: "url(/assets/img/banner/2.jpg)" }}>
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" href="#" scroll={false} onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        <span><i className="fa-solid fa-play"></i> {content.story}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;