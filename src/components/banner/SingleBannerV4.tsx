import Link from 'next/link';
import bannerShape from "@/assets/img/shape/banner-shape.png"
import Image from 'next/image';

type DataType = {
    thumb?: string;
    subTitle?: string;
    title?: string;
    text?: string;
    btnText?: string;
}

const SingleBannerV4 = ({ banner }: { banner: DataType }) => {
    const { thumb, subTitle, title, text, btnText } = banner

    return (
        <>
            <div className="swiper-slides banner-style-four">
                <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${thumb})` }}></div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="content">
                                <h4>{subTitle}</h4>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="button">
                                    <Link className="btn btn-theme btn-md animation" href="/contact-us">{btnText}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-four-shape">
                    <Image src={bannerShape} alt="Image Not Found" />
                </div>
            </div>
        </>
    );
};

export default SingleBannerV4;