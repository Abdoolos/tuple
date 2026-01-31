import Link from 'next/link';

interface DataType {
    id?: number;
    icon?: string;
    serviceName?: string;
    serviceText?: string;
}

const SinglePopularService = ({ popular }: { popular: DataType }) => {
    const { id, icon, serviceName, serviceText } = popular

    return (
        <>
            <div className="col-md-6">
                <div className="item">
                    <i className={icon}></i>
                    <h4><Link href={`/services-details/${id}`}>{serviceName}</Link></h4>
                    <p>{serviceText}</p>
                </div>
            </div>
        </>
    );
};

export default SinglePopularService;