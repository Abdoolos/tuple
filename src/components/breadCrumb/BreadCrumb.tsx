import Link from 'next/link';
import shape16 from "@/assets/img/shape/16.png";
import Image from 'next/image';

interface DataType {
    title1?: string;
    title2?: string;
    breadCrumb?: string;
    bottomSpace?: string;
    offsetClass?: string;
}

const BreadCrumb = ({ title1, title2, breadCrumb, bottomSpace, offsetClass }: DataType) => {
    return (
        <>
            <div className="breadcrumb-area bg-gray bg-cover" style={{ backgroundImage: `url(/assets/img/shape/banner-3.jpg)` }}>
                <div className="container">
                    <div className={`breadcrumb-item ${bottomSpace ? bottomSpace : "pb-120"}`}>
                        <div className="breadcrum-shape">
                            <Image src={shape16} alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className={`col-lg-8 ${offsetClass ? offsetClass : ""}`}>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><Link href="/"><i className="fa-solid fa-home"></i> Home</Link></li>
                                        <li className="active">{breadCrumb ? breadCrumb : "error"}</li>
                                    </ol>
                                </nav>
                                <h1>{title1 ? title1 : "404 Not Found"} <br /> {title2 ? title2 : ""}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;