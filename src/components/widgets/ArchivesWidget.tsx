import Link from "next/link";
import ArchiveData from '@/assets/jsonData/ArchiveData.json'
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const ArchivesWidget = () => {
    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Archives</h4>
                <div className="sidebar-info">
                    <ul>
                        {ArchiveData.map(archive =>
                            <li key={archive.id}><Link href="#" onClick={handleSmoothScroll}>{archive.month}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchivesWidget;