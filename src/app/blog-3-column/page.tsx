import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';

export const metadata = {
    title: "Dilabs - Blog 3 Column"
};

const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb breadCrumb="blog-3-column" title1="Blog Grid" bottomSpace="pb-0" />
                <Blog3ColumnContent />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;