"use client";
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from "next/link";
import WhyChooseUsV4Data from '@/assets/jsonData/WhyChooseUsV4Data.json'
import SingleChooseV3 from './SingleChooseV4';
import Image from 'next/image';
import illustration6 from "@/assets/img/illustration/6.png";
import illustration7 from "@/assets/img/illustration/7.png";
import illustration5 from "@/assets/img/illustration/5.png";
import Animate from '../animation/Animate';

const WhyChooseUsV4 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="choose-us-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 choose-us-style-one">
                            <h4 className="sub-title">Why Choose Us</h4>
                            <h2 className="title">Were on a mission <br /> to your business grow</h2>
                            <div className="choose-us-thumb mt-50 mt-xs-40">
                                <Animate className='animate__animated animate__fadeInUp'>
                                    <Image src={illustration6} alt="Image Not Found" />
                                </Animate>

                                <Animate className='animate__animated animate__fadeInDown'>
                                    <Image src={illustration7} alt="Image Not Found" />
                                </Animate>

                                <Animate className='animate__animated animate__fadeInRight'>
                                    <Image src={illustration5} alt="Image Not Found" />
                                </Animate>
                            </div>
                        </div>
                        <div className="col-lg-5 pl-70 pl-md-15 pl-xs-15 choose-us-style-one">
                            <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Award Winning Agency</textPath></text>
                                </svg>
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId="95N_spFNEkY" onClose={() => setOpen(false)} />
                                <Link className="popup-youtube" href="#" scroll={false} onClick={() => setOpen(true)}>
                                    <i className="fa-solid fa-play"></i>
                                </Link>
                            </div>
                            <ul className="feature-process mt-75 mt-xs-0">
                                {WhyChooseUsV4Data.map(choose =>
                                    <SingleChooseV3 choose={choose} key={choose.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV4;