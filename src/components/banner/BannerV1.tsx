"use client"
import Link from 'next/link';
import Image from 'next/image';
import shape2 from "@/assets/img/shape/2.png"
import thumb1 from "@/assets/img/thumb/1.jpg"
import thumb3 from "@/assets/img/thumb/3.jpg"
import Animate from '../animation/Animate';
import { useLocale } from '@/hooks/useLocale';

const BannerV1 = () => {
    const { t } = useLocale();

    return (
        <>
            <div className="banner-style-one-area" style={{ backgroundImage: 'url(/assets/img/shape/1.png)' }}>
                <div className="shape-left-top">
                    <Image src={shape2} alt="Shape" />
                </div>
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="information">

                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>{t.banner.title.split(' ').slice(0, 2).join(' ')} <strong>{t.banner.title.split(' ').slice(2).join(' ')}</strong></h2>
                                        </Animate>

                                        <Animate className='animate__animated animate__fadeInUp' delay="900ms" duration="400ms">
                                            <p>
                                                {t.banner.description}
                                            </p>
                                        </Animate>

                                        <Animate className='animate__animated animate__fadeInUp' delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <Link className="btn btn-md btn-gradient animation" href="/contact-us">{t.banner.cta1}</Link>
                                            </div>
                                        </Animate>

                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">

                                        <Animate className='animate__animated animate__fadeInUp'>
                                            <Image src={thumb3} alt="Banner Image" />
                                        </Animate>

                                        <Animate className='animate__animated animate__fadeInDown' delay="500ms">
                                            <Image src={thumb1} alt="Banner Image" />
                                        </Animate>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;