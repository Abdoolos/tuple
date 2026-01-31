import Image from 'next/image';

interface DataType {
    id?: number;
    text?: string;
    thumb?: string;
    name?: string;
    designation?: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, thumb, name, designation } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-one">
                    <div className="item">
                        <div className="content">
                            <p>{text}</p>
                        </div>
                        <div className="provider">
                            <div className="thumb">
                                <Image src={`/assets/img/team/${thumb}`} alt="Thumb" width={800} height={800} />
                            </div>
                            <div className="info">
                                <h4>{name}</h4>
                                <span>{designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;