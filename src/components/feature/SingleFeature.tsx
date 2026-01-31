import Image from "next/image";

interface DataType {
    id?: number;
    title?: string;
    textFirst?: string;
    textLast?: string;
    thumb?: string;
}

const SingleFeature = ({ feature }: { feature: DataType }) => {
    const { title, textFirst, textLast, thumb } = feature

    return (
        <>
            <div className="feature-style-one">
                <div className="info">
                    <h4>{title}</h4>
                    <p>{textFirst} <br /> {textLast}</p>
                </div>
                <div className="icon">
                    <Image src={`/assets/img/icon/${thumb}`} alt="Image Not Found" width={480} height={480} />
                </div>
            </div>
        </>
    );
}

export default SingleFeature;