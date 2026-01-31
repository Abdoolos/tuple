import BlogSingleContent from '@/components/blog/BlogSingleContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import BlogV1Data from '@/assets/jsonData/BlogV1Data.json'

export const metadata = {
    title: "Dilabs - Blog Single"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSinglePage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = BlogV1Data.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-single" title1="Blog Grid" bottomSpace="pb-0" offsetClass="offset-lg-1" />
                {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogV1Data.length} />}
                {!data && <div>Blog Not Found</div>}
            </LayoutV1>
        </>
    );
};

export default BlogSinglePage;