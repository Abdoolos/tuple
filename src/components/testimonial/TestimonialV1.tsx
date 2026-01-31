"use client";
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';
import TestimonialV1Data from '@/assets/jsonData/TestimonialV1Data.json'
import SingleTestimonialV1 from './SingleTestimonialV1';
import shape21 from '@/assets/img/shape/21.png';
import quoteBig from '@/assets/img/shape/quote-big.png';
import Image from 'next/image';
import { SwiperRef } from 'swiper/react';
import { Locale } from '@/lib/translations';

const TestimonialV1 = () => {
    const [locale, setLocale] = useState<Locale>('en');

    useEffect(() => {
        const savedLocale = (localStorage.getItem('locale') as Locale) || 'en';
        setLocale(savedLocale);
    }, []);

    const content = {
        en: { title: 'What people say' },
        no: { title: 'Hva folk sier' }
    };

    const t = content[locale];

    const SlideRef = useRef<SwiperRef | null>(null);

    const handleNext = () => {
        SlideRef.current?.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current?.swiper.slidePrev();
    };

    return (
        <>
            <div className="testimonial-style-two-area overflow-hidden bg-gradient text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="testimonial-style-two-box default-padding">
                                <div className="star-shape">
                                    <Image src={shape21} alt="Image Not Found" />
                                </div>
                                <Image src={quoteBig} alt="Image Not Found" />
                                <div className="site-heaidng">
                                    <h2 className="title">{t.title}</h2>
                                </div>
                                <div className="testimonial-style-two-carousel swiper">

                                    <div className="testimonial-v1-wrappers ">
                                        <Swiper
                                            ref={SlideRef}
                                            modules={[Keyboard, Autoplay, Pagination]}
                                            slidesPerView={1}
                                            spaceBetween={25}
                                            /*   autoplay={{
                                                  delay: 3000,
                                                  stopOnLastSlide: false,
                                                  disableOnInteraction: false,
                                              }} */
                                            loop={true}
                                            pagination={{
                                                el: '.testimonial-two-pagination',
                                                type: 'fraction',
                                                clickable: true,
                                            }}

                                            keyboard={{
                                                enabled: true,
                                            }}
                                        >
                                            {TestimonialV1Data.map(testimonial =>
                                                <SwiperSlide key={testimonial.id}>
                                                    <SingleTestimonialV1 testimonial={testimonial} />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>

                                    </div>
                                    <div className="testimonial-two-swiper-nav">
                                        <div className="testimonial-two-pagination"></div>
                                        <div className="testimonial-two-button-prev custom-nav" onClick={handlePrev}></div>
                                        <div className="testimonial-two-button-next custom-nav" onClick={handleNext}></div>
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

export default TestimonialV1;