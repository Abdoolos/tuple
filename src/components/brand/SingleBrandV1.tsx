import Image from 'next/image';

interface DataType {
    id?: number;
    thumb?: string;
}

const SingleBrandV1 = ({ brand }: { brand: DataType }) => {
    const { thumb } = brand

    return (
        <>
            <div className="swiper-slides">
                <Image src={`/assets/img/brand/${thumb}`} alt="Image Not Found" width={270} height={85} />
            </div>
        </>
    );
};

export default SingleBrandV1;