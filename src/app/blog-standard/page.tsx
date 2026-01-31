import BlogStandardContent from '@/components/blog/BlogStandardContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Dilabs - Blog Standard"
};

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-standard" title1="Blog Standard" bottomSpace="pb-0" offsetClass="offset-lg-1" />
                <BlogStandardContent />
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;