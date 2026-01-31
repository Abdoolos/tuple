import Image from 'next/image';
import illustration2 from '@/assets/img/illustration/2.png';
import illustration3 from '@/assets/img/illustration/3.png';
import BannerV3NewsLetter from '../form/BannerV3NewsLetter';
import Animate from '../animation/Animate';

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three-area overflow-hidden" style={{ backgroundImage: "url(/assets/img/shape/banner-5.jpg)" }}>
                <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                                    <div className="information">

                                        <Animate className='animate__animated animate__fadeInUp' duration="400ms" delay="500ms">
                                            <h2>Increase sales <br /> with <strong>digital</strong> marketing</h2>
                                        </Animate>

                                        <Animate className='animate__animated animate__fadeInUp' duration="400ms" delay="900ms">
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable.
                                            </p>
                                        </Animate>

                                        <Animate className='animate__animated animate__fadeInDown' duration="400ms" delay="1200ms">
                                            <div className="newsletter-form">
                                                <BannerV3NewsLetter />
                                            </div>
                                        </Animate>

                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">

                                        <Animate className='animate__animated animate__fadeInDown'>
                                            <Image src={illustration2} alt="Thumb" />
                                        </Animate>

                                        <Image src={illustration3} alt="Image Not Found" />
                                        <div className="progress-card">
                                            <div className="icon">
                                                <i className="flaticon-startup-5"></i>
                                            </div>
                                            <div className="info">
                                                <p>Sale Increase</p>
                                                <h4>+128%</h4>
                                            </div>
                                        </div>
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

export default BannerV3;