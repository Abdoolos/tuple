import Link from "next/link";
import SocialShare2 from '../others/SocialShare2';

const BlogTagsShare = () => {
    return (
        <>
            <div className="post-tags share">
                <div className="tags">
                    <h4>Tags: </h4>
                    <Link href="#" scroll={false}>Algorithm</Link>
                    <Link href="#" scroll={false}>Data science</Link>
                </div>
                <div className="social">
                    <h4>Share:</h4>
                    <ul>
                        <SocialShare2 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogTagsShare;