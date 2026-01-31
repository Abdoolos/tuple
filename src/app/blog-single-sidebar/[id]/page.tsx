import BlogSingleSidebarContent from '@/components/blog/BlogSingleSidebarContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import BlogV1Data from '@/assets/jsonData/BlogV1Data.json'

export const metadata = {
    title: "Dilabs - Blog Single Sidebar"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleSidebarPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = BlogV1Data.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-single-sidebar" title1="Blog Single Sidebar" bottomSpace="pb-0" />
                {data && <BlogSingleSidebarContent blogInfo={data} />}
                {!data && <div>Blog Not Found</div>}
            </LayoutV1>
        </>
    );
};

export default BlogSingleSidebarPage;