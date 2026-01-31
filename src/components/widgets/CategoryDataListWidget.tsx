import CategoryDataListData from '@/assets/jsonData/CategoryDataListData.json'
import Link from "next/link";
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const CategoryDataListWidget = () => {
    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">category list</h4>
                <div className="sidebar-info">
                    <ul>
                        {CategoryDataListData.map(category =>
                            <li key={category.id}>
                                <Link href="#" onClick={handleSmoothScroll}>{category.category} <span>{category.post}</span></Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryDataListWidget;