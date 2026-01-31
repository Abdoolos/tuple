import Link from 'next/link';

interface DataType {
    id?: number;
    planClass?: string;
    plan?: string;
    planInfo?: string;
    planPrice?: number | string;
    priceType?: string;
    list1?: string;
    list2?: string;
    list3?: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    btnText?: string;
    btnClass?: string;
}

const SinglePriceV2 = ({ price }: { price: DataType }) => {
    const { planClass, plan, planInfo, planPrice, priceType, list1, list2, list3, icon1, icon2, icon3, btnText, btnClass } = price

    return (
        <>
            <div className={`pricing-style-two ${planClass}`}>
                <div className="pricing-header">
                    <h4>{plan}</h4>
                    <p>{planInfo}</p>
                </div>
                <div className="pricing-content">
                    <div className="price">
                        <h2><sup id="priceSup">$</sup>{planPrice} <sub>{priceType}</sub></h2>
                    </div>
                    <ul>
                        <li><i className={icon1}></i> {list1}</li>
                        <li><i className={icon2}></i> {list2}</li>
                        <li><i className={icon3}></i> {list3}</li>
                    </ul>
                    <Link className={`btn mt-30 btn-sm ${btnClass ? btnClass : ""} effect`} href={`/contact-us`}>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV2;