import Link from 'next/link';

interface DataType {
    cardClass?: string;
    itemClass?: string;
    planName?: string;
    planPrice?: number;
    planType?: string;
    planText?: string;
    btnLink?: string;
    btnText?: string;
    btnClass?: string;
    checkList1?: string;
    checkList2?: string;
    checkList3?: string;
    checkList4?: string;
    checkListIcon?: string;
}

const SinglePriceV1 = ({ price }: { price: DataType }) => {
    const { cardClass, itemClass, planName, planPrice, planType, planText, btnText, btnClass, checkList1, checkList2, checkList3, checkList4, checkListIcon } = price

    return (
        <>
            <div className={`pricing-style-one ${cardClass ? cardClass : ""} col-md-6`}>
                <div className={`item ${itemClass ? itemClass : ""}`}>
                    <div className="pricing-header">
                        <i className="flaticon-cleaning-6"></i>
                        <h4>{planName}</h4>
                        <h2><sup>$</sup>{planPrice} <sub>/{planType}</sub></h2>
                        <p>{planText}</p>
                        <div className="button">
                            <Link className={`btn btn-border ${btnClass ? btnClass : "btnClass"} btn-sm`} href="/contact-us">{btnText}</Link>
                        </div>
                    </div>
                    <div className="pricing-info">
                        <ul>
                            <li><i className={checkListIcon}></i> {checkList1}</li>
                            <li><i className={checkListIcon}></i> {checkList2}</li>
                            <li><i className={checkListIcon}></i> {checkList3}</li>
                            <li><i className={checkListIcon}></i> {checkList4}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;