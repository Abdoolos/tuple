import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Dilabs - Blog 2 Column"
};

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-2-column" title1="Blog Grid" bottomSpace="pb-0" />
                <Blog2ColumnContent />
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnPage;