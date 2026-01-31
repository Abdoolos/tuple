import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    serviceIcon?: string;
    serviceTitle?: string;
    serviceText?: string;
    btnText?: string;
    btnLink?: string;
    btnIcon?: string;
}

const SingleServiceV3 = ({ service }: { service: DataType }) => {
    const { id, thumb, serviceIcon, serviceTitle, serviceText, btnText, btnIcon } = service

    return (
        <>
            <div className="services-style-three" style={{ backgroundImage: `url(/assets/img/shape/${thumb})` }}>
                <i className={serviceIcon}></i>
                <h4><Link href={`/services-details/${id}`}>{serviceTitle}</Link></h4>
                <p>{serviceText}</p>
                <Link href={`/services-details/${id}`} className="btn-service">{btnText}<i className={btnIcon}></i></Link>
            </div>
        </>
    );
};

export default SingleServiceV3;