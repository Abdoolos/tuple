import Link from 'next/link';
import illustration8 from "@/assets/img/illustration/8.png";
import illustration9 from "@/assets/img/illustration/9.png";
import Image from 'next/image';

const ProjectDeal = () => {
    return (
        <>
            <div className="project-deal-area text-center default-padding bg-gray">
                <div className="deal-illustration">
                    <Image src={illustration8} alt="Image Not Found" />
                </div>
                <div className="arrow-illustration">
                    <Image src={illustration9} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="project-deal">
                                <h2 className="title">Have any <strong>project?</strong> <br /> Let’s talk & grow your business</h2>
                                <Link className="btn mt-30 btn-md circle btn-gradient animation" href="/contact-us">Send Message</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDeal;