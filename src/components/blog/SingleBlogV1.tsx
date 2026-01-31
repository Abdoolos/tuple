import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    thumbFull?: string;
    tag?: string;
    author?: string;
    date?: string;
    title?: string;
    midTitle?: string;
    postLink?: string;
    btnText?: string;
    btnIcon?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, tag, author, date, title, btnText, btnIcon } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="relative">
                    <div className="thumb">
                        <Link href={`/blog-single-sidebar/${id}`}>
                            <Image src={`/assets/img/blog/${thumb}`} alt="Image Not Found" width={800} height={600} />
                        </Link>
                    </div>
                    <div className="tags">
                        <Link href="#" scroll={false}>{tag}</Link>
                    </div>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link href="#" scroll={false}>{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h3 className="post-title"><Link href={`/blog-single-sidebar/${id}`}>{title}</Link></h3>
                    <Link href={`/blog-single-sidebar/${id}`} className="button-regular">
                        {btnText} <i className={btnIcon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;