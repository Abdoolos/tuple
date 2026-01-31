import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    thumbFull?: string;
    subTitle?: string;
    title?: string;
    shape?: string;
}

const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, thumb, subTitle, title, shape } = project;

    return (
        <>
            <div className="swiper-slide">
                <div className="project-style-one">
                    <Image src={`/assets/img/portfolio/${thumb}`} alt="Thumb" width={800} height={800} />
                    <div className="overlay">
                        <span>{subTitle}</span>
                        <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                    </div>
                    <div className="shape">
                        <Image src={`/assets/img/shape/${shape}`} alt="shape" width={577} height={478} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;