import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    id?: number;
    icon1?: string;
    icon1Dark?: string;
    thumb?: string;
    icon2?: string;
    text?: string;
    title?: string;
}

const SingleServicesV4 = ({ service }: { service: DataType }) => {
    const { id, icon1, icon2, text, title } = service;

    return (
        <>
            <div className="services-style-one">
                <Image src={`/assets/img/icon/${icon1}`} alt="Icon" width={110} height={100} />
                <Link href={`/services-details/${id}`} className="btn-arrow">
                    <i className={icon2}></i>
                </Link>
                <p>{text}</p>
                <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
            </div>
        </>
    );
};

export default SingleServicesV4;