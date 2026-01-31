import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    text?: string;
    btnText?: string;
    shape?: string;
}

const SingleShowCaseV2 = ({ showcase }: { showcase: DataType }) => {
    const { id, thumb, title, text, btnText, shape } = showcase;

    return (
        <>
            <div className="swiper-slide">
                <div className="case-style-two">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="case-thumb">
                                <Image src={`/assets/img/gallery/${thumb}`} alt="Image Not Found" width={1500} height={1000} />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="info text-light" style={{ backgroundImage: `url(/assets/img/shape/${shape})` }}>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <Link className="btn btn-md btn-dark animation" href={`/project-details/${id}`}>{btnText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SingleShowCaseV2;