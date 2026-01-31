import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    thumb2?: string;
    author?: string;
    date?: string;
    title?: string;
    icon?: string;
    btnText?: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb2, author, date, title, icon, btnText } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb2}`} alt="Image Not Found" width={800} height={600} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link href="#" scroll={false}>{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2 className="post-title"><Link href={`/blog-single-sidebar/${id}`}>{title}</Link></h2>
                    <Link href={`/blog-single-sidebar/${id}`} className="button-regular">
                        {btnText} <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;