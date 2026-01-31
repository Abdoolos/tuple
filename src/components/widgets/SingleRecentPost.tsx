import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    title?: string;
}

const SingleRecentPost = ({ post }: { post: DataType }) => {
    const { id, thumb, date, title } = post

    return (
        <>
            <li>
                <div className="thumb">
                    <Link href={`/blog-single-sidebar/${id}`}>
                        <Image src={`/assets/img/gallery/${thumb}`} alt="Thumb" width={300} height={300} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{date}</span>
                    </div>
                    <Link href={`/blog-single-sidebar/${id}`}>{title}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;