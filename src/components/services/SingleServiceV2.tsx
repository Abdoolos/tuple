import Link from "next/link";
import Image from 'next/image';
import shape15 from '@/assets/img/shape/15.webp';

interface DataType {
    id?: number;
    thumb?: string;
    text?: string;
    serviceName?: string;
    tag?: string;
    serviceLink?: string;
    icon?: string;
}

const SingleServiceV2 = ({ service }: { service: DataType }) => {
    const { id, text, thumb, serviceName, tag, icon } = service

    return (
        <>
            <div className="service-style-two">
                <div className="icon">
                    <Image src={`/assets/img/icon/${thumb}`} alt="Image Not Found" width={450} height={555} />
                </div>
                <p>{text}</p>
                <h4><Link href={`/services-details/${id}`}>{serviceName}</Link></h4>
                <span>{tag}</span>
                <Link href={`/services-details/${id}`} className="icon-btn"><i className={icon}></i></Link>
                <div className="shape">
                    <Image src={shape15} alt="Image Not Found" />
                </div>
            </div>
        </>
    );
};

export default SingleServiceV2;