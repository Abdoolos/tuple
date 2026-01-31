"use client";
import BlogColumnData from '@/assets/jsonData/BlogColumnData.json'
import SingleBlog2Column from './SingleBlog2Column';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Pagination from 'react-paginate';

const Blog2ColumnContent = () => {

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get page from URL query
    const currentPageNumber = Number(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogColumnData.slice(startIndex, endIndex);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/blog-2-column?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogColumnData.length / itemsPerPage);

    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {currentBlogData.map(blog =>
                            <div className="col-lg-6 mb-50" key={blog.id}>
                                <SingleBlog2Column blog={blog} />
                            </div>
                        )}
                    </div>
                    <Pagination
                        previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                        nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                        breakLabel={'...'}
                        pageCount={Math.ceil(BlogColumnData.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination text-center'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                    />
                </div>
            </div>
        </>
    );
};

export default Blog2ColumnContent;