"use client"
import { useRef } from 'react';
import SingleProjectV1 from './SingleProjectV1';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import ProjectV1Data from '@/assets/jsonData/ProjectV1Data.json'
import { useState } from 'react';

const ProjectCarouselContent = () => {

    const SlideRef = useRef<SwiperRef | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeSlide, setActiveSlide] = useState<number>(1);

    const handleSlideChange = (index: number) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div className="project-style-one-area overflow-hidden default-padding">
                <div className="project-style-one-items">
                    <div className="container-fill">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-center-stage-carousel swiper">
                                    <div className="swiper-wrappers">
                                        <Swiper
                                            ref={SlideRef}
                                            initialSlide={1}
                                            onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
                                            modules={[Keyboard]}
                                            freeMode={true}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            pagination={{
                                                el: ".swiper-pagination",
                                                clickable: true,
                                            }}
                                            loop={true}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            breakpoints={{
                                                991: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                    centeredSlides: false,
                                                },
                                                1200: {
                                                    slidesPerView: 2.5,
                                                    spaceBetween: 60,
                                                },
                                                1800: {
                                                    slidesPerView: 2.8,
                                                    spaceBetween: 80,
                                                },
                                            }}
                                        >
                                            {ProjectV1Data.map(project =>
                                                <SwiperSlide key={project.id}>
                                                    <SingleProjectV1 project={project} />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
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

export default ProjectCarouselContent;