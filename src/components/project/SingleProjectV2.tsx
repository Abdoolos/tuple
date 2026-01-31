import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    title?: string;
    titleLink?: string;
    list1?: string;
    list2?: string;
    btnLink?: string;
    btnIcon?: string;
}

const SingleProjectV2 = ({ gallery }: { gallery: DataType }) => {
    const { id, thumb, title, list1, list2, btnIcon } = gallery

    return (
        <>
            <div className="gallery-item">
                <div className="gallery-style-two">
                    <div className="thumb">
                        <Image src={`/assets/img/portfolio/${thumb}`} alt="thumb" width={800} height={600} />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                            <ul className="gallery-list">
                                <li>{list1}</li>
                                <li>{list2}</li>
                            </ul>
                        </div>
                        <div className="button">
                            <Link href={`/project-details/${id}`}><i className={btnIcon}></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV2;