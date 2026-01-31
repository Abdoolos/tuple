import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BoucherWidget = () => {
    return (
        <>
            <div className="single-widget widget-brochure">
                <h4 className="widget-title">Brochure</h4>
                <ul>
                    <li><Link href="#" onClick={handleSmoothScroll}><i className="fa-solid fa-file-pdf"></i> Download Brochure </Link></li>
                    <li><Link href="#" onClick={handleSmoothScroll}><i className="fa-solid fa-file-pdf"></i> Company Details </Link></li>
                </ul>
            </div>
        </>
    );
};

export default BoucherWidget;