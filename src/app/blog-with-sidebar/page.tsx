import BlogWithSideBarContent from '@/components/blog/BlogWithSideBarContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Dilabs - Blog With Sidebar"
};

const BlogWithSideBarPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-with-sidebar" title1="Blog Sidebar" bottomSpace="pb-0" />
                <BlogWithSideBarContent />
            </LayoutV1>
        </>
    );
};

export default BlogWithSideBarPage;