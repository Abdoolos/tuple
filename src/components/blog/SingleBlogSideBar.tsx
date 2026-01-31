import Link from "next/link";
import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
    author?: string;
    date?: string;
    title?: string;
    text?: string;
    icon?: string;
    btnText?: string;
}


const SingleBlogSideBar = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title, text, icon, btnText } = blog

    return (
        <>
            <div className="blog-style-one item">
                <div className="thumb">
                    <Link href={`/blog-single-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} alt="Image Not Found" width={1500} height={845} />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li><Link href="#" scroll={false}>{author}</Link></li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h2>
                        <Link href={`/blog-single-sidebar/${id}`}>{title}</Link>
                    </h2>
                    <p> {text}</p>
                    <Link href={`/blog-single-sidebar/${id}`} className="button-regular">
                        {btnText} <i className={icon}></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSideBar;