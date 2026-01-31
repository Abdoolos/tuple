import PaginationData from '@/assets/jsonData/PaginationData.json'
import Link from "next/link";
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const Pagination = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 pagi-area text-center">
                    <nav aria-label="navigation">
                        <ul className="pagination">
                            {PaginationData.map(pagination =>
                                <li className="page-item" key={`page-item ${pagination.id}`}>
                                    <Link className={`page-link ${pagination.activate}`} href="#" onClick={handleSmoothScroll}><i className={pagination.icon}></i> {pagination.number}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;